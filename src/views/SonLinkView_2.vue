<template>
  <div>
    <publicTb :handle='handle' :type='"infection"'></publicTb>
  </div>
</template>

<script lang="ts">
import { Component, Vue} from 'vue-property-decorator'
import publicTb from '../components/publicTb.vue'
@Component({
  components:{
    publicTb
  }
})
export default class SonLinkView_2 extends Vue{
  public handle:Array<object> = [
    {id:'001',title:'移出',bgc:'#00A65A',rawType:'normalcyUsers'},
    {id:'002',title:'隔离',bgc:'#F79C2A',rawType:'quarantine'},
    {id:'003',title:'送医',bgc:'#C0450F',rawType:'doctor'}
  ]
}
</script>

<style lang='less' scoped>

</style>