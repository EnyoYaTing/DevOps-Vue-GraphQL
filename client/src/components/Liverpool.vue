<template>
  <div class="bodyy">
    <header>
      <div class="club">
        <img src="@/assets/club/Liverpool_FC.svg" alt="Liverpool FC">
        <h2>{{ clubname }}</h2>
      </div>
      <img src="@/assets/club/stadium/t14.jpg" alt="Anfield">

      <br>
      <ul>
        <li>
          <a href="https://www.facebook.com/LiverpoolFC/" title="Facebook" target="_blank">
            <img src="@/assets/club/social/facebook.png">
            {{ fb }}
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/liverpoolfc/" title="Instagram" target="_blank">
            <img src="@/assets/club/social/instagram.png">
            {{ ig }}
          </a>
        </li>
        <li>
          <a href="https://twitter.com/lfc" title="Twitter" target="_blank">
            <img src="@/assets/club/social/twitter.png">
            {{ tw }}
          </a>
        </li>
        <li>
          <a href="http://www.liverpoolfc.com/" title="Website" target="_blank">
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
          src="https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/60064231_10157872028192573_8850144425418948608_n.jpg?_nc_cat=1&_nc_ht=scontent-lhr3-1.xx&oh=38855d802896c8b00c13e91f4c1fc932&oe=5D52854C"
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
      clubname: "Liverpool Football Club",
      info: "Club Info",
      fb: "Facebook",
      ig: "Instagram",
      tw: "Twitter",
      web: "Website",
      score: "Lastest Score",
      league: "Premier League",
      date: "12/5/19",
      result: "Liverpool 2-0 Wolves",
      next: "Next Game",
      nextleague: "Champions League Final",
      nextdate: "1/6/19",
      nextresult: "Tottenham  -  Liverpool",
      title: "Champions of Europe?",
      text: "Liverpool beats Tottenham in Champions League",
      news: news,
      stats: "Club Stats",
      items: [
        { description: "Goals", number: 89 },
        { description: "Clean Sheets", number: 21 },
        { description: "Shots", number: 575 },
        { description: "Tackles", number: 610 },
        { description: "Passes", number: 23638 },
        { description: "Hit Woodwork", number: 19 }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  background: #c8102e;
  padding: 0;
  overflow: auto;
}

h3 {
  font-weight: bold;
  background: #c8102e;
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
  background: #00b2a9;
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
