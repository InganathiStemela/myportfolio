import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    Home: [],
    About: [],
    Resume: [],
    Projects: [],
    Testimonials: [],
    Contact: []
  },
  getters: {
  },
  mutations: {
    setHome(state, data) {
      state.Home = data ;
    }
  },
  actions: {
    fetchData({ commit }) {
      axios.get('https://inganathistemela.github.io/resume/')
      .then(response => {
        commit('setHome',response.data);
      })
      .catch(error => {
        console.error('Error fetching data:',error);
      });
    }
  },
  modules: {
  }
})
