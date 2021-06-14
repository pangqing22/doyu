<template>
  <div>
    <top-two/>
    <div>
      <p class="classify_name">{{ name }}</p>
      <details-item />
    </div>
    
  </div>
</template>
<script>

import TopTwo from "../../components/Top/TopTwo";
import DetailsItem from "../../components/Details/DetailsItem";

export default {
  components: {
    TopTwo,
    DetailsItem,
   
  },
  data() {
    return {
      name: "",
    };
  },
  created() {
    this.name = this.$route.query.name;
  },
 
};
</script>
<style lang="scss" scoped>
.classify_name {
  height: 40px;
  line-height: 40px;
  margin-left: 20px;
  font-size: 20px;
  text-align: left;
  
}
</style>