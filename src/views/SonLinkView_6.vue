<template>
  <div>
    <publicTb :handle='handle' :type='"doctor"'></publicTb>
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
export default class SonLinkView_6 extends Vue{
  public handle:Array<object> = [
    {id:'001',title:'移出',bgc:'#00A65A',rawType:'normalcyUsers'}
  ]
}
</script>

<style lang='less' scoped>

</style>