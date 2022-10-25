import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

interface objType{/* 管理人员接口 */
  id:string
  name:string
  gender:string
  idCard:string
  phoneNum:string
  starting:string
  destination:string
}
interface stateType {/* 管理接口 */
  [key: string]:Array<objType>/* 设置索引 */
  users:Array<objType>
  normalcyUsers:Array<objType>
  infection:Array<objType>
  suspected:Array<objType>
  quarantine:Array<objType>
  potential:Array<objType>
  doctor:Array<objType>
}
const state:stateType = {/* 基础数据 */
  users:[/* 来访 */
    {id:'001',name:'小一',gender:'男',idCard:'440123456789101112',phoneNum:'13123456789',starting:'广州',destination:'深圳'},
    {id:'002',name:'小二',gender:'女',idCard:'440123456789101112',phoneNum:'13123456789',starting:'上海',destination:'深圳'},
    {id:'003',name:'小三',gender:'男',idCard:'440123456789101112',phoneNum:'13123456789',starting:'北京',destination:'深圳'},
    {id:'004',name:'小四',gender:'女',idCard:'440123456789101112',phoneNum:'13123456789',starting:'西藏',destination:'深圳'},
    {id:'005',name:'小五',gender:'男',idCard:'440123456789101112',phoneNum:'13123456789',starting:'长沙',destination:'深圳'}
  ],
  normalcyUsers:[/* 常态 */
    {id:'001',name:'张三',gender:'男',idCard:'440123456789101112',phoneNum:'13123456789',starting:'广州',destination:'深圳'},
    {id:'002',name:'李四',gender:'女',idCard:'440123456789101112',phoneNum:'13123456789',starting:'上海',destination:'深圳'},
    {id:'003',name:'王五',gender:'男',idCard:'440123456789101112',phoneNum:'13123456789',starting:'北京',destination:'深圳'},
    {id:'004',name:'赵六',gender:'女',idCard:'440123456789101112',phoneNum:'13123456789',starting:'西藏',destination:'深圳'},
    {id:'005',name:'孙七',gender:'男',idCard:'440123456789101112',phoneNum:'13123456789',starting:'长沙',destination:'深圳'}
  ],
  infection:[/* 确诊 */
    {id:'001',name:'六六',gender:'女',idCard:'440123456789101112',phoneNum:'13123456789',starting:'贵州',destination:'深圳'},
    {id:'002',name:'七七',gender:'女',idCard:'440123456789101112',phoneNum:'13123456789',starting:'惠州',destination:'深圳'},
    {id:'003',name:'八八',gender:'男',idCard:'440123456789101112',phoneNum:'13123456789',starting:'广州',destination:'深圳'}
  ],
  suspected:[/* 疑似 */
    {id:'001',name:'小明',gender:'男',idCard:'440123456789101112',phoneNum:'13123456789',starting:'新疆',destination:'深圳'},
    {id:'002',name:'小红',gender:'女',idCard:'440123456789101112',phoneNum:'13123456789',starting:'西藏',destination:'深圳'},
  ],
  quarantine:[/* 隔离 */
    {id:'001',name:'小白',gender:'女',idCard:'440123456789101112',phoneNum:'13123456789',starting:'南京',destination:'深圳'},
    {id:'002',name:'小黑',gender:'男',idCard:'440123456789101112',phoneNum:'13123456789',starting:'重庆',destination:'深圳'}
  ],
  potential:[/* 潜在 */
    {id:'001',name:'小黄',gender:'男',idCard:'440123456789101112',phoneNum:'13123456789',starting:'黑龙江',destination:'深圳'},
    {id:'002',name:'小绿',gender:'男',idCard:'440123456789101112',phoneNum:'13123456789',starting:'哈尔滨',destination:'深圳'}
  ],
  doctor:[/* 就医 */
    {id:'001',name:'小紫',gender:'男',idCard:'440123456789101112',phoneNum:'13123456789',starting:'贵州',destination:'深圳'},
    {id:'002',name:'小彩',gender:'女',idCard:'440123456789101112',phoneNum:'13123456789',starting:'西安',destination:'深圳'}
  ]
}
const getters = {}
const mutations = {
  alterNormalcyUsers(state:stateType,val:number){/* 将数据添加到常态 */
    let user = state.users[val]/* 获取要添加的数据 */
    let getLength:number = state.normalcyUsers.length+1/* 获取被添加表的长度 */
    let updateId:string = '00'+getLength/* 修改要添加数据的id */
    user.id = updateId/* 修改id */
    state.normalcyUsers.push(user)/* 将要添加的数据添加到被添加的表上 */
    state.users.splice(val,1)/* 在原来的表上删除添加的数据 */
  },
  alter(state:stateType,val:{i:number,type:string,rawType:string}){/* 添加数据 */
    let {i,type,rawType} = val/* 解构 */
    let user = state[type][i]/* 获取要添加的数据 */
    let getLength:number = state[rawType].length+1/* 获取被添加表的长度 */
    let updateId:string = '00'+getLength/* 修改要添加数据的id */
    user.id = updateId/* 修改id */
    state[rawType].push(user)/* 将要添加的数据添加到被添加的表上 */
    state[type].splice(i,1)/* 在原来的表上删除添加的数据 */
    for(let j = 0;j<state[type].length;j++){/* 重置原来表的所有数据id */
      state[type][j].id = '00'+j
    }
  }
},
actions = {}
export default new Vuex.Store({
  state,getters,mutations,actions
});
