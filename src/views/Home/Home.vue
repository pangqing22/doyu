<template>
  <div class="home">
    <top />
    <hot-show/>
    <live-steaming />
    <pretty-people />
    <play-game />
    <bottom-content />
  </div>
</template>

<script>
// @ is an alias to /src
import Top from '@/components/Top/Top.vue';
import HotShow from '../../components/HotShow/HotShow.vue';
import LiveSteaming from '../../components/LiveSteaming/LiveSteaming'
import PrettyPeople from '../../components/PrettyPeople/PrettyPeople'
import PlayGame from '../../components/PlayGame/PlayGame'
import BottomContent from '../../components/BottomContent/BottomContent'
export default {
  name: 'Home',
  components: {
    Top,
    HotShow,
    LiveSteaming,
    PrettyPeople,
    PlayGame,
    BottomContent
  }
}
</script>
