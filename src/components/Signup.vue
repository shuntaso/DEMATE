<template>
  <div id="signup">
    <div class="overlay">
      <div class="panel">
        <div class="input-group">
          <h1>Sign up please!</h1>
          <div class="field-container">
            <input type="text" placeholder="username" v-model="username" />
          </div>
          <div class="field-container">
            <input :type="maskType" placeholder="password" v-model="password" />
            <span><p @click="mask"></p></span>
          </div>
          <p class="error" v-if="error">&#x26a0; Invalid format...</p>
          <button @click="signUp">Register</button>
          <p>
            <router-link to="/signin">Sign in!</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Signup",
  data() {
    return {
      username: "",
      password: "",
      isChecked: false,
      error: null
    };
  },
  computed: {
    maskType: function() {
      // 第一引数は任意の文字列
      return this.isChecked ? "text" : "password";
    }
  },
  methods: {
    mask: function() {
      this.isChecked = !this.isChecked;
    },
    signUp: function() {
      console.log("おしました");
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.username, this.password)
        .then(user => {
          alert("create account!!", user.email);
          this.$router.push("/");
        })
        .catch(err => {
          alert(err.message);
          this.error = err;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  transition: all 0.5s ease;
  z-index: 20;
  background-color: rgba(240, 240, 241, 1);
}
.panel {
  //   ここでModalコンポーネントの大きさを制御
  width: 400px;
  height: 450px;
  //   モーダルのパディング
  position: relative;
  padding: 60px 0px 20px 48px;
  left: 50%;
  top: 30%;
  margin-left: -200px;
  margin-top: -100px;
  border-radius: 30px;
  background-color: #fff;
  font-size: 18px;
  z-index: 4;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
  text-align: center;
}
// ログインフォーム
.field-container {
  padding: 5px;
}
.input-group {
  position: relative;
  left: -30px;
}
input:hover {
  width: 250px;
}
h1 {
  position: relative;
  font-size: 42px;
  font-weight: 100;
  padding: 20px;
  margin-bottom: 10px;
}
input {
  // コンテナのサイズ
  display: block;
  width: 200px;
  height: 50px;
  outline: 0;
  margin: 0 auto 20px auto;
  border: 1px solid fade(white, 40%);
  font-size: 18px;
  font-weight: 300;
  border-radius: 5px;
  left: 200px;
  margin: 0 auto;
  text-align: center;
}
button {
  width: 100px;
  height: 30px;
  outline: 0;
  margin: 10px;
  border-radius: 3px;
  color: #50a3a2;
  background-color: white;
  font-size: 18px;
  font-weight: 300;
  cursor: pointer;
}
button:active {
  background-color: rgba(240, 240, 241, 1);
}
.signup {
  font-size: 15px;
}
.error {
  color: red;
  font-weight: 500;
}
</style>
