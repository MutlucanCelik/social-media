<template>
  <div>
    <Header />
    <main>
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-8 vstack gap-4">
            <ProfilHead @toggleContent="toggleContent" />
            <component v-for="content in currentContents" :key="content" :is="content"> </component>
          </div>
          <div class="col-lg-4">
            <div class="row g-4">
              <AboutCard />
              <PhotosCard />
              <ConnectionsCard />
            </div>
          </div>
        </div>
      </div>
    </main>

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
              <select class="form-select js-choice" data-position="top" data-search-enabled="false">
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
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="feedActionPhotoLabel">Add post photo</h5>
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
                  rows="2"
                  placeholder="Share your thoughts..."
                ></textarea>
              </form>
            </div>

            <div>
              <label class="form-label">Upload attachment</label>
              <div
                class="dropzone dropzone-default card shadow-none"
                data-dropzone='{"maxFiles":2}'
              >
                <div class="dz-message">
                  <i class="bi bi-images display-3"></i>
                  <p>Drag here or click to upload photo.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-danger-soft me-2" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="button" class="btn btn-success-soft">Post</button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="feedActionVideo"
      tabindex="-1"
      aria-labelledby="feedActionVideoLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="feedActionVideoLabel">Add post video</h5>
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
                  rows="2"
                  placeholder="Share your thoughts..."
                ></textarea>
              </form>
            </div>

            <div>
              <label class="form-label">Upload attachment</label>
              <div
                class="dropzone dropzone-default card shadow-none"
                data-dropzone='{"maxFiles":2}'
              >
                <div class="dz-message">
                  <i class="bi bi-camera-reels display-3"></i>
                  <p>Drag here or click to upload video.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-danger-soft me-2">
              <i class="bi bi-camera-video-fill pe-1"></i> Live video
            </button>
            <button type="button" class="btn btn-success-soft">Post</button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="modalCreateEvents"
      tabindex="-1"
      aria-labelledby="modalLabelCreateAlbum"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalLabelCreateAlbum">Create event</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div class="modal-body">
            <form class="row g-4">
              <div class="col-12">
                <label class="form-label">Title</label>
                <input type="email" class="form-control" placeholder="Event name here" />
              </div>
              <div class="col-12">
                <label class="form-label">Description</label>
                <textarea
                  class="form-control"
                  rows="2"
                  placeholder="Ex: topics, schedule, etc."
                ></textarea>
              </div>

              <div class="col-sm-4">
                <label class="form-label">Date</label>
                <input type="text" class="form-control flatpickr" placeholder="Select date" />
              </div>
              <div class="col-sm-4">
                <label class="form-label">Time</label>
                <input
                  type="text"
                  class="form-control flatpickr"
                  data-enableTime="true"
                  data-noCalendar="true"
                  placeholder="Select time"
                />
              </div>
              <div class="col-sm-4">
                <label class="form-label">Duration</label>
                <input type="email" class="form-control" placeholder="1hr 23m" />
              </div>
              <div class="col-12">
                <label class="form-label">Location</label>
                <input type="email" class="form-control" placeholder="Logansport, IN 46947" />
              </div>
              <div class="col-12">
                <label class="form-label">Add guests</label>
                <input type="email" class="form-control" placeholder="Guest email" />
              </div>
              <div class="col-12 mt-3">
                <ul class="avatar-group list-unstyled align-items-center mb-0">
                  <li class="avatar avatar-xs">
                    <img
                      class="avatar-img rounded-circle"
                      src="@/assets/images/avatar/01.jpg"
                      alt="avatar"
                    />
                  </li>
                  <li class="avatar avatar-xs">
                    <img
                      class="avatar-img rounded-circle"
                      src="@/assets/images/avatar/02.jpg"
                      alt="avatar"
                    />
                  </li>
                  <li class="avatar avatar-xs">
                    <img
                      class="avatar-img rounded-circle"
                      src="@/assets/images/avatar/03.jpg"
                      alt="avatar"
                    />
                  </li>
                  <li class="avatar avatar-xs">
                    <img
                      class="avatar-img rounded-circle"
                      src="@/assets/images/avatar/04.jpg"
                      alt="avatar"
                    />
                  </li>
                  <li class="avatar avatar-xs">
                    <img
                      class="avatar-img rounded-circle"
                      src="@/assets/images/avatar/05.jpg"
                      alt="avatar"
                    />
                  </li>
                  <li class="avatar avatar-xs">
                    <img
                      class="avatar-img rounded-circle"
                      src="@/assets/images/avatar/06.jpg"
                      alt="avatar"
                    />
                  </li>
                  <li class="avatar avatar-xs">
                    <img
                      class="avatar-img rounded-circle"
                      src="@/assets/images/avatar/07.jpg"
                      alt="avatar"
                    />
                  </li>
                  <li class="ms-3">
                    <small> +50 </small>
                  </li>
                </ul>
              </div>

              <div>
                <label class="form-label">Upload attachment</label>
                <div
                  class="dropzone dropzone-default card shadow-none"
                  data-dropzone='{"maxFiles":2}'
                >
                  <div class="dz-message">
                    <i class="bi bi-file-earmark-text display-3"></i>
                    <p>Drop presentation and document here or click to upload.</p>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-danger-soft me-2" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="button" class="btn btn-success-soft">Create now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import ProfilHead from '@/components/ProfilHead.vue'
import Share from '@/components/Share.vue'
import Posts from '@/components/Posts.vue'
import ConnectionsSection from '@/components/ConnectionsSection.vue'
import AboutCard from '@/components/AboutCard.vue'
import PhotosCard from '@/components/PhotosCard.vue'
import ConnectionsCard from '@/components/ConnectionsCard.vue'
import ProfilInfoCard from '@/components/ProfilInfoCard.vue'
import ProfilPhotosCard from '@/components/ProfilPhotosCard.vue'
import VideosCard from '@/components/VideosCard.vue'

export default {
  name: 'Profil',

  components: {
    Header,
    ProfilHead,
    Share,
    Posts,
    ConnectionsSection,
    AboutCard,
    PhotosCard,
    ConnectionsCard,
    ProfilInfoCard,
    ProfilPhotosCard,
    VideosCard
  },
  data() {
    return {
      currentContents: ['Share', 'Posts']
    }
  },
  methods: {
    toggleContent(contents) {
      this.currentContents = contents
    }
  }
}
</script>

<style></style>
