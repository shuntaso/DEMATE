<template>
  <div id="modal">
    <transition>
      <div class="overlay" @click="$emit('close')">
        <div class="panel" @click.stop>
          <perfect-scrollbar>
            <h3>
              <div class="left-modal">
                jQueryで要素を操作できるようになると、ある程度は「ゴリゴリ書けばなんとかなりそう」っていう考えを持つことができるようになります。
                誰かが作ったライブラリしか使えないと、それが機能しなかった瞬間に終わりますが、、なんとなく中身が読めたりすると、ちょっと修正した
                だけで解決できたりします。
                そのためには、jQueryの書き方を覚えたり、JavaScriptの作法や、プログラミングの基本的な知識を持っていないといけません。。この
                辺りの基本的な部分はドットインストールで学べるので、時間を作ってぜひ何周かしてみてください！
              </div>
              <div class="right-modal">
                jQueryで要素を操作できるようになると、ある程度は「ゴリゴリ書けばなんとかなりそう」っていう考えを持つことができるようになります。
                誰かが作ったライブラリしか使えないと、それが機能しなかった瞬間に終わりますが、、なんとなく中身が読めたりすると、ちょっと修正した
                だけで解決できたりします。
                そのためには、jQueryの書き方を覚えたり、JavaScriptの作法や、プログラミングの基本的な知識を持っていないといけません。。この
                辺りの基本的な部分はドットインストールで学べるので、時間を作ってぜひ何周かしてみてください！
              </div>
            </h3>
          </perfect-scrollbar>
        </div>
        <span class="scissor"> <i class="fas fa-cut fa-rotate-90"></i></span>
        <b-button size="is-small" class="close" @click="$emit('close')">
          close
        </b-button>
      </div>
    </transition>
  </div>
</template>

<script>
import { PerfectScrollbar } from "vue2-perfect-scrollbar";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

export default {
  components: { PerfectScrollbar },
  mounted() {
    const modal = document.querySelector("#modal");
    disableBodyScroll(modal);
  },

  beforeDestory() {
    clearAllBodyScrollLocks();
  }
};
</script>

<style src="vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css"></style>
<style lang="scss">
.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease;
  z-index: 2;
}

.panel {
  //   ここでModalコンポーネントの大きさを制御
  width: 800px;
  height: 400px;
  //   モーダルのパディング
  position: relative;
  padding: 60px 0px 20px 48px;
  left: 50%;
  top: 40%;
  margin-left: -400px;
  margin-top: -100px;
  border-radius: 30px;
  background-color: #fff;
  font-size: 18px;
  z-index: 4;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
}
.ps {
  overflow: hidden;
  //   ここから
  width: 100%;
  height: 100%;
  z-index: 2;
}

h3 {
  width: 600px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
// 閉じるボタンの位置
.close {
  position: relative;
  left: 1000px;
  top: -110px;
  z-index: 5;
}
.scissor {
  position: relative;
  left: 706px;
  top: -120px;
  font-size: 32px;
  z-index: 5;
}

.left-modal {
  width: 59%;
  padding-right: 40px;
  //   モーダル内の点線
  border-right: 2px dotted;
}
.right-modal {
  width: 52%;
  margin-left: 400px;
  margin-top: -510px;
}
</style>
