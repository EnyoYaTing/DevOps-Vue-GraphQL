<template>
<div id="app">
  <!-- header -->
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <!-- Just an image and webname-->
      <b-navbar-brand href="#">
        <img src="@/assets/index/chelsea_player.png" width="50" height="50">
        FootWorld
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">  <font-awesome-icon icon="home"/> Home</b-nav-item>
          <b-nav-item to="club"> <font-awesome-icon icon="futbol"/> Club</b-nav-item>
          <b-nav-item to="player"> <font-awesome-icon icon="mars"/> Player</b-nav-item>
          <b-nav-item to="stats"> <font-awesome-icon icon="signal"/> Stats</b-nav-item>
          <b-nav-item to="about"> <font-awesome-icon icon="paw"/> About</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template slot="button-content"><em>User</em></template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
  <!-- router view -->
  <router-view></router-view>

</div>
</template>

<script>
export default {
  name: 'app',
}

</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-bottom: 200px;
}

</style>
