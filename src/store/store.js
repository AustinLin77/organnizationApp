import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    organizationKeys:[],
    selectCid:'',
    activityStatus:0,
    rootIndex:''
  },
  getters:{

  },
  mutations: {
     storeOrganizationKeys(state,data){
       state.organizationKeys=data
     },
     storeSelectCid(state,data){
       state.selectCid=data
     },
     storeSelectActivityStatus(state,data){
       state.activityStatus=data
     },
     storeSelectRootIndex(state,data){
       state.rootIndex=data
       console.log(state.rootIndex)
     }

  },
  actions:{

  }
})
