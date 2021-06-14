<template>
  <div :liveInfo="liveInfo">
    <div class="info">
      <img :src="liveInfo.avatar" alt="" />
      <div class="info-content">
        <p class="owner_name">主播：{{ liveInfo.owner_name }}</p>
        <p class="owner_weight">关注：{{ liveInfo.owner_weight }}</p>
      </div>
    </div>
    <p class="start_time">最近开播时间：{{ liveInfo.start_time }}</p>

    <div>
      <img :src="liveInfo.room_thumb" alt="" class="live-item" />
    </div>
    <div class="zone">
      <div class="zone-item">
        <img src="../../assets/room-images/hd-send.png" alt="" />{{
          liveInfo.online | formatWatch
        }}
      </div>
      <div class="zone-item zone-border">
        <img src="../../assets/room-images/hd-focus.png" alt="" />关注
      </div>
      <div class="zone-item zone-border">
        <img src="../../assets/room-images/hd-share.png" alt="" />分享
      </div>
    </div>
    <div>
      <img src="../../assets/room-images/develop.jpg" alt="" class="develop">未开发
    </div>
  </div>
</template>
<script>
import util from "../../utils/util";
export default {
  data() {
    return {
      liveInfo: {},
    };
  },
  methods: {
    getId() {
      let ids = this.$route.params.id;
      let id = ids.split("=");
      return id[1];
    },
    getLiveSteam() {
      this.$http.get(`/api/room/${this.getId()}`).then((res) => {
        console.log(res.data.data);
        this.liveInfo = res.data.data;
      }),
        (error) => {
          console.log(error);
        };
    },
  },
  filters: {
    formatWatch(e) {
      return util.formatWatch(e);
    },
  },
  mounted() {
    this.getLiveSteam();
    console.log(this.getId());
  },
};
</script>
<style lang="scss" scoped>
.info {
  height: 60px;
  // float: left;
  text-align: left;
  display: flex;
  align-items: center;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: 10px;
    margin-right: 10px;
  }
  .info-content {
    display: inline-block;
  }
}
.start_time {
  text-align: left;
  margin-left: 10px;
  font-size: 14px;
}
.live-item {
  position: relative;
  width: 96%;
  margin-top: 10px;
}
.zone {
  display: flex;
  justify-content: space-between;
  margin: 20px 10px 10px 10px;
  border: solid 1px #eee;
  height: 40px;
  align-items: center;
  .zone-item {
    width: 32%;
    text-align: center;
    img {
      width: 25px;
      height: 20px;
      margin-right: 20px;
    }
  }
  .zone-border {
    border-right: solid 1px #eee;
  }
}
.develop {
  width: 60%;
  display: block;
  margin: 10px auto;
}
</style>
