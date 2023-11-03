<template>
  <div class="card card-body">
    <div class="d-flex mb-3">
      <div class="avatar avatar-xs me-2">
        <a href="#">
          <img class="avatar-img rounded-circle" src="../assets/images/avatar/03.jpg" alt="" />
        </a>
      </div>

      <form class="w-100">
        <textarea
          class="form-control pe-4 border-0"
          rows="2"
          data-autoresize
          placeholder="Düşüncelerini paylaş..."
        ></textarea>
      </form>
    </div>

    <ul class="nav nav-pills nav-stack small fw-normal">
      <li class="nav-item">
        <a
          class="nav-link bg-light py-1 px-2 mb-0"
          href="#!"
          data-bs-toggle="modal"
          data-bs-target="#feedActionPhoto"
        >
          <i class="bi bi-image-fill text-success pe-2"></i>Fotoğraf</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link bg-light py-1 px-2 mb-0"
          href="#!"
          data-bs-toggle="modal"
          data-bs-target="#feedActionVideo"
        >
          <i class="bi bi-camera-reels-fill text-info pe-2"></i>Video</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
