<template>
  <div>
    <div class="row">
      <div class="col-sm-1"></div>
      <div class="col-sm-5">
        <section class="charts">
          <highcharts v-if="!$apollo.loading" :options="pieOptions" ref="pieChart"></highcharts>
        </section>
      </div> <!-- Pie -->
      <div class="col-sm-5">
        <section class="charts">
          <highcharts v-if="!$apollo.loading" :options="barOptions" ref="pieChart"></highcharts>
        </section>
      </div> <!-- Bar -->
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import HighchartsVue from "highcharts-vue";
import { Chart } from "highcharts-vue";
// 加入 GraphQL 的常數(Query程式碼)
import { QUERY_PIE_CHART, QUERY_BAR_CHART } from "../constants/graphql";

export default {
  name: "stats",
  components: {
    highcharts: Chart
  },
  data: function() {
    // console.log(getTables());

    return {
      msg: "Welcome to Your Vue.js App",

      pieOptions: {
        chart: {
          type: "pie",
          options3d: {
            enabled: true,
            alpha: 45
          }
        },
        title: {
          text: "Clubs Points"
        },
        subtitle: {
          text: "20 Premier Clubs' Points in 2018-2019"
        },
        plotOptions: {
          pie: {
            innerSize: 100,
            depth: 50
          }
        },
        series: [
          {
            name: "Pts",
            data: []
          }
        ]
      }, // pieOptions
      barOptions: {
        chart: {
          type: "column"
        },
        title: {
          text: "Clubs Points"
        },
        subtitle: {
          text: "20 Premier Clubs' Points in 2018-2019"
        },
        plotOptions: {
          pie: {
            innerSize: 100,
            depth: 50
          }
        },
        series: [
          {
            name: "Pts",
            colorByPoint: true, // make bar colorful
            data: [

            ]
          }
        ]
      } // pieOptions
    };
  },
  apollo: {
    pieData: {
      query: QUERY_PIE_CHART,
      variables: {
        orderBy: "pts",
        direction: "DESC"
      },
      update(data) {

        this.pieOptions.series[0].data = data.getTables;
        // this.barOptions.series[0].data=data.getTables
      }
    },
    barData: {
      query: QUERY_BAR_CHART,
      variables: {
        orderBy: "pts",
        direction: "DESC"
      },
      update(data) {
        let newData = [];
        // let columns=[]
        // console.log(data)
        for (let i in data.getTables) {
          // console.log(data.getTables[i].data)
          //  console.log(data.getTables[i].name,data.getTables[i].data)
          let name = data.getTables[i].name;
          let rawdata = data.getTables[i].data;
          newData.push([name, rawdata]);

        }

        this.barOptions.series[0].data = newData;

        // this.barOptions.series[0].data=data.getTables
      }
    }
  }
};
</script>

// <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2,
h3 {
  font-weight: normal;
  padding: 50px;
}

ul {
  list-style-type: none;
  padding: 0;
}

section {
  padding: 50px;
}

</style>
