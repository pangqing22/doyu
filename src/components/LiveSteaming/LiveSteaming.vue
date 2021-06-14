<template>
  <div class="live-steaming">
    <common-title :info="info" />
    <div class="live-list">
      <common-live :room="room" v-for="room in rooms" :key="room.id" />
      
    </div>

    <!-- v-for="room in rooms" :key="room.id" -->
  </div>
</template>
<script>
import CommonTitle from "../CommonStyle/CommonTitle";
import CommonLive from "../CommonStyle/CommonLive";
import now from "../../assets/images/now.png";
import more from "../../assets/images/more.png";

export default {
  components: {
    CommonTitle,
    CommonLive,
  },
  data() {
    return {
      info: {
        img1: now,
        name: "正在直播",
        img2: more,
        more: "全部",
        link:'All'
      },
      limit: 0,
      rooms: [],
    
    };
  },
  methods: {
    getLiveContent() {
      this.$http.get(`/api/live?limit=${this.limit + 6}`).then((res) => {
        
        console.log(res.data.data);
        this.rooms=res.data.data
        console.log(this.rooms)
      });
    },
   
  },
  mounted() {
    this.getLiveContent();
  },
};
</script>
<style lang="scss" scoped>
.live-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>