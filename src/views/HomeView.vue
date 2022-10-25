<template>
  <div id="box">
    <div class="top"><!-- 疫情每日总览 -->
      <p>疫情每日总览</p>
      <div class="content_box">
        <div class="content" v-for="item in dataList" :key="item.id">
          <div class="c_img" :style="{background:item.color}">
            <img :src="item.url" alt=""><!-- 图片 -->
          </div>
          <div class="c_content"><!-- 内容 -->
            <div>{{item.title}}</div>
            <div>
              <span class="c_num" :style="{color:item.color}">{{item.num}}</span>
              <span>较昨日+<span :style="{color:item.color}">{{item.contrast}}</span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="middle"><!-- 今日新增统计，图表 -->
      <div class="md_left"><!-- 今日新增统计图 -->
        <p>今日新增统计</p>
        <div id="l_chart"></div>
      </div>
      <div class="md_right"><!-- 累计疫情统计图 -->
        <div class="r_content">
          <p>累计疫情统计</p>
          <ul>
            <li v-for="item in dataList" :key="item.id"><b :style="{background:item.color}"></b>{{item.abbr}}</li>
          </ul>
        </div>
        <div id="r_chart"></div>
      </div>
    </div>
    <div class="bottom">
      <div class="b_left">
        <p>需求物资</p>
        <div class="progressBar_box" v-for="item in medicinalList" :key="item.id">
          <div class="progressBar">
            <span>{{item.title}}</span>
            <div class="progress"><el-progress :text-inside="true" :stroke-width="16" :percentage="parseInt(item.num/item.allNum*100)" color='#2F2CA2'></el-progress></div>
          </div>
          <div class="price">
            <span>{{item.num*item.price}}</span>
            <span>元</span>
          </div>
        </div>
      </div>
      <div class="b_right">
        <p>
          <span>感染人员分布</span>
          <span>查看更多</span>
        </p>
        <div class="b_r_content_box">
          <div class="b_r_content" v-for="item in definiteList" :key="item.id">
            <div class="b_r_name">
              <span>{{item.name}}</span>
              <span>已确诊</span>
            </div>
            <div class="b_r_details">
              <div>
                <span>地址：{{item.location}}</span>
                <span>手机号：{{item.phoneNum}}</span>
              </div>
              <div>
                <span>处置：{{item.dispose}}</span>
                <span>身份证：{{item.idCard}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { EChartsOption, init } from 'echarts';
@Component
export default class Home extends Vue {
  public dataList:Array<object> = [
    {id:'001',title:'新增确诊',abbr:'确诊',num:788,contrast:29,url:require('../assets/home_01.png'),color:'#EB4D00'},
    {id:'002',title:'新增疑似',abbr:'疑似',num:1235,contrast:29,url:require('../assets/home_02.png'),color:'#F9BF2F'},
    {id:'003',title:'新增隔离',abbr:'隔离',num:788,contrast:29,url:require('../assets/home_03.png'),color:'#F79C2A'},
    {id:'004',title:'新增潜在',abbr:'潜在',num:788,contrast:29,url:require('../assets/home_04.png'),color:'#ABABAB'},
    {id:'005',title:'新增送医',abbr:'送医',num:788,contrast:29,url:require('../assets/home_05.png'),color:'#C0450F'}
  ]
  public medicinalList:Array<object> = [
    {id:'001',title:'医用一次性口罩',num:12808,allNum:22330,price:0.5},
    {id:'002',title:'N95口罩',num:898,allNum:1500,price:2},
    {id:'003',title:'防护服',num:2089,allNum:3465,price:20},
    {id:'004',title:'一次性手套',num:88032,allNum:100000,price:1},
    {id:'005',title:'消毒液',num:3808,allNum:4235,price:5},
  ]
  public definiteList:Array<object> = [
    {id:'001',name:'李某某',location:'开发区xxxx小区18幢103室',phoneNum:'13977776665',dispose:'已送往第三人民医院隔离',idCard:'321242454564578777'},
    {id:'002',name:'李某某',location:'开发区xxxx小区18幢103室',phoneNum:'13977776665',dispose:'已送往第三人民医院隔离',idCard:'321242454564578777'},
    {id:'003',name:'李某某',location:'开发区xxxx小区18幢103室',phoneNum:'13977776665',dispose:'已送往第三人民医院隔离',idCard:'321242454564578777'}
  ]
private chart_left() {
  const chartEle: HTMLElement = document.getElementById('l_chart') as HTMLElement;
    const chart = init(chartEle);
    const option: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['确诊', '疑似', '隔离', '潜在', '送医']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [788, 1235, 788, 788, 788],
        type: 'bar',
        barWidth:'10%',
        color:'#4F82F4',
      }
    ],
    grid: {
      top:'12%',
      left: '2%',
      right: '2%',
      bottom: '3%',
      containLabel: true
    },
  }
  option && chart.setOption(option);
}
private chart_right(){
  const chartEle: HTMLElement = document.getElementById('r_chart') as HTMLElement;
    const chart = init(chartEle);
    const option: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['周一', '周二', '周三', '周四', '周五','周六','周日']
    },
    yAxis: {},
    series: [
      {
        data: [788, 846, 954, 1243, 788, 547, 200],
        type: 'line',
        color:'#EB4D00'
      },
      {
        data: [214, 788, 624, 341, 888, 100, 60],
        type: 'line',
        color:'#F9BF2F'
      },
      {
        data: [1243, 324, 211, 745, 324, 222, 10],
        type: 'line',
        color:'#F79C2A'
      },
      {
        data: [100, 200, 300, 400, 500, 600, 700],
        type: 'line',
        color:'#ABABAB'
      },
      {
        data: [154, 1235, 788, 788, 788],
        type: 'line',
        color:'#C0450F'
      }
    ],
    grid: {
      top:'12%',
      left: '2%',
      right: '2%',
      bottom: '3%',
      containLabel: true
    },
  }
  option && chart.setOption(option);
}
private mounted(){
  this.chart_left()
  this.chart_right()
}
}

