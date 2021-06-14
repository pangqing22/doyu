<template>
  <div class="live-top">
    <div class="des-left">
      <img :src='info.img1' alt="" /> {{info.name}}
    </div>
   <router-link :to="'/about?flag='+info.link+'&name='+info.name" >
     <div class="more">
        {{info.more}} <img :src="info.img2" alt="" />
     </div>
    </router-link>
  </div>
</template>
<script>
export default {
  props: {
    info: {},
  },
};
</script>
<style lang="scss" scoped>
.live-top {
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 20px;
    height: 16px;
    margin-left: 6px;
    margin-right: 6px;
    vertical-align: middle;
  }
  .des-left,.more {
    height: 48px;
    display: flex;
    align-items: center;
  }
}
</style>