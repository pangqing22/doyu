<template>
  <div>
    <top-two />
    <room-item />
  </div>
</template>
<script>
import RoomItem from "../../components/RoomItem/RoomItem";
import TopTwo from "../../components/Top/TopTwo";

export default {
  components: {
    RoomItem,
    TopTwo,
  },
};
</script>