</script>

<style scoped lang="less">
#box{
  width: 100%;
  background: #F6F6F6;
  display: flex;
  flex-direction: column;
}
.top{
  flex: 1.3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p{
    font-weight: 900;
  }
}
.content_box{
  display: flex;
  gap: 35px;
}
.content{
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 5px;
}
.c_img{
  width: 16%;
  height: 70%;
  border-radius: 70%;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    width: 60%;
    height: 60%;
  }
}
.c_content{
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .c_num{
    font-size: 20px;
    font-weight: 900;
    margin-right: 10px;
  }
}
.middle{
  flex: 4;
  margin-top: 20px;
  display: flex;
  .md_left{
    flex: 1;
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 5px;
    p{
      margin: 10px 0 0 10px;
      display: flex;
      align-items: flex-end;
      font-weight: 900;
    }
    div{
      flex: 1;
    }
  }
  .md_right{
    flex: 2;
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    background: white;
    border-radius: 5px;
    .r_content{
      margin: 10px 0 0 10px;
      display: flex;
      align-items: flex-end;
      font-weight: 900;
      ul{
        display: flex;
        margin-left: 50px;
        li{
          margin-right: 30px;
          font-weight: normal;
          b{
            width: 10px;
            height: 10px;
            border-radius: 10px;
            display: inline-block;
            margin-right: 15px;
          }
          list-style-type: none;
        }
      }
    }
    #r_chart{
      flex: 1;
    }
  }
}
.bottom{
  flex: 4;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  .b_left{
    flex: 1;
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 5px;
    p{
      height: 50px;
      text-indent: 1em;
      display: flex;
      align-items: center;
      font-weight: 900;
    }
    .progressBar_box{
      flex: 1;
      display: flex;
      justify-content: space-between;
      .progressBar{
        width: 85%;
        margin-left: 15px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
      }
      .price{
        // border: 1px solid red;
        margin-right: 15px;
        display: flex;
        align-items: flex-end;
        span:nth-of-type(1){
          font-size: 20px;
          font-weight: 900;
        }
      }
    }
  }
  .b_right{
    flex: 1;
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    background: white;
    p{
      width: 93%;
      margin: 0 auto;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-weight: 900;
      span:last-of-type{
        font-weight: normal;
        font-size: 12px;
      }
    }
    .b_r_content_box{
      flex: 1;
      width: 90%;
      margin: 0 auto;
      // border: 1px solid red;
      display: flex;
      flex-direction: column;
      gap: 5px;
      .b_r_content{
        width: 100%;
        flex: 1;
        // border: 1px solid blue;
        display: flex;
        flex-direction: column;
        background: #F5F5F5;
        border-radius: 5px;
        .b_r_name{
          width: 95%;
          flex: 4;
          margin: 0 auto;
          font-size: 14px;
          // border: 1px solid black;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 2px solid #E9E9E9;
          span:last-of-type{
            color: red;
          }
        }
        .b_r_details{
          width: 95%;
          flex: 7;
          margin: 0 auto;
          margin-top: 3px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          div{
            display: flex;
            justify-content: space-between;
            span{
              flex: 2;
              font-size: 13px;
              // border: 1px solid red;
            }
            span:nth-of-type(odd){
              flex: 3;
            }
          }
        }
      }
    }
  }
}
</style>

