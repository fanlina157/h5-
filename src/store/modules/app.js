const state = {
  userName: ''
};
const mutations = {
  SET_USER_NAME (state, name) {
    state.userName = name;
  }
};
const actions = {
  // 设置name
  setUserName (context, name) {
    context.commit('SET_USER_NAME', name);
  }
};
const getters = {
  userName: state => state.app.userName
  // count: (state) => {
  //   return state.list.filter(item => item.done === false).length;
  // }
};
export default {
  state,
  mutations,
  actions,
  getters
};
