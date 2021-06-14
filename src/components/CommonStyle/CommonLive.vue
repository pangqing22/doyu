<template>
  <div class="live-item" :room="room">
    <router-link :to="`/room/id=${room.room_id}`">
      <div class="item">
        <img :src="room.room_src" alt="" />
        <div class="live-people">
          <img src="../../assets/images/watch.png" alt="" />
          <span>{{ room.online | formatWatch }}</span>
        </div>
        <div class="live-nickname">
          <img src="../../assets/images/room-uer.png" alt="" /><span>{{
            room.nickname
          }}</span>
        </div>
      </div>
    </router-link>
    <div class="room_name">{{ room.room_name }}</div>
  </div>
</template>
<script>
import util from "../../utils/util";
export default {
  props: {
    room: {},
  },
  filters: {
    formatWatch(w) {
      return util.formatWatch(w);
    },
  },
};
</script>
<style lang="scss" scoped>
.live-item {
  width: 49%;
  display: inline-block;
}
.item {
  height: 126px;
  border-radius: 10px;
  margin: 2px;
  position: relative;
  img {
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    vertical-align: middle;
  }
  .live-people {
    position: absolute;

    top: 0;
    height: 20px;
    line-height: 20px;
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    color: #fff;
    background: rgba(0, 0, 0, 0.3);
    text-align: right;
    img {
      width: 20px;
    }
  }
  .live-nickname {
    position: absolute;
    top: 100px;
    height: 25px;
    line-height: 26px;
    font-size: 14px;
    width: 100%;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: #eee;
    text-align: left;
    img {
      width: 16px;
      margin-left: 10px;
    }
  }
}

.room_name {
  width: 183px;
  height: 28px;
  line-height: 28px;
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: left;
}
</style>