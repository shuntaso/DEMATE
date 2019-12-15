<template>
  <div class="content-life">
    <bar v-for="title in topics" v-bind:key="title" :title="title"> </bar>
  </div>
</template>

<script>
import Bar from "@/components/Bar.vue";
// import Info from "@/components/Info.vue";

export default {
  components: { Bar },
  data() {
    return {
      topics: [
        "犬？猫？",
        "虎？ライオン？",
        "ホテル？家？",
        "実家？一人暮らし？",
        "ティッシュ？ハンカチ？",
        "鉛筆？シャーペン？"
      ]
    };
  },
  methods: {}
};
</script>

<style lang="scss">
.content-life {
  width: 100%;
  height: 3000px;
  padding: 200px 200px 200px 200px;
  animation-name: fadeIn;
  animation-duration: 3s;
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
