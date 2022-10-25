import store from "./store";
export const mixin = {
  methods:{
    addNormalcyUsers(i:number){/* 将数据添加到常态 */
      store.commit('alterNormalcyUsers',i)
    },
    add(i:number,type:string,rawType:string){/* 添加人员 */
      let data = {i,type,rawType}
      store.commit('alter',data)
    }
  }
}