<template>
  <div>
    <table>
      <tr class="headLine"><!-- 表头 -->
        <td>姓名</td>
        <td>性别</td>
        <td>身份证</td>
        <td>手机号</td>
        <td>出发地</td>
        <td>目的地</td>
        <td>操作</td>
      </tr>
      <tr v-for="(item,i) in user" :key="item.id"><!-- 表格内容 -->
        <td>{{item.name}}</td>
        <td>{{item.gender}}</td>
        <td>{{item.idCard}}</td>
        <td>{{item.phoneNum}}</td>
        <td>{{item.starting}}</td>
        <td>{{item.destination}}</td>
        <td class="btn"><!-- 操作，按钮 -->
          <span @click="addNormalcyUsers(i)">准入</span><!-- 准入 -->
        </td>
      </tr>
    </table>
  </div>
</template>
<script lang="ts">
import { Vue,Component } from "vue-property-decorator";
@Component
export default class ApplyView extends Vue{
  public user:Array<object> = []/* 基础数据 */
  private mounted(){/* 数据初始化 */
    this.user = this.$store.state.users/* 拉取vuex数据 */
  }
}
</script>
<style lang="less" scoped>
.headLine{/* 表头 */
  font-weight: 900;
}
table{/* 表格 */
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
  tr:nth-child(even){/* 偶数背景 */
    background: #F9F9F9;
  }

}
.btn span{/* 按钮 */
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
}
</style>
