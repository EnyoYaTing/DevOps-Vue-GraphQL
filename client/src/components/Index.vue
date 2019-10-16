<template>
    <div>
      <!-- image & text -->
        <div class="container">
            <img :src="image" alt="Snow" style="width:100%;">
            <h1 class="top-right_1">{{messege_1}}</h1>
            <h1 class="top-right_2">{{messege_2}}</h1>
            <h1 class="top-right_3">{{messege_3}}</h1>
            <h1 class="top-right_4">{{messege_4}}</h1>
        </div>

        <b-row>
            <b-col sm="1"></b-col>
            <b-col sm="5" class="notice">
                <!-- datatable -->
                <h3 class="dotted_1">{{table}}</h3>
                <my-vuetable></my-vuetable>
            </b-col>
            <b-col sm="5" class="notice">
                <!-- datatable -->
                <b-row><h3 class="dotted_2">{{score}}</h3></b-row>
                <my-result></my-result>
            </b-col>
            <!-- {{getRangeResult}} -->
        </b-row> <!-- row -->
    </div>
</template>

<script>
import Vuetable from 'vuetable-2/src/components/Vuetable'
import VuetablePagination from 'vuetable-2/src/components/VuetablePagination'
import { BCarousel } from 'bootstrap-vue/es/components'
import MyVuetable from '@/components/MyVuetable'
import MyResult from '@/components/MyResult'
import image from '@/assets/index/football_1.png'
import { QUERY_DATE_RESULT } from '../constants/graphql'


export default {
  name: 'index',
  components: {
    Vuetable,
    VuetablePagination,
    MyVuetable,
    MyResult
  },
  data() {
    return {
      filterText: '',
      msg: 'Welcome to Your Vue.js App',
      messege_1: 'Welcome To',
      messege_2: 'Football World',
      messege_3: 'This is a amazing world which',
      messege_4: 'provides all information about football.',
      table: 'Table',
      score: 'Match Score',
      image: image,
      attrs: [
        {
          key: 'today',
          highlight: {
            backgroundColor: '#ff8080',
            // Other properties are available too, like `height` & `borderRadius`
          },
          dates: new Date(2018, 0, 1)
        }
      ],
      getRangeResult: []
    }
  },
  methods: {
    doFilter() {
      console.log('doFilter:', this.filterText)
    },
    resetFilter() {
      this.filterText = ''
      console.log('resetFilter')
    }
  },
  apollo: {
    getRangeResult: {
      query: QUERY_DATE_RESULT,
      variables(){
        return {
          from: "2019-05-11",
          to: "2019-05-13"
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Bevan|Kalam|Paytone+One&display=swap&subset=latin-ext,vietnamese');

h1 {
  font-weight: normal;
  font-family: 'Paytone One', sans-serif;
  font-size: 500%;
  color: #FFFFFF;
}

h3 {
  font-weight: normal;
  text-align: center;
  padding: 15px;
  color: #FFFFFF;
}

.container {
  position: relative;
  text-align: center;
  color: #FFFFFF;
}

.top-right_1 {
  position: absolute;
  top: 60px;
  right: 90px;
  font-family: 'Paytone One', sans-serif;
  font-size:  500%;
}

.top-right_2 {
  position: absolute;
  top: 160px;
  right: 65px;
  font-family: 'Paytone One', sans-serif;
  font-size:  420%;
}

.top-right_3 {
  position: absolute;
  top: 330px;
  right: 180px;
  font-family: 'Paytone One', sans-serif;
  font-size:  150%;
}

.top-right_4 {
  position: absolute;
  top: 350px;
  right: 65px;
  font-family: 'Paytone One', sans-serif;
  font-size:  150%;
}

.notice {
  position: relative;
  top:  30px;
  left: 45px;
}

.dotted_1 {
  position: relative;
  left: 15px;
  width: 95%;
  border-style: dotted;
  background-color: #000000;

}

.dotted_2 {
  position: relative;
  left: 40px;
  width: 75%;
  background-color: #000000;
  border-style: dotted;
}

</style>
