import axios from 'axios';

const state = {
  loadingGitRepositories: false,
  loadingGitIssues: false,
  loadingSO: false,

  portfolioItems:[],
  
  
};
const getters = {
  loadingGitRepositories: (state) => state.loadingGitRepositories,
  loadingGitIssues:  (state) => state.loadingGitIssues,
  loadingSO: (state) => state.loadingSOposts,
  loadingPortfolio: (state) => state.loadingGitRepositories &&  state.loadingGitIssues && state.loadingSOposts,
  
  portfolioItems: (state) => state.portfolioItems,
  portfolioItemsSize: (state) => state.portfolioItems.length,
};
const actions = {
  async fetchGitRepositories({ commit }) {
    try {
      commit('loadingGitRepositories', true);
      const { data } = await axios.get(process.env.VUE_APP_API_GIT_REPOS);
      
      data.forEach((item) => {
      // hack: spliting tags and text description
      const splitedDescription = item.description
        ? item.description.split("||")
        : [];
      // we just use those with tags info present into description
      if (splitedDescription.length > 1) {
          commit('addPortfolioItems',{
            type: "portfolio",
            color: "purple darken-1",
            icon: "mdi-github",
            name: item.name,
            description: splitedDescription[0],
            url: item.html_url,
            homepage: item.homepage,
            date: item.created_at,
            tags: splitedDescription[1]
              .toLowerCase()
              .replace(/ /g, "")
              .split(";"),
          })
        }
      });

     } catch (error) {
      console.log(error)
    } finally{ 
      commit('loadingGitRepositories', false);
    }
    
  }
};
const mutations = {
  addPortfolioItems(state, newObj) { 
    state.portfolioItems.push(newObj)
  },
  loadingGitRepositories(state, value) { 
    state.loadingGitRepositories = value
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};