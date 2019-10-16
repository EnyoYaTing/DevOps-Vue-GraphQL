<template>
  <div class="bodyy">
    <header>
      <div class="club">
        <img src="@/assets/club/Manchester_United_FC_crest.svg" alt="Man United">
        <h2>{{ clubname }}</h2>
      </div>
      <img src="@/assets/club/stadium/t1.jpg" alt="Old Trafford">

      <br>
      <ul>
        <li>
          <a href="https://www.facebook.com/mancity/" title="Facebook" target="_blank">
            <img src="@/assets/club/social/facebook.png">
            {{ fb }}
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/mancity/" title="Instagram" target="_blank">
            <img src="@/assets/club/social/instagram.png">
            {{ ig }}
          </a>
        </li>
        <li>
          <a href="https://twitter.com/mancity" title="Twitter" target="_blank">
            <img src="@/assets/club/social/twitter.png">
            {{ tw }}
          </a>
        </li>
        <li>
          <a href="http://www.mancity.com/" title="Website" target="_blank">
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
          src="https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/59945480_10156559216912746_1044397804274843648_n.jpg?_nc_cat=106&_nc_ht=scontent-lhr3-1.xx&oh=6db56c0b1168f8a4fb7f1e877bf1be41&oe=5D9F7470"
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
      clubname: "Manchester United Football Club",
      info: "Club Info",
      fb: "Facebook",
      ig: "Instagram",
      tw: "Twitter",
      web: "Website",
      score: "Lastest Score",
      league: "Premier League",
      date: "12/5/19",
      result: "Man United 0-2 Cardiff",
      next: "Lastest Score",
      nextleague: "Premier League",
      nextdate: "5/5/19",
      nextresult: "Huddersfield 1-1 Man United",
      title: "Qualify for Europa League!",
      text: "See you in Europa League next season!",
      news: news,
      stats: "Club Stats",
      items: [
        { description: "Goals", number: 65 },
        { description: "Clean Sheets", number: 7 },
        { description: "Shots", number: 526 },
        { description: "Tackles", number: 581 },
        { description: "Passes", number: 19202 },
        { description: "Hit Woodwork", number: 9 }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  background: #da291c;
  padding: 0;
  overflow: auto;
}

h3 {
  font-weight: bold;
  background: #da291c;
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
  /* background: #FBE122; */
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
