import datetime
from bs4 import BeautifulSoup
from urllib.request import urlopen
from typing import List, TypeVar

class Parser:
    def __init__(self, url: str, league: str="premier") -> None:
        self.__league = league
        self.__season_year = self.__get_season_year(url, self.__league)
        self.__table_name = {
            'total':['p', 'win', 'draw', 'loss', 'goal', 'l_goal'],
            'home':['h_p', 'h_win', 'h_draw', 'h_loss', 'h_goal', 'h_l_goal'],
            'away':['a_p', 'a_win', 'a_draw', 'a_loss', 'a_goal', 'a_l_goal']
        }
        # print(self.__season_year)

    def get_season(self):
        return self.__season_year
    def get_league(self):
        return self.__league
    # This method is used to find season year for each league
    @classmethod
    def __get_season_year(cls, url: str, league: str) -> str:

        data = cls.__premier_season_data(url)
        season_year = cls.__calculate_season_year(data)

        assert len(season_year) == 9
        return season_year

    # get seasonal year data depends on league
    @staticmethod
    def __premier_season_data(url: str) -> List[str]:
        page = urlopen(url)
        soup = BeautifulSoup(page, 'html.parser')
        date_var = soup.find('h2', attrs={'id': 'fixturesResultsHeading'})

        return date_var.get_text().split(' ')

    # calculate season year depends on the league
    @staticmethod
    def __calculate_season_year(data_arr: List[str]) -> str:
        year = int(data_arr[3])
        month_number = datetime.datetime.strptime(data_arr[2], '%b').month
        if month_number > 7:
            return str(year)+"-"+str(year+1)

        return str(year-1)+"-"+str(year)


    """
    @ url, id_var, class_var
    """
    @staticmethod
    def get_table(url: str, id_var: str=None, class_var: str=None) -> str:
        page = urlopen(url)
        soup = BeautifulSoup(page, 'html.parser')

        if id_var and class_var:
            return soup.find('table', attrs={'id':id_var, 'class':class_var})
        elif id_var and not class_var:
            return soup.find('table', attrs={'id':id_var})
        elif not id_var and class_var:
            return soup.find('table', attrs={'class':class_var})
        return soup.find_all('table')

    @staticmethod
    def get_div(url: str, id_var: str=None, class_var: str=None) -> str:
        page = urlopen(url)
        soup = BeautifulSoup(page, 'html.parser')

        if id_var and class_var:
            return soup.find('div', attrs={'id':id_var, 'class':class_var})
        elif id_var and not class_var:
            return soup.find('div', attrs={'id':id_var})
        elif not id_var and class_var:
            return soup.find('div', attrs={'class':class_var})
        return soup.find_all('div')

    T = TypeVar('T', int, str, int, str)
    @staticmethod
    def get_today_data(div_bloc: str, league: str) -> List[List[T]]:
        dataset = div_bloc.find_all('div', attrs={'class':'competition-matches'})

        game_dataset = []
        for row in dataset:
            title = row.find('a', attrs={'class':'competition-title'}).get_text().strip()
            if title == league:
                game_arr = row.find('div', attrs={'class':'match-row-list'}).\
                            find_all('div', attrs={'class':'match-row status-pld'})
                for game in game_arr:
                    teams = game.find('div',attrs={'class':'match-data'}).find_all('div')
                    game_data = []
                    for elem in teams:
                        span_data = elem.find_all('span')
                        if len(span_data) < 1:  continue
                        game_data.append(int(span_data[0].get_text()))
                        game_data.append(span_data[2].get_text().strip())

                    game_dataset.append(game_data)
            else:
                continue
        return game_dataset

    @staticmethod
    def get_tr_arr_from_tbody(table: str, id_var: str=None, class_var: str=None) -> List[str]:
        if id_var and class_var:
            return table.find('tbody', attrs={'id':id_var, 'class':class_var}).find_all('tr')
        elif id_var and not class_var:
            return table.find('tbody', attrs={'id':id_var}).find_all('tr')
        elif not id_var and class_var:
            return table.find('tbody', attrs={'class':class_var}).find_all('tr')
        return table.find('tbody').find_all('tr')

    def get_data_from_tb(self, tr_arr: List[str], h_a: str) -> List[dict]:
        arr = []
        for tr_row in tr_arr:
            arr.append(self.standing_tr_data_to_dict(tr_row, h_a))
        return arr

    def standing_tr_data_to_dict(self, tr:str, h_a: str) -> dict:
        _arr = tr.find_all('td')
        dict_data = {"season": self.__season_year, "league": self.__league}
        for itr in range(1, len(_arr),1):
            if itr == 1:
                dict_data["name"] = _arr[itr].get_text()
            if itr>1 and itr<8:
                dict_data[self.__table_name[h_a][itr-2]] = int(_arr[itr].get_text())
            if itr == 9:
                if h_a == "home":
                    dict_data["h_pts"] = int(_arr[itr].get_text())
                else:
                    dict_data["a_pts"] = int(_arr[itr].get_text())
        return dict_data
















#
