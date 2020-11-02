const state = {
  showHeader: false,
  showFooter: false,
  headerText: '',
  footerText: 'Built with ❤️ using Vue.js',
};
const getters = {
  showHeader: (state) =>  state.showHeader,
  showFooter: (state) =>  state.showFooter,
  headerText: (state) =>  state.headerText,
  footerText: (state) =>  state.footerText,
};
const actions = {
  toogleHeaderAndFooter({ commit }) {
      commit('toogleHeaderAndFooter');
  },
  setHeaderText({ commit },newValue) {
      commit('setHeaderText',newValue);
  },
  setFooterText({ commit },newValue) {
      commit('setFooterText',newValue);
  },
 
};
const mutations = {
 
  toogleHeaderAndFooter(state) { 
    state.showFooter = !state.showFooter
    state.showHeader = !state.showHeader
  },
  setHeaderText(state, value) { 
    state.headerText = value
  },
  setFooterText(state, value) { 
    state.setFooterText = value
  },
  
};

export default {
  state,
  getters,
  actions,
  mutations
};