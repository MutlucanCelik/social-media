<template>
  <div class="card card-body">
    <div class="d-flex mb-3">
      <div class="avatar avatar-xs me-2">
        <a href="#">
          <img class="avatar-img rounded-circle" :src="userImage" alt="" />
        </a>
      </div>

      <form class="w-100 position-relative" @submit.prevent="handleSubmit">
        <textarea
          class="form-control pe-4 border-0"
          rows="2"
          data-autoresize
          placeholder="Düşüncelerini paylaş..."
          v-model="post_text"
        ></textarea>
        <input id="post_image"  type="file" class="d-none">
        <button class="btn btn-success btn-sm" type="submit">Paylaş</button>
      </form>
    </div>

    <ul class="nav nav-pills nav-stack small fw-normal">
      <li class="nav-item">
        <a
          @click="handleAddImage"
          class="nav-link bg-light py-1 px-2 mb-0"
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
import {  computed, ref } from 'vue'
import { useStore } from 'vuex'
import avatar from '@/assets/images/avatar/user.jpeg'
export default {
  setup() {
    const store = useStore() // Vuex store'u alın
    let post_text = ref("")
    const userImage = computed(() => store.state.userImage || avatar)


    const handleAddImage = () => {
      document.getElementById("post_image").click()
    }

    const handleSubmit = async() => {
      const postImage = document.getElementById("post_image")
      let formData = {
        post_text: post_text.value
      }
      console.log(postImage.files[0])
      if(postImage.value){
        formData.media_share = postImage.files[0]
      }
      console.log(formData)
      store.dispatch('createPost', formData)
      await store.dispatch('getPosts')
      post_text.value = ""
      postImage.value = ""
    }
    
    return {
      handleSubmit,
      post_text ,
      handleAddImage,
      userImage
    }
  }
}
</script>

<style scoped>
.card-body{
  flex: initial;
}
.btn-success{
  position: absolute;
  right: 0px;
  bottom: -45px;
  --bs-btn-padding-y:0.25rem;
}
</style>
