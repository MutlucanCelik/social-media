
import { createStore } from 'vuex'; // Vuex'i içe aktarın
import { getWithAuth,postWithAuth,postItems } from '../utils/service/HttpService';
import { ref } from 'vue'

export default createStore({
    state: {
      user : null,
      userImage: null,
      posts : [],
      comments: []
    },
    mutations: {
      SET_USER(state, user) {
        let date = ref("")
        //doğum tarihi
        date.value = new Date(user.date_of_birth)
        let day = date.value.getDate();
        let mounth = date.value.getMonth() + 1; // Ay değeri 0'dan başladığı için 1 ekleyerek düzeltiyoruz
        let year = date.value.getFullYear();
        date.value =  day + '.' + mounth + '.' + year;
        user.date_of_birth = date.value

        //kayıt tarihi
        date.value = new Date(user.created_at)
        day = date.value.getDate();
        mounth = date.value.getMonth() + 1; // Ay değeri 0'dan başladığı için 1 ekleyerek düzeltiyoruz
        year = date.value.getFullYear();
        date.value =  day + '.' + mounth + '.' + year;
        user.created_at = date.value
        state.userImage = user.profile_photo_url
        state.user = user;
      },
      SET_POSTS(state,post){
        state.posts.push(post)
      },
      SET_COMMENTS(state,comments){
        state.comments.push(comments)
      },

      GET_POSTS(state,posts){
        state.posts = posts
      },
      REMOVE_POST(state, postId) {
        state.posts = state.posts.filter(post => post.uuid !== postId);
      }
      
    },
    actions: {
      async getUser({ commit }) {
        try {
          const token = "Bearer " + localStorage.getItem("tokenKey")
          const username = localStorage.getItem("username")
          const user = await getWithAuth(`users/get/${username}`, token)
          user.profile_photo_url = "http://127.0.0.1:8000"+ user.profile_photo_url
          commit('SET_USER', user);
        } catch (error) {
          console.error('There has been a problem fetching the user:', error.message);
        }
      },
    

      //Post işlemleri
      async createPost({ commit }, body) {
        try {
          const token = "Bearer " + localStorage.getItem("tokenKey")
          const post = await postWithAuth(`posts/create`, body, token);
          commit('SET_POSTS', post);
        } catch (error) {
          throw new Error('Hata : ',error.message);
        }
      },
      async getPosts({ commit,state }) {
        try {
          const token = "Bearer " + localStorage.getItem("tokenKey")
          const posts = await postItems(`posts/user`, token);
          posts.data.posts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
          posts.data.posts.forEach(item => {
            item.user.profile_photo_url = "http://127.0.0.1:8000"+ item.user.profile_photo_url
            const currentDate = new Date();
            let date = new Date(item.created_at)
            const differenceInMilliseconds = currentDate - date;
            const differenceInSeconds = differenceInMilliseconds / 1000; // Milisaniyeyi saniyeye çevir
            let minutesPassed = Math.floor(differenceInSeconds / 60);
            if(minutesPassed > 60){
              let hour = Math.floor(minutesPassed/60);
              minutesPassed = hour + " saat önce"
            }else{
              minutesPassed = minutesPassed == 0 ? 1 + " dakika önce":  minutesPassed+" dakika önce"
            }
            item.created_at = minutesPassed
            item.comments = state.comments
          })
          
          commit('GET_POSTS', posts.data.posts);
        } catch (error) {
          throw new Error('Hata : ',error.message);
        }
      },
      deletePost({ commit }, postId) { 
        commit('REMOVE_POST', postId);
      },


      //Yorum işlemleri
      async createComment({ commit }, body) {
        try {
          const token = "Bearer " + localStorage.getItem("tokenKey")
          const post = await postWithAuth(`posts/create`, body, token);
          commit('SET_POSTS', post);
        } catch (error) {
          throw new Error('Hata : ',error.message);
        }
      },
      async getComment ({commit}){
        try {
          const token = "Bearer " + localStorage.getItem("tokenKey")
          const comments = await postItems(`comment/user-comment`,token);
          commit('SET_COMMENTS', comments.data.comments);
        } catch (error) {
          throw new Error('Hata : ',error.message);
        }
      }

    },    
    getters: {
      currentUser: state => {
        return state.user
      },
      getPosts: state => {
        return state.posts
      },
    },
  });