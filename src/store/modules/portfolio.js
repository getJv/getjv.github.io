import axios from 'axios';

const state = {
  loadingGitRepositories: false,
  loadingGitIssues: false,
  loadingGitPull: false,
  loadingSO: false,

  portfolioItems: [],
  tags: [
      {
        tag: "portfolio",
        color: "purple darken-1",
        icon: "mdi-github",
        type: 'domain',
        
      },
      {
        tag: "git-issue",
        color: "blue darken-3",
        icon: "mdi-github",
        type: 'domain',
        
      },
      {
        tag: "git-pull-request",
        color: "pink lighten-1",
        icon: "mdi-github",
        type: 'domain',
        
      },
      {
        tag: "interview-test",
        color: "cyan darken-2",
        icon: "mdi-lan-check",
        type: 'domain',
      },
      {
        tag: "php",
        color: "blue darken-3",
        icon: "mdi-language-php",
        type: 'technology',
      },
      {
        tag: "laravel",
        color: "orange darken-5",
        icon: "mdi-laravel",
        type: 'technology',
      },
      {
        tag: "html",
        color: "orange darken-3",
        icon: "mdi-language-html5",
        type: 'technology',
      },
      {
        tag: "typescript",
        color: "red darken-3",
        icon: "mdi-language-typescript",
        type: 'technology',
      },
     /*  {
        tag: "java",
        color: "blue-gray darken-3",
        icon: "mdi-language-java",
        type: 'technology',
      }, */
      {
        tag: "javascript",
        color: "yellow darken-3",
        icon: "mdi-language-javascript",
        type: 'technology',
      },
      {
        tag: "docker",
        color: "blue darken-1",
        icon: "mdi-docker",
        type: 'technology',
      },
      {
        tag: "docker-compose",
        color: "blue darken-1",
        icon: "mdi-docker",
        type: 'technology',
      },
      {
        tag: "css",
        color: "pink darken-1",
        icon: "mdi-language-css3",
        type: 'technology',
      },
      {
        tag: "tailwind",
        color: "green darken-1",
        icon: "mdi-weather-windy-variant",
        type: 'technology',
      },
      {
        tag: "vuetify",
        color: "blue darken-1",
        icon: "mdi-vuetify",
        type: 'technology',
      },
      {
        tag: "reactjs",
        color: "blue darken-1",
        icon: "mdi-react",
        type: 'technology',
      },
      {
        tag: "tdd",
        color: "red darken-1",
        icon: "mdi-test-tube",
        type: 'technology',
      },
      {
        tag: "php-unit",
        color: "red darken-1",
        icon: "mdi-test-tube",
        type: 'technology',
      },
      {
        tag: "vuejs",
        color: "green darken-3",
        icon: "mdi-vuejs",
        type: 'technology',
      },
    ],
  
  
};
const getters = {
  loadingGitRepositories: (state) => state.loadingGitRepositories,
  loadingGitIssues:  (state) => state.loadingGitIssues,
  loadingGitPull:  (state) => state.loadingGitPull,
  loadingSO: (state) => state.loadingSOposts,
  loadingPortfolio: (state) => state.loadingGitRepositories &&  state.loadingGitIssues && state.loadingSOposts,
  
  portfolioItems: (state) => state.portfolioItems,
  portfolioItemsSize: (state) => state.portfolioItems.length,

  techTags: (state) => { 
    return state.tags
      .slice(0)
      .filter(t => t.type == 'technology')
      .sort((a, b) => {
        if (a.tag < b.tag) {
          return -1;
        }
        if (a.tag > b.tag) {
          return 1;
        }
        return 0;
      });

  },
  domainTags: (state) => { 
    return state.tags
      .slice(0)
      .filter(t => t.type == 'domain')
      .sort((a, b) => {
        if (a.tag < b.tag) {
          return -1;
        }
        if (a.tag > b.tag) {
          return 1;
        }
        return 0;
      });
  },
  tags: (state) =>  state.tags,
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
            type: "gitRepository",
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
    
  },
  async fetchGitIssues({ commit }) {
    try {
      commit('loadingGitIssues', true);
      const { data } = await axios.get(process.env.VUE_APP_API_GIT_ISSUES);
      
      data.items.forEach((item) => {
        var labels = item.labels.map(t => t.name);
        labels.push('git-issue');
        commit('addPortfolioItems', {
          type: "gitIssues",
          color: "blue darken-3",
          icon: "mdi-github",
          name: `${item.number} - ${item.title}`,
          description: '',
          url: item.html_url,
          homepage: null,
          date: item.created_at,
          tags: labels
            .join(';')
            .toLowerCase()
            .replace(/ /g, "")
            .split(";"),
        })
      });
     } catch (error) {
      console.log(error)
    } finally{ 
      commit('loadingGitIssues', false);
    }
    
  },
  async fetchGitPullRequests({ commit }) {
    try {
      commit('loadingGitPull', true);
      const { data } = await axios.get(process.env.VUE_APP_API_GIT_PRS);
      
      data.items.forEach((item) => {
        var labels = item.labels.map(t => t.name);
        labels.push('git-pull-request');
        commit('addPortfolioItems', {
          type: "gitPull",
          color: "pink lighten-1",
          icon: "mdi-github",
          name: `${item.number} - ${item.title}`,
          description: item.body,
          url: item.html_url,
          homepage: null,
          date: item.created_at,
          tags: labels
            .join(';')
            .toLowerCase()
            .replace(/ /g, "")
            .split(";"),
        })
      });
     } catch (error) {
      console.log(error)
    } finally{ 
      commit('loadingGitPull', false);
    }
    
  }
};
const mutations = {
  addPortfolioItems(state, newObj) { 
    state.portfolioItems.push(newObj)
  },
  loadingGitRepositories(state, value) { 
    state.loadingGitRepositories = value
  },
  loadingGitIssues(state, value) { 
    state.loadingGitIssues = value
  },
  loadingGitPull(state, value) { 
    state.loadingGitPull = value
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};