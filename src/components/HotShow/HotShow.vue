<template>
  <van-swipe class="my-swipe" :autoplay="5000" indicator-color="white">
    <van-swipe-item v-for="banner in bannerList" :key="banner.id" :banner="banner">
      <router-link :to="`/room/id=` + banner.room_id">
        <img :src="banner.room_src" alt="" />
        <p class="banner_info">{{ banner.room_name }}</p>
      </router-link>
    </van-swipe-item>
  </van-swipe>
</template>
<script>
export default {
  data() {
    return {
      index: 40,
      rooms: [],
    };
  },
  methods: {
    getHotShow() {
         this.$http.get(`/api/live?limit=${this.index }`).then((res) => {
        
        console.log(res.data.data);
        this.rooms=res.data.data
      
      });
    },
  },
  mounted(){
    this.getHotShow()
  },
  computed:{
    bannerList(){
      return this.rooms.splice(34)
    }
  }
  
};
</script>
<style lang='scss' scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  height: 180px;
  text-align: left;
  background-color: #39a9ed;
}
  .van-swipe-item img {
    width: 100%;
    height: 100%;
  }

  .banner_info {
    width: 100%;
    font-size: 16px;
    padding: 5px;
    background: rgba(0, 0, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    color: #ffffff;
    // font-size: 1rem;
  }
</style>