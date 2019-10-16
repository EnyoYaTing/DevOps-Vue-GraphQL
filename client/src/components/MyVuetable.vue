<template>
  <div class="ui container">
    <filter-bar @search="search"></filter-bar>
    <vuetable ref="vuetable"
      :api-mode="false"
      :fields="fields"
      :data="tableDatas"
      pagination-path=""
    ></vuetable>
    <!-- <vuetable-pagination ref="pagination"
      @vuetable-pagination:change-page="onChangePage"
    ></vuetable-pagination> -->
    <b-pagination v-model="currentPage" :total-rows="dataCount" @change="pageChange" per-page="10"></b-pagination>
  </div>
</template>

<script>
import accounting from 'accounting'
import moment from 'moment'
import Vuetable from 'vuetable-2/src/components/Vuetable'
import VuetablePagination from 'vuetable-2/src/components/VuetablePagination'
import FilterBar from '@/components/FilterBar'
import { QUERY_TB_SORT_PTS, EXT_QUERY_PAGE_TB_SORT_PTS,QUERY_TB_COUNT } from '../constants/graphql'


export default {
  components: {
    Vuetable,
    VuetablePagination,
    FilterBar
  },
  data() {
    return {
      tableDatas:[],
      currentPage:1,
      dataCount:0,
      orderBy:'pts',
      keyword:'',
      fields: [{
          name: 'name',
          title: 'Club', // Change field name
          titleClass: 'left aligned',
          dataClass: 'left aligned'
        },
        {
          name: 'win',
          title: 'Win',
          titleClass: 'center aligned',
          dataClass: 'center aligned'
        },
        {
          name: 'draw',
          title: 'Draw',
          titleClass: 'center aligned',
          dataClass: 'center aligned'
        },
        {
          name: 'loss',
          title: 'Lose',
          titleClass: 'center aligned',
          dataClass: 'center aligned',
        },
        {
          name: 'pts',
          title: 'Pts',
          titleClass: 'center aligned',
          dataClass: 'center aligned',
        }
      ],
      getTables:[]
    }
  },
  methods: {
    //...
    onPaginationData (paginationData) {
      // console.log(paginationData)
      this.$refs.pagination.setPaginationData(paginationData)
    },
    onChangePage (page) {
      this.$refs.vuetable.changePage(page)
    },
    pageChange(page){
      this.$set(this,'currentPage',page)
    },
    search(keyword){
      this.keyword=keyword
    }
  },
  apollo: {
    getTableCount:{
      query: QUERY_TB_COUNT,
      variables(){
        return {
        }
      },update(data){
        this.dataCount=data.getTableCount
      }
    },
    getTables: {
      query: EXT_QUERY_PAGE_TB_SORT_PTS,
      variables(){
        return {
          orderBy: this.orderBy,
          direction: "DESC",  // DESC/ASC
          page:this.currentPage,
          keyword:this.keyword
        }
      },update(data){
        this.tableDatas=data.getPageTables
      }
    }
  }
}

</script>
