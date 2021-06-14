<template>
  <div >
    <common-title :info="info" />
    <div class="playGames">
      <common-live v-for="room in rooms" :key="room.id" :room="room" />
    </div>
  </div>
</template>
<script>
import bus from '../../utils/bus'
import CommonTitle from "../CommonStyle/CommonTitle";
import CommonLive from "../CommonStyle/CommonLive";
import hotGame from "../../assets/images/hot_game.png";
import more from "../../assets/images/more.png";
export default {
  components: {
    CommonTitle,
    CommonLive,
  },
  data() {
    return {
      info: {
        img1: hotGame,
        name: "王者荣耀",
        img2: more,
        more: "更多",
        link:'wzry'
      },
      limit: 6,
      rooms: [],
    };
  },
  methods: {
    getGames() {
      this.$http.get(`/api/live/wzry?limit=${this.limit}`).then((res) => {
        this.rooms = res.data.data;
      });
    },
  },
  mounted() {
    this.getGames();
  },
 
};
</script>
<style lang="scss" scoped>
.playGames {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>