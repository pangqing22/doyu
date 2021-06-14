<template>
  <div>
    <common-live v-for="room in rooms" :key="room.id" :room="room" />
    <load-more />
    <bottom-content />
  </div>
</template>
<script>
import CommonLive from "../CommonStyle/CommonLive.vue";
import LoadMore from "../Top/LoadMore";
import BottomContent from "../BottomContent/BottomContent.vue";
import { bus } from "../../utils/bus";
export default {
  components: {
    CommonLive,
    LoadMore,
    BottomContent,
  },
  data() {
    return {
      limit: 0,
      rooms: [],
    };
  },
  methods: {
    getDetails() {
      const that = this;
      that.limit = that.limit + 10;
      this.$http
        .get(`/api/live/${this.$route.query.flag}?limit=${that.limit}`)
        .then((res) => {
          this.rooms = res.data.data;
        });
    },
    getDetailsAll() {
      const that = this;
      that.limit = that.limit + 10;
      this.$http.get(`/api/live?limit=${that.limit}`).then((res) => {
        this.rooms = res.data.data;
      });
    },
    getData() {
      if (this.$route.query.flag == "All") {
        this.getDetailsAll();
      }
      this.getDetails();
    },
  },
  mounted() {
    this.getData();
    bus.$on("loadMore", (msg) => {
      this.getData();
    });
  },
};
</script>