<template>
  <div class="d-flex flex-column gap-3">
    <div v-for="post in posts" :key="post.uuid">
      <div class="card">
        <div class="card-header border-0 pb-0">
          <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center">
              <div class="avatar me-2">
                <a href="#!">
                  <img
                    class="avatar-img rounded-circle"
                    :src="post.user.profile_photo_url"
                    alt=""
                  />
                </a>
              </div>
              <div>
                <div class="nav nav-divider">
                  <h6 class="nav-item card-title mb-0"><a href="#!">{{`${post.user.first_name} ${post.user.last_name}`}} </a></h6>
                  <span class="nav-item small"> {{ post.created_at }}</span>
                </div>
                <p class="mb-0 small">{{ post.user.title }}</p>
              </div>
            </div>
            <div class="dropdown">
								<a href="#" class="text-secondary btn btn-secondary-soft-hover py-1 px-2 show" id="cardFeedAction" data-bs-toggle="dropdown" aria-expanded="true">
									<i class="bi bi-three-dots"></i>
								</a>
								<!-- Card feed action dropdown menu -->
								<ul class="dropdown-menu dropdown-menu-end hide" aria-labelledby="cardFeedAction" data-popper-placement="top-end" style="position: absolute; inset: auto 0px 0px auto; margin: 0px; transform: translate3d(0px, -35px, 0px);">
									<li @click="removePost(post.uuid)"><a class="dropdown-item" href="#"> <i class="bi bi-trash fa-fw pe-2"></i>Kaldır</a></li>
								</ul>
							</div>
          </div>
        </div>
        <div class="card-body">
          <p>
            {{ post.post_text }}
          </p>
          <img v-if="post.media_share != '[]'" class="card-img" src="../assets/images/post/3by2/01.jpg" alt="Post" />
          <ul class="nav nav-stack py-3 small">
            <li class="nav-item">
              <a
                class="nav-link active"
                href="#!"
                data-bs-container="body"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-html="true"
                data-bs-custom-class="tooltip-text-start"
                data-bs-title="Frances Guerrero<br> Lori Stevens<br> Billy Vasquez<br> Judy Nguyen<br> Larry Lawson<br> Amanda Reed<br> Louis Crawford"
              >
                <i class="bi bi-hand-thumbs-up-fill pe-1"></i>Beğenildi (56)</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#!"> <i class="bi bi-chat-fill pe-1"></i>Yorumlar (12)</a>
            </li>
          </ul>
          <div class="d-flex mb-3">
            <div class="avatar avatar-xs me-2">
              <a href="#!">
                <img class="avatar-img rounded-circle" src="../assets/images/avatar/12.jpg" alt="" />
              </a>
            </div>
            <form @submit.prevent="createComment(post.uuid)" class="nav nav-item w-100 position-relative">
              <textarea
                data-autoresize
                class="form-control pe-5 bg-light"
                rows="1"
                placeholder="Yorum ekle..."
                v-model="comment"
              ></textarea>
              <button

                class="nav-link bg-transparent px-3 position-absolute top-50 end-0 translate-middle-y border-0"
                type="submit"
              >
                <i class="bi bi-send-fill"> </i>
              </button>
            </form>
          </div>
          <ul v-if="posts.comments" class="comment-wrap list-unstyled">
            <li class="comment-item">
              <div class="d-flex position-relative">
                <div class="avatar avatar-xs">
                  <a href="#!"
                    ><img
                      class="avatar-img rounded-circle"
                      src="../assets/images/avatar/05.jpg"
                      alt=""
                  /></a>
                </div>
                <div class="ms-2">
                  <div class="bg-light rounded-start-top-0 p-3 rounded">
                    <div class="d-flex justify-content-between">
                      <h6 class="mb-1"><a href="#!"> Büşra Gök </a></h6>
                      <small class="ms-2">5hr</small>
                    </div>
                    <p class="small mb-0">
                     {{ posts.comments.comment_text }}
                    </p>
                  </div>
                  <ul class="nav nav-divider py-2 small">
                    <li class="nav-item">
                      <a class="nav-link" href="#!"> Beğen (3)</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#!"> Cevap ver</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#!"> 5 Yanıtı görüntüle</a>
                    </li>
                  </ul>
                </div>
              </div>
             
              <a
                href="#!"
                role="button"
                class="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center mb-3 ms-5"
                data-bs-toggle="button"
                aria-pressed="true"
              >
              </a>
            </li>
            
          </ul>
        </div>
      </div>

    </div>


  </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import avatar from '@/assets/images/avatar/user.jpeg'
export default {
  setup() {
    const store = useStore() // Vuex store'u alın
    let posts = computed(() => {
      store.state.posts.forEach(post => {
        post.user.profile_photo_url = post.user.profile_photo_url || avatar
      });
      return store.state.posts
    })
    let comment = ref("")

    onMounted(async () => {
      await store.dispatch('getPosts')
    })
    
    const removePost = (id) =>{
      const token = "Bearer " + localStorage.getItem("tokenKey")
      fetch(`http://127.0.0.1:8000/api/posts/${id}/delete`, {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json',
              "Authorization": token,
          },
      })
          .then(response => {
              if (response.ok) {
                  store.dispatch('deletePost', id)
                  posts.value = store.getters.getPosts
              } else {
                throw new Error('Post silinemedi');
              }
          })
          .catch(error => {
              // Hata durumunda
              console.error('Bir hata oluştu:', error);
          });
    }
    const createComment = (id) => {
  
      fetch(`http://127.0.0.1:8000/api/comment/create?post_id=${id}&comment_text=${comment.value}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Authorization" : "Bearer " + localStorage.getItem("tokenKey"),
        }
      })
        .then(response => {
          if (response.ok) {
            comment.value = ""
            return response.json();
          }else{
            throw new Error('Network response was not ok');
          }
          
        })
        .catch(error => {
          console.error('Hata:', error);
        });

    }

    return {
      posts,
      removePost,avatar,
      createComment,
      comment
    }
  }
}
</script>

<style scoped>
   .dropdown-menu{
    --bs-dropdown-padding-y:0.5rem;
    --bs-dropdown-min-width: maxcontent;
   }
</style>
