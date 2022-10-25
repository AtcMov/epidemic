<template>
  <div>
    <publicTb :handle='handle' :type='"quarantine"'></publicTb>
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
export default class SonLinkView_4 extends Vue{
  public handle:Array<object> = [
    {id:'001',title:'移出',bgc:'#00A65A',rawType:'normalcyUsers'},
    {id:'002',title:'确诊',bgc:'#EB4D00',rawType:'infection'}
  ]
}
</script>

<style lang='less' scoped>

</style>