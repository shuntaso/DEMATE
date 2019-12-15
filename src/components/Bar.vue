<template>
  <div id="bar">
    <h1>Q.{{ title }}</h1>
    <div class="container-bar">
      <div class="item item1">
        <span class="label">%</span>
      </div>
      <div class="item item2">
        <span class="label">%</span>
      </div>
    </div>
    <br />
    <Info />
  </div>
</template>

<script>
import Info from "@/components/Info.vue";
export default {
  components: { Info },
  props: {
    title: {
      type: String,
      default: "",
      required: true
    }
  },
  data() {
    return {};
  },

  methods: {}
};
</script>

<style scoped>
body {
  padding: 8px;
  background-color: #20262e;
  font-size: 12px;
}
#bar {
  margin-bottom: -48px;
}

h1 {
  font-size: 24px;
}

.container-bar {
  display: flex;
  width: 100%;
  height: 80px;
  flex-direction: row;
  justify-content: space-between;
}
.item {
  padding: 4px;
  background-color: #ffffff;
  box-sizing: border-box;
}

.label {
  white-space: nowrap;
}

/* item:奇数は、左丸く item:偶数は、右丸く  */
.item1 {
  width: 40%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: rgba(69, 126, 51, 0.527);
}
.item2 {
  width: 60%;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: burlywood;
}
</style>
