<template>
  <div>
    <Header />
    <main>
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-3">
            <PersonInfo />
          </div>
          <div class="col-md-8 col-lg-6 vstack gap-4">
            <Story />
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

    <div
      class="modal fade"
      id="modalCreateFeed"
      tabindex="-1"
      aria-labelledby="modalLabelCreateFeed"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalLabelCreateFeed">Create post</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div class="modal-body">
            <div class="d-flex mb-3">
              <div class="avatar avatar-xs me-2">
                <img class="avatar-img rounded-circle" src="@/assets/images/avatar/03.jpg" alt="" />
              </div>

              <form class="w-100">
                <textarea
                  class="form-control pe-4 fs-3 lh-1 border-0"
                  rows="4"
                  placeholder="Share your thoughts..."
                  autofocus
                ></textarea>
              </form>
            </div>

            <div class="hstack gap-2">
              <a
                class="icon-md bg-success bg-opacity-10 text-success rounded-circle"
                href="#"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Photo"
              >
                <i class="bi bi-image-fill"></i>
              </a>
              <a
                class="icon-md bg-info bg-opacity-10 text-info rounded-circle"
                href="#"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Video"
              >
                <i class="bi bi-camera-reels-fill"></i>
              </a>
              <a
                class="icon-md bg-danger bg-opacity-10 text-danger rounded-circle"
                href="#"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Events"
              >
                <i class="bi bi-calendar2-event-fill"></i>
              </a>
              <a
                class="icon-md bg-warning bg-opacity-10 text-warning rounded-circle"
                href="#"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Feeling/Activity"
              >
                <i class="bi bi-emoji-smile-fill"></i>
              </a>
              <a
                class="icon-md bg-light text-secondary rounded-circle"
                href="#"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Check in"
              >
                <i class="bi bi-geo-alt-fill"></i>
              </a>
              <a
                class="icon-md bg-primary bg-opacity-10 text-primary rounded-circle"
                href="#"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Tag people on top"
              >
                <i class="bi bi-tag-fill"></i>
              </a>
            </div>
          </div>

          <div class="modal-footer row justify-content-between">
            <div class="col-lg-3">
              <select
                class="form-select js-choice choice-select-text-none"
                data-position="top"
                data-search-enabled="false"
              >
                <option value="PB">Public</option>
                <option value="PV">Friends</option>
                <option value="PV">Only me</option>
                <option value="PV">Custom</option>
              </select>
            </div>
            <div class="col-lg-8 text-sm-end">
              <button type="button" class="btn btn-danger-soft me-2">
                <i class="bi bi-camera-video-fill pe-1"></i> Live video
              </button>
              <button type="button" class="btn btn-success-soft">Post</button>
            </div>
          </div>
        </div>
      </div>
    </div>

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
import "@/utils/pages/index.js"
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


}
</script>

<style></style>
