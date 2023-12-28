<template>
  <div>
    <div class="d-flex align-items-center d-lg-none">
      <button
        class="border-0 bg-transparent"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasSideNavbar"
        aria-controls="offcanvasSideNavbar"
      >
        <span class="btn btn-primary"><i class="fa-solid fa-sliders-h"></i></span>
        <span class="h6 mb-0 fw-bold d-lg-none ms-2">Profilim</span>
      </button>
    </div>
    <nav class="navbar navbar-expand-lg mx-0">
      <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasSideNavbar">
        <div class="offcanvas-header">
          <button
            type="button"
            class="btn-close text-reset ms-auto"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body d-block px-2 px-lg-0">
          <div class="card overflow-hidden">
            <div
              class="h-50px"
              style="
                background-image: url(assets/images/bg/01.jpg);
                background-position: center;
                background-size: cover;
                background-repeat: no-repeat;
              "
            ></div>

            <div class="card-body pt-0">
              <div class="text-center">
                <div class="avatar avatar-lg mt-n5 mb-3">
                  <a href="#!"
                    ><img
                      class="avatar-img rounded border border-white border-3"
                      :src="userImage"
                      alt="img"
                  /></a>
                </div>

                <h5 class="mb-0"><a href="#!">{{ user.first_name + ' ' + user.last_name }} </a></h5>
                <small>{{ user.title }}</small>
                <pre class="mt-3" style="font-family: var(--bs-body-font-family);">
{{ user.description }}
                </pre>

                <div class="hstack gap-2 gap-xl-3 justify-content-center">
                  <div>
                    <h6 class="mb-0">{{ postLength }}</h6>
                    <small>Paylaşım</small>
                  </div>

                  <div class="vr"></div>

                  <div>
                    <h6 class="mb-0">2.5K</h6>
                    <small>Takipçi</small>
                  </div>

                  <div class="vr"></div>

                  <div>
                    <h6 class="mb-0">365</h6>
                    <small>Takip</small>
                  </div>
                </div>
              </div>

              <hr />

              <ul class="nav nav-link-secondary flex-column fw-bold gap-2">
                <li class="nav-item">
                  <RouterLink class="nav-link" :to="{ name: 'Profil' }">
                    <img
                      class="me-2 h-20px fa-fw"
                      src="../assets/images/icon/home-outline-filled.svg"
                      alt=""
                    /><span>Profilim</span></RouterLink
                  >
                </li>
                <li class="nav-item">
                  <RouterLink class="nav-link" :to="{ name: 'Profil' }">
                    <img
                      class="me-2 h-20px fa-fw"
                      src="../assets/images/icon/person-outline-filled.svg"
                      alt=""
                    /><span>Bağlantılar</span></RouterLink
                  >
                </li>
                <li class="nav-item">
                  <RouterLink :to="{name:'Notifications'}" class="nav-link">
                    <img
                      class="me-2 h-20px fa-fw"
                      src="../assets/images/icon/notification-outlined-filled.svg"
                      alt=""
                    /><span>Bildirimler </span></RouterLink
                  >
                </li>
                <li class="nav-item">
                  <RouterLink :to="{name:'Settings'}" class="nav-link">
                    <img
                      class="me-2 h-20px fa-fw"
                      src="../assets/images/icon/cog-outline-filled.svg"
                      alt=""
                    /><span>Ayarlar</span></RouterLink
                  >
                </li>
              </ul>
            </div>
          </div>
          <CopyRight />
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import CopyRight from '@/components/CopyRight.vue'
import Profil from '@/views/Profil.vue'
import Settings from '@/views/Settings.vue'
import avatar from '@/assets/images/avatar/user.jpeg'
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'PersonInfo',
  props:["user"],


  components: {
    CopyRight,
    Profil,
    Settings,
  },
  setup(props) {
    const store = useStore()
    const postLength = computed(() => store.state.posts.length)
    const userImage = computed(() => store.state.userImage || avatar)
    return{
      postLength,
      userImage
    }
  }
 
}

</script>

<style></style>
