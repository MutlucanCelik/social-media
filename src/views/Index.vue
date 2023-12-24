<template>
  <div>
    <Header />
    <main>
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-3">
            <PersonInfo :user="currentUser"/>
          </div>
          <div class="col-md-8 col-lg-6 vstack gap-4">
            <!-- <Story /> -->
            <Share />
            <Posts />
          </div>
          <div class="col-lg-3">
            <div class="row g-4">
              <FollowUpSuggestions />
              <TodaysNews />
            </div>
          </div>
        </div>
      </div>
    </main>
    <Messaging />

  <div></div>

    <div
      class="modal fade"
      id="feedActionPhoto"
      tabindex="-1"
      aria-labelledby="feedActionPhotoLabel"
      aria-hidden="true"
      aria-modal="true"
      role="dialog"
      style="display: none"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <!-- Modal feed header START -->
          <div class="modal-header">
            <h5 class="modal-title" id="feedActionPhotoLabel">Fotoğraf paylaş</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <form class="modal-body">
            <div class="d-flex mb-3">
              <div class="avatar avatar-xs me-2">
                <img
                  class="avatar-img rounded-circle"
                  src="../assets/images/avatar/03.jpg"
                  alt=""
                />
              </div>

              <div class="w-100">
                <textarea
                  class="form-control pe-4 fs-3 lh-1 border-0"
                  rows="2"
                  placeholder="Düşüncelerini paylaş..."
                ></textarea>
              </div>
            </div>
            <input id="add_file" type="file"  class="d-none"/>
            <div>
              <label class="form-label">Yükle</label>
              <div
              id="add_file_container"
                class="dropzone dropzone-default card shadow-none dz-clickable"
              >
                <div class="dz-message">
                  <i class="bi bi-images display-3"></i>
                  <p>Fotoğraf yüklemek için tıklayın.</p>
                </div>
              </div>
            </div>
            <!-- Dropzone photo END -->
          
          <!-- Modal feed body END -->

          <!-- Modal feed footer -->
          <div class="modal-footer">
            <!-- Button -->
            <button type="button" class="btn btn-danger-soft me-2" data-bs-dismiss="modal">
              İptal
            </button>
            <button type="submit" class="btn btn-success-soft">Paylaş</button>
          </div>
        </form>
          <!-- Modal feed footer -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Story from '@/components/Story.vue'
import Share from '@/components/Share.vue'
import Posts from '@/components/Posts.vue'
import PersonInfo from '@/components/PersonInfo.vue'
import FollowUpSuggestions from '@/components/FollowUpSuggestions.vue'
import TodaysNews from '@/components/TodaysNews.vue'
import Messaging from '@/components/Messaging.vue'
import { useStore } from 'vuex'
import { onMounted, ref } from 'vue'
export default {
  name: 'Index',

  components: {
    Header,
    Story,
    Share,
    Posts,
    PersonInfo,
    FollowUpSuggestions,
    TodaysNews,
    Messaging
  },
  setup() {
    const store = useStore() // Vuex store'u alın

    let currentUser = ref({})
  
    onMounted(async() => {
      try {
        await store.dispatch('getUser')
        currentUser.value = store.getters.currentUser
      } catch (error) {
        console.error("Kullanıcı getirilirken bir hata oluştu:", error)
      }
    })

  

    return {
      currentUser,
    }
  }


}
</script>

<style></style>
