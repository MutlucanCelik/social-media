<template>
  <div id="modal_image">
    <img
      class="avatar-img rounded-circle border border-white border-3"
      :src="userImage"
      alt="avatar"
    />
  </div>
  <div class="card">
    <div class="h-200px rounded-top bg-profil-image"></div>
    <div class="card-body py-0">
      <div class="d-sm-flex align-items-start text-center text-sm-start">
        <div @click="showImg" id="img_container">
          <div class="avatar avatar-xxl mt-n5 mb-3">
            <img
              class="avatar-img rounded-circle border border-white border-3"
              :src="userImage"
              alt="avatar"
            />
          </div>
        </div>
        <div class="ms-sm-4 mt-sm-3">
          <h1 class="mb-0 h5">
            {{ currentUser.first_name + ' ' + currentUser.last_name }}
            <i class="bi bi-patch-check-fill text-success small"></i>
          </h1>
          <p>{{ currentUser.title }}</p>
        </div>
      </div>
      <ul class="list-inline mb-0 text-center text-sm-start mt-3 mt-sm-0">
        <li class="list-inline-item">
          <i class="bi bi-calendar2-plus me-1"></i> {{ currentUser.created_at }} tarihinde katıldı
        </li>
      </ul>
    </div>
    <div class="card-footer mt-3 pt-2 pb-0">
      <ul
        class="nav nav-bottom-line align-items-center justify-content-center justify-content-md-start mb-0 border-0"
      >
        <li class="nav-item cursor-pointer" @click="toggleContent(['Share', 'Posts'])">
          <span class="nav-link profil-head-item active"> Paylaşımlar </span>
        </li>
        <li class="nav-item cursor-pointer" @click="toggleContent(['ProfilInfoCard'])">
          <span class="nav-link profil-head-item"> Hakkımda </span>
        </li>
        <li class="nav-item cursor-pointer" @click="toggleContent(['ConnectionsSection'])">
          <span class="nav-link profil-head-item">
            Bağlantılar
            <span class="badge bg-success bg-opacity-10 text-success small"> 250</span>
          </span>
        </li>
        <li class="nav-item cursor-pointer" @click="toggleContent(['ProfilPhotosCard'])">
          <span ref="profilInfoCardLink" class="nav-link profil-head-item"> Fotoğraflar </span>
        </li>
        <li class="nav-item cursor-pointer" @click="toggleContent(['VideosCard'])">
          <span class="nav-link profil-head-item"> Videolar</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, onMounted, ref } from 'vue'
import avatar from '@/assets/images/avatar/user.jpeg'
export default {
  setup(_, { emit }) {
    const store = useStore();
    let currentUser = ref({});
    const userImage = computed(() => store.state.userImage || avatar)

    onMounted(async () => {
      await store.dispatch('getUser')
      currentUser.value = store.getters.currentUser
      currentUser.value.profile_photo_url = currentUser.value.profile_photo || avatar

      const profilHeadItems = document.querySelectorAll('.profil-head-item')
      profilHeadItems.forEach((item) => {
        item.addEventListener('click', function (e) {
          profilHeadItems.forEach((link) => link.classList.remove('active'))
          item.classList.add('active')
        })
      })
    })

    const toggleContent = (content) => {
      emit('toggleContent', content)
    }

    const showImg = () => {
      const imgModal = document.getElementById('modal_image')
      imgModal.classList.add('modal-active')
    }

    const handleKeyPress = (event) => {
      if (event.key === 'Escape') {
        const imgModal = document.getElementById('modal_image')
        imgModal.classList.remove('modal-active')
      }
    }
    window.addEventListener('keydown', handleKeyPress)

    return {
      currentUser,
      toggleContent,
      showImg,
      userImage
    }
  }
}
</script>

<style scoped>
.bg-profil-image {
  background-image: url('@/assets/images/bg/05.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.cursor-pointer {
  cursor: pointer;
}

#img_container {
  cursor: pointer;
}
#modal_image {
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
  display: none;
  z-index: 10;
}
#modal_image img {
  width: 25rem;
  height: 25rem;
}

.modal-active {
  display: flex !important;
  justify-content: center;
  align-items: center;
}
main {
  position: relative !important;
}
</style>
