<template>
  <div>
    <top-two />
    <div v-if="isShowLogin">
      <h2>登录</h2>
      <form>
        <input
          v-model="info.userName"
          type="text"
          name=""
          id="text"
          class="common_style"
          placeholder="请输入您的账号"
        />
        <input
          v-model="info.psw"
          type="password"
          name=""
          id="password"
          class="common_style"
          placeholder="请输入您的密码"
        />
        <button class="login_now" @click="login">立即登录</button>
      </form>
      <div
        v-show="isShowPrompt"
        :class="[{ tip_tran: isShowPrompt }, 'prompt']"
      >
        {{ prompt_msg }}
      </div>
    </div>
    <!-- 登录之后的页面 -->
    <div v-else>
      <p class="logined">
        <span>{{ user }}</span> 您已登录
      </p>
      <button class="login_out" @click="outLogin">退出</button>
    </div>
  </div>
</template>
<script>
import TopTwo from "../../components/Top/TopTwo.vue";
import { mapMutations } from "vuex";
export default {
  components: { TopTwo },
  data() {
    return {
      info: {
        userName: "",
        psw: "",
      },
      isShowLogin: false,
      prompt_msg: "",
      isShowPrompt: false,
      user: "",
    };
  },
  methods: {
    ...mapMutations(
     ["getUserName",]
    ),
    getName(msg){
      this.getUserName(msg)
    },
    focus(msg) {
      this.prompt_msg = msg;
      if (this.isShowPrompt == false) {
        this.isShowPrompt = true;
        setTimeout(() => {
          this.isShowPrompt = false;
        }, 2000);
      }
    },
    login() {
      if (this.info.userName == "") {
        this.focus("请输入用户名");
        return false;
      }
      if (this.info.psw == "") {
        this.focus("请输入密码");
        return false;
      }
      sessionStorage.setItem("userName", this.info.userName);
      sessionStorage.setItem("psw", this.info.psw);
      this.focus("登录成功，即将跳转至首页");
      setTimeout(() => {
        this.$router.push("/");
      }, 1000);
    },
    outLogin() {
      sessionStorage.removeItem("userName");
      sessionStorage.removeItem("psw");
      window.location.reload();
    },
  },
  mounted() {
    let userName = sessionStorage.getItem("userName");
    if (userName) {
      this.isShowLogin = false;
      this.user = userName;
      this.$store.commit("getUserName", userName);
    } else {
      this.isShowLogin = true;
    } 
  },
};
</script>
<style lang="scss" scoped>
h2 {
  margin-top: 50px;
  font-size: 20px;
}
.common_style {
  display: block;
  border: none;
  border-bottom: solid 1px #ff7700;
  width: 90%;
  height: 40px;
  margin: 10px auto;
}
.login_now {
  margin: 30px auto;
  width: 60%;
  height: 50px;
  line-height: 50px;
  background-color: #333;
  color: #e8c828;
}
.prompt {
  width: 50%;
  height: 36px;
  line-height: 36px;
  background-color: #ff7700;
  color: #fff;
  margin-left: 50%;
  margin-top: 300px;
  border-radius: 10px;

  //   margin: 0 auto;
  //   position: absolute;
  //   bottom: 100px;
}
.tip_tran {
  -webkit-animation: tip_ani 0.6s;
  animation: tip_ani 0.6s;
  animation-fill-mode: forwards;
  -webkit-animation-fill-mode: forwards;
}

@keyframes tip_ani {
  from {
    opacity: 0;
    transform: translate(-50%, 0);
    -webkit-transform: translate(-50%, 0);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -3.5rem);
    -webkit-transform: translate(-50%, -3.5rem);
  }
}

@-webkit-keyframes tip_ani {
  from {
    opacity: 0;
    transform: translate(-50%, 0);
    -webkit-transform: translate(-50%, 0);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -3.5rem);
    -webkit-transform: translate(-50%, -3.5rem);
  }
}
.logined {
  margin: 20px auto;
  span {
    color: #ff7700;
  }
}
.login_out {
  margin: 30px auto;
  width: 60%;
  height: 50px;
  line-height: 50px;
  background-color: #333;
  color: #e8c828;
}
</style>