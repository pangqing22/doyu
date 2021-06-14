<template>
    <div>
        <div class="load-more" @click="LoadMore">加载更多...</div>
    </div>
</template>
<script>
import {bus} from '../../utils/bus'
export default {
    methods:{
        LoadMore(){
        
            bus.$emit('loadMore',true)
        }
    }
}
</script>
<style lang="scss" scoped>
.load-more{
    width: 90%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border: solid 1px #eee;
    margin: 10px auto;
}
</style>