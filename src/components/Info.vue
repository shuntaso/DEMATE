// perfect scroll barは消した
<template>
  <div>
    <div id="info">
      <!--情報を入れておくスペース -->
      <h1>
        <div class="left">a</div>
        <div class="right">b</div>
      </h1>

      <!-- モーダルコンポーネント類 -->
      <b-button size="is-small" @click="showModal = true" class="more">
        more !
      </b-button>
      <div class="modal-container">
        <modal v-if="showModal" @close="showModal = false"></modal>
      </div>
    </div>
  </div>
</template>
<script>
import Modal from "@/components/Modal.vue";
// import { PerfectScrollbar } from "vue2-perfect-scrollbar";

export default {
  components: { Modal },
  data() {
    return {
      showModal: false
    };
  }
};
</script>

<style lang="scss">
//インフォメーションコンテナの大きさを制御する
#info {
  width: 100%;
  height: 150px;
  margin-bottom: 100px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-right: solid 1px;
  border-bottom: solid 1px;
  border-left: solid 1px;
  padding-bottom: 40px;
}
.left {
  width: 45%;
  height: 150px;
  border-right: 2px dotted;
  padding: 20px;
}
.right {
  width: 45%;
  height: 150px;
  margin-left: 470px;
  margin-top: -150px;
  padding: 20px;
}
.more {
  left: 960px;
  top: -40px;
}
</style>
