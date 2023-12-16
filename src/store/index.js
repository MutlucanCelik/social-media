
import { createStore } from 'vuex'; // Vuex'i içe aktarın
import { postWithAuth } from '../utils/service/HttpService';

export default createStore({
    state: {
      user : null,
    },
    mutations: {
      SET_USER(state, user) {
        state.user = user;
      },
      
    },
    actions: {
      async fetchUser({ commit }) {
        try {
          const userId = +localStorage.getItem("userId")
          const user = await postWithAuth("users/get",{id : userId});
          commit('SET_USER', user);
        } catch (error) {
          console.error('There has been a problem fetching the user:', error);
        }
      },
    },
    getters: {
      currentUser: state => {
        return state.user
      },
    },
  });