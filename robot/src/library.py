from src.name_list import Name_list
from src.mongo import Mongo
from src.parser import Parser
from typing import List, TypeVar
import time
import datetime

def update_team_table() -> None:
    nl = Name_list()
    p  = Parser(nl.PREMIER_URL)
    m  = Mongo()
    table = p.get_table(nl.PREMIER_URL_H, class_var='table hover leagueTable')
    data = p.get_data_from_tb(p.get_tr_arr_from_tbody(table), "home")
    m.save_team_table(data)
    table = p.get_table(nl.PREMIER_URL_A, class_var='table hover leagueTable')
    data = p.get_data_from_tb(p.get_tr_arr_from_tbody(table), "away")
    m.save_team_table(data)
    m.update_total_table(p.get_league(), p.get_season())
    m.update_table_rank(p.get_league(), p.get_season())

def update_result(date: str) -> None:
    nl = Name_list()
    p  = Parser(nl.PREMIER_URL)
    m = Mongo()
    div_bloc = p.get_div(nl.PREMIER_RESULTS+date, class_var='widget-fixtures-and-results')
    for league in nl.LEAGUE_LISTS:
        data = p.get_today_data(div_bloc, league)
        season = get_season_by_date(date)
        league = convert_league_name(league)
        # Guardian for NULL data
        if len(data) == 0:  continue
        assert len(data) > 0
        assert len(data[0]) == 4
        assert len(data[ len(data)-1 ]) == 4
        m.update_result_data(data, league, season, date)

def update_period_result(start: str, stop: str) -> None:
    # This is a constant for how many seconds in one day
    DELTA = 86400

    target_ts = int(time.mktime(datetime.datetime.strptime(start, "%Y-%m-%d").timetuple()))
    stop_ts = int(time.mktime(datetime.datetime.strptime(stop, "%Y-%m-%d").timetuple()))
    while target_ts < stop_ts:
        target_date = datetime.datetime.fromtimestamp(target_ts).strftime('%Y-%m-%d')
        print(target_date)
        update_result(target_date)
        target_ts = int(time.mktime(datetime.datetime.strptime(target_date, "%Y-%m-%d").timetuple()))
        target_ts += DELTA

# calculate season through a specific date
def get_season_by_date(date:str) -> str:
    date_set = date.split('-')
    year = int(date_set[0])
    month_number = int(date_set[1])
    if month_number > 7:
        return str(year)+"-"+str(year+1)
    return str(year-1)+"-"+str(year)

def convert_league_name(league: str) -> str:
    if league == "Premier League":
        return "premier"
    return "none"

def test_func():
    lt = List()
    p  = Parser(lt.PREMIER_URL)
    m = Mongo()
    m.test(p.get_league(), p.get_season())
