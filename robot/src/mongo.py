import pymongo as py
import time
import datetime
import copy
from typing import List, TypeVar

class Mongo:
    def __init__(self) -> None:
        self.__client = py.MongoClient('mongodb+srv://ahah:da18787@cluster0-hlezw.mongodb.net/test?retryWrites=true')
        self.__db_football = self.__client.football
        self.__table = self.__db_football.table
        self.__results = self.__db_football.results

    def save_team_table(self, data: List[dict]) -> None:
        for raw_data in data:
            query = {'name': raw_data['name'], 'season': raw_data['season']}
            self.__table.update_one(query, {"$set": raw_data}, upsert=True)

    def update_total_table(self, league: str, season: str) -> None:
        query = {'league': league, 'season': season}
        data = self.__table.find(query)
        for elem in data:
            query['name'] = elem['name']
            raw_data = {
                'p': elem['h_p'] + elem['a_p'],
                'win': elem['h_win'] + elem['a_win'],
                'draw': elem['h_draw'] + elem['a_draw'],
                'loss': elem['h_loss'] + elem['a_loss'],
                'goal': elem['h_goal'] + elem['a_goal'],
                'l_goal': elem['h_l_goal'] + elem['a_l_goal'],
                'pts': elem['h_pts'] + elem['a_pts']
            }
            self.__table.update_one(query, {"$set": raw_data}, upsert=True)

    def update_table_rank(self, league: str, season: str) -> None:
        query = {'league': league, 'season': season}
        data = self.__table.find(query).sort("pts",-1)
        rk_itr = 1
        for elem in data:
            query['name'] = elem['name']
            raw_data = {'rank': rk_itr}
            self.__table.update_one(query, {"$set": raw_data}, upsert=True)
            rk_itr += 1

    T = TypeVar('T', int, str, int, str)
    def update_result_data(self, dataset: List[List[T]], league: str, season: str, date: str) -> None:
        # Convert date('YYYY-MM-DD') into timestamp
        timestamp = int(time.mktime(datetime.datetime.strptime(date, "%Y-%m-%d").timetuple()))
        query = {'league': league, 'date': date, 'season': season}
        for data_row in dataset:
            query['h_name'] = data_row[1]
            query['a_name'] = data_row[3]
            raw_data = copy.deepcopy(query)
            raw_data['h_score'] = data_row[0]
            raw_data['a_score'] = data_row[2]
            del raw_data['date']

            duplicated_data = self.__results.find_one(raw_data)
            if duplicated_data: continue
            raw_data['date'] = date
            raw_data['timestamp'] = timestamp
            self.__results.update_one(query, {"$set": raw_data}, upsert=True)

    ###########################################################################
    def test(self, league: str, season: str) -> None:
        query = {'league': league, 'season': season}
        data = self.__table.find(query).sort("pts",-1)

        for elem in data:
            print(elem)












#
