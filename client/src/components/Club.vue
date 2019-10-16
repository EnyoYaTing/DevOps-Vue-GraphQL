<template>
  <div class="body">
    <header>
      <img src="@/assets/club/premier-league-logo-header-full.png">
    </header>
    <br>
    <br>
    <ul>
      <b-link to="chelsea">
        <h4>{{ team1 }}</h4>
        <img src="@/assets/club/Chelsea_FC.svg" alt="Chelsea FC" width="200" height="200">
      </b-link>
    </ul>
    <ul>
      <b-link to="liverpool">
        <h4>{{ team2 }}</h4>
        <img src="@/assets/club/Liverpool_FC.svg" alt="Liverpool FC" width="200" height="200">
      </b-link>
    </ul>
    <ul>
      <b-link to="mancity">
        <h4>{{ team3 }}</h4>
        <img src="@/assets/club/Manchester_City_FC_badge.svg" alt="Man City" width="200" height="200">
      </b-link>
    </ul>
    <ul>
      <b-link to="manutd">
        <h4>{{ team4 }}</h4>
        <img src="@/assets/club/Manchester_United_FC_crest.svg" alt="Man Utd" width="200" height="200">
      </b-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "club",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      team1: "Chelsea",
      team2: "Liverpool",
      team3: "Manchester City",
      team4: "Manchester United"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .body {
  background-color: blue;
} */

header {
  background: #38003c;
}

ul img {
  /* background: rebeccapurple; */
  padding: 5%;
  height: 150px;
  width: auto;
}

ul {
  display: inline-block;
  /* background: black; */
  padding: 5%;
}
</style>
