<template>
  <div id="app">
    <nav><!-- 导航 -->
      <div class="logo"><!-- 图标 -->
        <img src="./assets/logo_1.png" alt=""><!-- 图标图片 -->
        <span>疫情防控后台</span><!-- 图标名 -->
      </div>
      <router-link v-for="item in routerLink" :key="item.id" :to="item.to" active-class="navActive"><!-- 路由 -->
        <i class="iconfont">{{item.icon}}</i><!-- icon -->
        {{item.title}}
      </router-link>
      <a class="else_link"><!-- 下拉，人员管理 -->
        <i class="iconfont">&#xe62d;</i><!-- icon -->
        人员管理
        <i class="iconfont" :class="{'pullAcitve':pull}" @click="notPull()">&#xe6dc;</i><!-- icon -->
      </a>
      <div class="son_link" v-if="this.pull"><!-- 人员管理 路由 -->
        <router-link v-for="item in sonLink" :to="item.to" :key="item.id" active-class="navActive">
          <i class="iconfont">{{item.icon}}</i><!-- icon -->
          {{item.title}}
        </router-link>
      </div>
    </nav>
    <main>
      <div class="main_top"><!-- 管理员信息 -->
        <div class="nation"><!-- 国旗 -->
          <img src="./assets/ensign.png" alt="">
          <span>China</span>
        </div>
        <div class="hint iconfont"><!-- 提示，铃铛 -->
          <div>
            &#xe61c;
            <span>5</span>
          </div>
        </div>
        <div class="admin"><!-- 管理员信息 -->
          <div>
            <span>Chen</span>
            <span>Admin</span>
          </div>
          <img src="./assets/head-portrait.jpeg" alt=""><!-- 头像 -->
        </div>
      </div>
      <router-view class="main"/><!-- 路由展示 -->
    </main>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default class App extends Vue{
  public routerLink:Array<object> = [/* 路由 */
    {id:'001',to:'/home',title:'首页',icon:'\ue600'},
    {id:'002',to:'/apply',title:'来访申报',icon:'\ue7b3'}
  ]
  public sonLink:Array<object> = [/* 人员管理路由 */
    {id:'001',to:'/SL_1',title:'常态管理',icon:'\ue61d'},
    {id:'002',to:'/SL_2',title:'确诊管理',icon:'\ue69e'},
    {id:'003',to:'/SL_3',title:'疑似管理',icon:'\ue617'},
    {id:'004',to:'/SL_4',title:'隔离管理',icon:'\ue634'},
    {id:'005',to:'/SL_5',title:'潜在管理',icon:'\ue686'},
    {id:'006',to:'/SL_6',title:'送医管理',icon:'\ue83a'}
  ]
  public pull:boolean = false/* 下拉控制 */
  public notPull() {/* 取反 */
    this.pull = !this.pull
    this.$forceUpdate()/* 强制刷新 */
  }
}
</script>
<style lang="less">
*{
  margin: 0;
  padding: 0;
}
span{/* 图标名 */
  user-select:none;/* 禁止复制 */
}
a{ /* 取消默认样式，a */
  color: balck;
  text-decoration: none;
  &:visited{
    color: black;
  }
}
html,body{/* 设置默认宽高 */
  width: 100%;
  height: 100%;
}
#app{/* 父盒子 */
  width: 100%;
  height: 100%;
  display: flex;
  background: #F6F6F6;
}
nav{
  flex: 1.4;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: white;
  a{/* 路由 */
    width: 90%;
    height: 35px;
    margin: 0 auto;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    i{/* icon间距 */
      margin:0 10px 0 5px;
    }
  }
  .else_link{/* 其他路由 */
    margin-bottom: 0;
    position: relative;
    user-select: none;
    i:last-of-type{/* icon */
      color: #ccc;
      position: absolute;
      right: 0;
      cursor: pointer;
    }
    .pullAcitve{/* 下拉点击旋转 */
      transform: rotate(180deg);      
    }
  }
  .logo{
    height: 55px;
    display: flex;
    align-items: center;
    img{/* logo */
      width: 45px;
      height: 30px;
      margin-left: 10px;
    }
    span{
      margin-left: 10px;
      font-weight: 900;
      color: #4DC3B4;
    }
  }
  .son_link{/* 其他路由 */
    width: 100%;
    height: 150px;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    a{/* 路由 */
      width: 70%;
      margin: 5px 0 5px 20px;
      color: #7B7B7B;
    }
  }
}
.navActive{/* 路由激活样式 */
  background:linear-gradient(to right,#4DC3B4,#93FBEE);
  color: white !important;
}
main{/* 路由展示 */
  flex: 8.7;
  display: flex;
  flex-direction: column;
}
.main_top{/* 顶部管理员信息 */
  width: 96%;
  height: 50px;
  margin: 0 auto;
  margin-top: 20px;
  background: white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .nation{/* 国旗 */
    width: 65px;
    height: 50%;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 15px;
    img{/* 国旗图片 */
      width: 20px;
      height: 50%;
    }
  }
  .hint{/* 铃铛，提示 */
    height: 50%;
    display: flex;
    align-items: center;
    margin-right: 20px;
    div{
      font-size: 20px;
      position: relative;
      span{/* 提示 */
        width: 15px;
        height: 15px;
        border-radius: 15px;
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: blue;
        position: absolute;
        top: -4px;
        right: -5px;
        color: white;
        background: #4DC3B4;
      }
    }
  }
  .admin{/* 管理员 */
    width: 80px;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 15px;
    div{
      display: flex;
      flex-direction: column;
      span:last-of-type{
        color: #ccc;
        font-size: 12px;
      }
    }
    img{
      width: 32px;
      height: 100%;
      border-radius: 32px;
    }
  }
}
.main{/* 路由展示 */
  width: 96% !important;
  flex: 1;
  margin: 0 auto;
  margin-top: 20px;
}
</style>
