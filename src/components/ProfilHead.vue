<template>
  <div class="card">
    <div class="h-200px rounded-top bg-profil-image"></div>
    <div class="card-body py-0">
      <div class="d-sm-flex align-items-start text-center text-sm-start">
        <div>
          <div class="avatar avatar-xxl mt-n5 mb-3">
            <img
              class="avatar-img rounded-circle border border-white border-3"
              src="@/assets/images/avatar/07.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="ms-sm-4 mt-sm-3">
          <h1 class="mb-0 h5">
            Mutlucan Çelik <i class="bi bi-patch-check-fill text-success small"></i>
          </h1>
          <p>250 Bağlantı</p>
        </div>
        <div class="d-flex mt-3 justify-content-center ms-sm-auto">
          <button class="btn btn-danger-soft me-2" type="button">
            <i class="bi bi-pencil-fill pe-1"></i> Profili düzenle
          </button>
        </div>
      </div>
      <ul class="list-inline mb-0 text-center text-sm-start mt-3 mt-sm-0">
        <li class="list-inline-item">
          <i class="bi bi-briefcase me-1"></i> Frontend Web Developer
        </li>
        <li class="list-inline-item"><i class="bi bi-geo-alt me-1"></i> Elazığ/Merkez</li>
        <li class="list-inline-item">
          <i class="bi bi-calendar2-plus me-1"></i> 30 Kasım 2022 tarihinde katıldı
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
export default {
  data() {
    return {}
  },
  methods: {
    toggleContent(content) {
      this.$emit('toggleContent', content)
    }
  },
  mounted() {
    const profilHeadItems = document.querySelectorAll('.profil-head-item')
    profilHeadItems.forEach((item) => {
      item.addEventListener('click', function (e) {
        profilHeadItems.forEach((link) => link.classList.remove('active'))
        item.classList.add('active')
      })
    })
  }
}
</script>

<style>
.bg-profil-image {
  background-image: url('@/assets/images/bg/05.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.cursor-pointer {
  cursor: pointer;
}
</style>
