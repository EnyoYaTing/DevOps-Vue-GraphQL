/*
These are query variables (graphql)
*/
import gql from 'graphql-tag'

const QUERY_TB_SORT_PTS = gql`
  query QueryTbSortPts {
    getTables (orderBy:"pts", direction:DESC,page:1){
      name,
      win,
      draw,
      loss,
      pts
    }
  }
`

const QUERY_TB_COUNT = gql`
  query QueryTbCount {
    getTableCount
  }
`

const EXT_QUERY_TB_SORT_PTS = gql`
  query ExtQueryTbSortPts($orderBy: String, $direction: SortDirection) {
    getTables (orderBy: $orderBy, direction: $direction){
      name,
      win,
      draw,
      loss,
      pts
    }
  }
`

const EXT_QUERY_PAGE_TB_SORT_PTS = gql`
  query ExtQueryPageTbSortPts($orderBy: String, $direction: SortDirection,$page:Int,$keyword:String) {
    getPageTables (orderBy: $orderBy, direction: $direction,page:$page,keyword:$keyword){
      name,
      win,
      draw,
      loss,
      pts
    }
  }
`

const QUERY_PIE_CHART = gql`
  query QueryPieChart($orderBy: String, $direction: SortDirection) {
    getTables (orderBy: $orderBy, direction: $direction){
      name,
      y:pts
    }
  }
`
const QUERY_BAR_CHART = gql`
  query QueryPieChart($orderBy: String, $direction: SortDirection) {
    getTables (orderBy: $orderBy, direction: $direction){
      name,
      data:pts
    }
  }
`

const QUERY_DATE_RESULT = gql`
  query QueryDateResult($date: String) {
    getRangeResult (date: $date){
      date,
      a_name,
      h_name,
      a_score,
      h_score
    }
  }
`

export {
  QUERY_TB_SORT_PTS,
  EXT_QUERY_TB_SORT_PTS,
  EXT_QUERY_PAGE_TB_SORT_PTS,
  QUERY_PIE_CHART,
  QUERY_BAR_CHART,
  QUERY_TB_COUNT,
  QUERY_DATE_RESULT
}
