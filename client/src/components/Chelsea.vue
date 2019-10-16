<template>
  <div class="bodyy">
    <header>
      <div class="club">
        <img src="@/assets/club/Chelsea_FC.svg" alt="Chelsea FC">
        <h2>{{ clubname }}</h2>
      </div>
      <img src="@/assets/club/stadium/t8.jpg" alt="Stamford Bridge">

      <br>
      <ul>
        <li>
          <a href="https://www.facebook.com/ChelseaFC/" title="Facebook" target="_blank">
            <img src="@/assets/club/social/facebook.png">
            {{ fb }}
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/chelseafc/" title="Instagram" target="_blank">
            <img src="@/assets/club/social/instagram.png">
            {{ ig }}
          </a>
        </li>
        <li>
          <a href="https://twitter.com/chelseafc" title="Twitter" target="_blank">
            <img src="@/assets/club/social/twitter.png">
            {{ tw }}
          </a>
        </li>
        <li>
          <a href="http://www.chelseafc.com/" title="Website" target="_blank">
            <img src="@/assets/club/football.svg" width="25px">
            {{ web }}
          </a>
        </li>
      </ul>
    </header>

    <div class="container">
      <div class="game">
        <h3>{{ score }}</h3>
        <p>
          {{ league }}
          <br>
          {{ date }}
          <br>
          {{ result }}
        </p>
        <p>
          {{ nextleague }}
          <br>
          {{ nextdate }}
          <br>
          {{ nextresult }}
        </p>
      </div>

      <div class="clubtable">
        <h3>{{ stats }}</h3>
        <b-table :items="items" thead-class="hidden_header" class="table table-borderless"></b-table>
      </div>
    </div>

    <div class="news">
      <h3>{{ title }}</h3>
      <!-- <div v-for="post in news">
        {{ post.title }}
        {{ post.url }}
        {{ post.imgurl }}
      </div>-->
      <div>
        {{ text }}
        <img
          src="https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/59746095_10157491294872259_9153848696859787264_o.jpg?_nc_cat=103&_nc_ht=scontent-lhr3-1.xx&oh=1953d427e458b95ab5ba269c30313354&oe=5D650025"
        >
      </div>
    </div>
  </div>
</template>

<script>
import news from "@/assets/news.json";

export default {
  name: "chelsea",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      clubname: "Chelsea Football Club",
      info: "Club Info",
      fb: "Facebook",
      ig: "Instagram",
      tw: "Twitter",
      web: "Website",
      score: "Lastest Score",
      league: "Premier League",
      date: "12/5/19",
      result: "Leicester 0-0 Chelsea",
      next: "Next Game",
      nextleague: "Europa League Final",
      nextdate: "29/5/19",
      nextresult: "Chelsea  -  Arsenal",
      title: "CHAMPIONS OF EUROPE!",
      text:
        "Chelsea beats Arsenal with 3-0 and wins Europa League. " +
        "Eden Hazard signs new contract. " +
        "Aston Villa gets promoted to Premier League.",
      news: news,
      stats: "Club Stats",
      items: [
        { description: "Goals", number: 63 },
        { description: "Clean Sheets", number: 16 },
        { description: "Shots", number: 607 },
        { description: "Tackles", number: 0 },
        { description: "Passes", number: 25070 },
        { description: "Hit Woodwork", number: 21 }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  background: #034694;
  padding: 0;
  overflow: auto;
}

h3 {
  font-weight: bold;
  background: #034694;
  color: white;
  padding: 10%;
  white-space: nowrap;
  display: flex;
  justify-content: center;
}

header > img {
  float: right;
}

header > .club {
  display: inline-block;
  /* background: black; */
}

header > .club > img {
  height: 200px;
  width: auto;
  padding: 5%;
}

header > ul {
  list-style: none;
  background: #6a7ab5;
}

header > ul > li {
  display: inline-block;
  padding: 1%;
  margin: 0 2% 0 0;
}

header > ul > li > a > img {
  /* background: yellow; */
}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.container {
  position: relative;
  margin-top: 1%;
}

.game {
  padding: 2%;
  /* background: orange; */
  border: solid;
  border-color: black;
  float: left;
}

.clubtable {
  padding: 2%;
  /* margin-top: 6%; */
  float: right;
  /* margin-right: 2%; */
  /* background: cornflowerblue; */
  border: solid;
  border-color: black;
  font-weight: bold;
}

.news {
  margin: 0 auto;
  max-width: 600px;
  /* background: khaki; */
  word-wrap: break-word;
  border: solid;
  border-color: black;
  padding: 1%;
}
</style>

<style>
.bodyy {
  margin: 0 auto;
  border: none;
}

.hidden_header {
  display: none;
}
</style>
