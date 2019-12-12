<template>
  <div id="app">
    <div id="demate-fixed">
      <router-link to="/" class="demate">Demate</router-link>
    </div>

    <div id="nav-fixed">
      <div class="nav">
        <span class="nav-life"
          ><router-link to="/life">Life</router-link> |
        </span>
        <span class="nav-food"
          ><router-link to="/food">Food</router-link> |
        </span>
        <span class="nav-animal"
          ><router-link to="/animal">Animal</router-link> |
        </span>
        <span class="nav-nature">
          <router-link to="/nature">Nature</router-link> |
        </span>
        <span class="nav-sports">
          <router-link to="/sports">Sports</router-link> |
        </span>
        <span class="nav-book"
          ><router-link to="/book">Book</router-link> |
        </span>
        <span class="nav-fashion">
          <router-link to="/fashion">Fashion</router-link> |
        </span>
        <span class="nav-world">
          <router-link to="/world">World</router-link>
        </span>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  components: {},

  methods: {}
};
</script>

<style scoped>
#app {
  width: 100%;
  height: 100%;
  color: #2c3e50;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  animation-name: fadeIn;
  animation-duration: 3s;
}

/* DEMATEの場所を制御できる */
#demate-fixed {
  position: fixed;
  margin: 10px 0 0 20px;
  z-index: 5;
}
.demate {
  margin: 30px 30px 30px 30px;
  color: black;
  font-size: 48px;
  font-family: "Solway", serif;
  font-weight: bold;
  cursor: pointer;
}
.demate:hover {
  color: rgba(110, 58, 5, 0.986);
}

#nav-fixed {
  position: fixed;
  width: 100%; /* 横幅100%*/
  padding: 30px 30px 15px 30px;
  background-color: white;
  text-align: center;
  z-index: 4;
}
/* ナビゲーションバーの位置を制御できる */
.nav {
  padding: 40px 20px 10px 20px;
  text-align: center;
}
.nav a {
  color: #2c3e50;
  font-family: "Solway", serif;
}

a {
  padding-left: 10px;
  padding-right: 10px;
  /* ナビゲーションバーのフォントサイズ */
  font-size: 28px;
}

.nav-life a.router-link-exact-active {
  color: rgb(245, 209, 9);
}
.nav-life a:hover {
  color: rgb(245, 209, 9);
}

.nav-food a.router-link-exact-active {
  color: coral;
}
.nav-food a:hover {
  color: coral;
}

.nav-animal a.router-link-exact-active {
  color: #e9451b;
}
.nav-animal a:hover {
  color: #e9451b;
}

.nav-nature a.router-link-exact-active {
  color: rgb(8, 112, 34);
}
.nav-nature a:hover {
  color: rgb(8, 112, 34);
}

.nav-sports a.router-link-exact-active {
  color: rgb(13, 194, 240);
}
.nav-sports a:hover {
  color: rgb(13, 194, 240);
}

.nav-book a.router-link-exact-active {
  color: rgba(216, 180, 83, 0.849);
}
.nav-book a:hover {
  color: rgba(216, 180, 83, 0.849);
}

.nav-fashion a.router-link-exact-active {
  color: rgb(245, 21, 215);
}
.nav-fashion a:hover {
  color: rgb(245, 21, 215);
}

.nav-world a.router-link-exact-active {
  color: skyblue;
}
.nav-world a:hover {
  color: skyblue;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
