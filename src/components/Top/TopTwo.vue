<template>
  <div class="top">
    <img class="doyu-logo" src="../../assets/images/logo.png" alt="" />
    <div class="goback" @click='goBack'>
      回到首页
    </div>
    <div class="downLoad" @click="downLoad">
      下载APP
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    goBack(){
      this.$router.push('/')
    },
    downLoad(){
      alert('暂未开放')
    }
  }
}
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
  .goback {
    width: 25%;
    height: 30px;
    line-height: 30px;
    border-radius: 20px;
    background-color: #ff7700;
    color: #fff;
    text-align: center;
    margin-left: 50px;
  }
  .downLoad {
      width: 25%;
    height: 30px;
    line-height: 30px;
    border: 1px solid #ff7700;
    border-radius: 20px;
    color: #ff7700;
    text-align: center;
    margin-right: 20px;
  }
}
</style>