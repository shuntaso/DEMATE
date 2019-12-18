<template>
  <div class="home">
    <button type="submit" class="life" @click="clickLife">
      <i class="fas fa-home"></i>
    </button>
    <button type="submit" class="food" @click="clickFood">
      <i class="fas fa-utensils"></i>
    </button>
    <button type="submit" class="animal" @click="clickAnimal">
      <i class="fas fa-paw"></i>
    </button>
    <button type="submit" class="nature" @click="clickNature">
      <i class="fas fa-tree"></i>
    </button>
    <button type="submit" class="sports" @click="clickSports">
      <i class="fas fa-futbol"></i>
    </button>
    <button type="submit" class="book" @click="clickBook">
      <i class="fas fa-book-open"></i>
    </button>
    <button type="submit" class="fashion" @click="clickFashion">
      <i class="fas fa-tshirt"></i>
    </button>
    <button type="submit" class="world" @click="clickWorld">
      <i class="fas fa-globe-asia"></i>
    </button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {},
  methods: {
    clickLife() {
      this.$router.push({ path: "life" });
    },
    clickFood() {
      this.$router.push({ path: "food" });
    },
    clickAnimal() {
      this.$router.push({ path: "animal" });
    },
    clickNature() {
      this.$router.push({ path: "nature" });
    },
    clickSports() {
      this.$router.push({ path: "sports" });
    },
    clickBook() {
      this.$router.push({ path: "book" });
    },
    clickFashion() {
      this.$router.push({ path: "fashion" });
    },
    clickWorld() {
      this.$router.push({ path: "world" });
    }
  }
};
</script>

<style scoped>
.home {
  animation-name: fadeIn;
  animation-duration: 3s;
}
button {
  cursor: pointer;
  outline: 0;
}
button:active {
  font-size: 120px;
}
.life {
  position: absolute;
  margin-left: 200px;
  margin-top: 190px;
  border-radius: 30px;
  padding: 20px 20px;
  font-size: 128px;
}
.life:hover {
  color: rgb(245, 209, 9);
}
.food {
  position: absolute;
  margin-left: 480px;
  margin-top: 190px;
  border-radius: 30px;
  padding: 20px 40px;
  font-size: 128px;
}
.food:hover {
  color: coral;
}
.animal {
  position: absolute;
  margin-left: 760px;
  margin-top: 190px;
  border-radius: 30px;
  padding: 20px 30px;
  font-size: 128px;
}
.animal:hover {
  color: #e9451b;
}
.nature {
  position: absolute;
  font-size: 128px;
  margin-left: 1040px;
  margin-top: 190px;
  border-radius: 30px;
  padding: 20px 44px;
}
.nature:hover {
  color: rgb(8, 112, 34);
}
.sports {
  position: absolute;
  margin-left: 200px;
  margin-top: 490px;
  border-radius: 30px;
  padding: 20px 30px;
  font-size: 128px;
}
.sports:hover {
  color: rgb(13, 194, 240);
}
.book {
  position: absolute;
  margin-left: 480px;
  margin-top: 490px;
  border-radius: 30px;
  padding: 20px 20px;
  font-size: 128px;
}
.book:hover {
  color: rgba(216, 180, 83, 0.849);
}
.fashion {
  position: absolute;
  margin-left: 760px;
  margin-top: 490px;
  border-radius: 30px;
  padding: 20px 16px;
  font-size: 128px;
}
.fashion:hover {
  color: rgb(245, 21, 215);
}
.world {
  position: absolute;
  margin-left: 1040px;
  margin-top: 490px;
  border-radius: 30px;
  padding: 20px 35px;
  font-size: 128px;
}
.world:hover {
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
