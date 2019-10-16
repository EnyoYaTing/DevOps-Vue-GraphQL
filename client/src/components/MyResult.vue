<!-- This component displays game results  -->
<template>
  <div>
    <b-row style="margin-top:20px;">
      <b-col sm="1"></b-col>
      <b-col sm="7">
        <b-row>
          <b-col sm="6">
            <label for="search-date">Search date:</label>
          </b-col>
          <b-col sm="6">
            <b-form-input
              id="search-date"
              size="sm"
              v-model="var_date"
              placeholder="YYYY-MM-DD"
            ></b-form-input>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <!-- match score card -->
    <b-row>
      <div v-for='elem in getRangeResult' class="card" >
          <h5> {{elem.h_name}} - {{elem.a_name}} </h5> <!-- query test -->
          <p> {{elem.h_score}} : {{elem.a_score}} </p>
      </div>
    </b-row>
  </div>
</template>

<script>
import { QUERY_DATE_RESULT } from '../constants/graphql'

export default {
  name: 'MyResult',
  data() {
    return {
      var_date:"",
      getRangeResult: []
    }
  },
  apollo: {
    getRangeResult: {
      query: QUERY_DATE_RESULT,
      variables(){
        return {
          date: this.var_date,
          // date: this.var_date,
        }
      }
    }
  }
}
</script>

<style>
p {
  font-weight: bold;
  font-size: 120%;
  text-align: center;
  margin: auto;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin-top:20px;
  position: relative;
  padding: 20px;
  left: 48px;
  width: 72%;
  height:15%;
  text-align: center;
  font-family: arial;
  color: #FFFFFF;
  border-style: solid;
  background-color: #595959;
}
</style>
