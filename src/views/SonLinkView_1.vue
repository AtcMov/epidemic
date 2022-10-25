<template>
  <div>
    <publicTb :handle='handle' :type='"normalcyUsers"'></publicTb>
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
export default class SonLinkView_1 extends Vue{
  public handle:Array<object> = [
    {id:'001',title:'确诊',bgc:'#EB4D00',rawType:'infection'},
    {id:'002',title:'疑似',bgc:'#F9BF2F',rawType:'suspected'},
    {id:'003',title:'隔离',bgc:'#F79C2A',rawType:'quarantine'},
    {id:'004',title:'潜在',bgc:'#ABABAB',rawType:'potential'},
    {id:'005',title:'送医',bgc:'#C0450F',rawType:'doctor'}
  ]
}
</script>

<style scoped lang="less">

</style>