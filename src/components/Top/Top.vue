<template>
  <div class="top">
    <img class="doyu-logo" src="../../assets/images/logo.png" alt="" />
    <div class="fenlei">
      <div class="top-icon"></div>
      <span>分类</span>
    </div>
    <div class="loginBlock" @click="toLogin">
      <img class="person-icon" src="../../assets/images/room-uer.png" alt="" />
      <span>{{ userName }}</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    };
  },
  methods: {
    toLogin() {
      this.$router.push("/login");
    },
  },
  computed: {
    userName() {
      return this.$store.state.userName
        ? this.$store.state.userName
        : sessionStorage.getItem("userName");
    },
  },
};
</script>
<style lang='scss' scoped>
.top {
  height: 48px;
  background-color: rgb(238, 238, 238);
  display: flex;
  justify-content: space-between;
  align-items: center;
  .doyu-logo {
    width: 104px;
    height: 36px;
  }
  .fenlei {
    display: flex;
    align-items: center;
    margin-left: 60px;
  }
  .top-icon {
    background: url("../../assets/images/icon-v2.png") no-repeat;
    width: 20px;
    height: 20px;
    background-position: (-20px, 0);
  }
  .loginBlock {
    display: flex;
    align-items: center;

    .person-icon {
      height: 20px;
      margin-right: 6px;
    }
    span {
      margin-right: 10px;
    }
  }
}
</style>