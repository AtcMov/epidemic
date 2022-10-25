<template>
  <div>
    <table>
      <tr class="headLine">
        <td>姓名</td>
        <td>性别</td>
        <td>身份证</td>
        <td>手机号</td>
        <td>出发地</td>
        <td>目的地</td>
        <td class="btn_headLine">操作</td>
      </tr>
      <tr v-for="(item,i) in user" :key="item.id">
        <td>{{item.name}}</td>
        <td>{{item.gender}}</td>
        <td>{{item.idCard}}</td>
        <td>{{item.phoneNum}}</td>
        <td>{{item.starting}}</td>
        <td>{{item.destination}}</td>
        <td class="btn">
          <span 
          v-for="item in handle" 
          :key='item.id' 
          :style="{background:item.bgc}"
          @click="add(i,type,item.rawType)"
          >{{item.title}}</span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class table extends Vue {
  @Prop() handle?:Array<object>
  @Prop() type?:string
  public user:Array<object> = []
  private mounted(){
    this.user = this.$store.state[this.type as string]
  }
}

</script>

<style scoped lang="less">
.headLine{
  font-weight: 900;
}
table{
  width: 100%;
  border-top: 1px solid #D4D4D4;
  border-left: 1px solid #D4D4D4;
  border-spacing: 0;/*去掉单元格间隙*/
  td{
    height: 40px;
    text-indent: 1em;
    border-bottom: 1px solid #D4D4D4;
    border-right: 1px solid #D4D4D4;
  }
  tr:nth-child(even){
    background: #F9F9F9;
  }

}
.btn_headLine{
  text-align: center;
}
.btn{
  width: 320px;
}
.btn span{
  width: 50px;
  height: 25px;
  cursor: pointer;
  background: #00A65A;
  border-radius: 2px;
  color: white;
  display: inline-block;
  text-indent: 0;
  text-align: center;
  line-height: 25px;
  margin-right: 10px;
}
</style>
