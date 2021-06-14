<template>
  <div>
    <common-title :info="info" />
    <div class="live-list">
      <common-live :room="room" v-for="room in rooms" :key="room.id" />
    </div>
  </div>
</template>
<script>
import CommonTitle from "../CommonStyle/CommonTitle";
import CommonLive from "../CommonStyle/CommonLive";
import yz from "../../assets/images/yz.png";
import more from "../../assets/images/more.png";
export default {
  components: {
    CommonTitle,
    CommonLive,
  },
  data() {
    return {
      info: {
        img1: yz,
        name: "颜值",
        img2: more,
        more: "更多",
        link:'yz'
      },
      limit: 0,
      rooms: [],
    };
  },
  methods: {
    getPrettyIndex() {
      this.$http.get(`/api/live/yz?limit=${this.limit+6}`).then((res)=>{
        this.rooms=res.data.data
      },error=>{
        console.log(error)
      });
    },
  },
  mounted(){
    this.getPrettyIndex()
  }
};
</script>
<style lang="scss" scoped>
.live-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>