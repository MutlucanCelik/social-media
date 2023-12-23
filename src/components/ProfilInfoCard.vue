<template>
  <div class="card">
    <div class="card-header border-0 pb-0">
      <h5 class="card-title">Profil Bilgisi</h5>
    </div>
    <div class="card-body">
      <div class="rounded border px-3 py-2 mb-3">
        <div class="d-flex align-items-center justify-content-between">
          <h6>Genel Bakış</h6>
        </div>
        <pre style="font-family: var(--bs-body-font-family);">
{{ currentUser.description || "Eminim harika birisiniz" }}
        </pre>
      </div>
      <div class="row g-4">
        <div class="col-sm-6">
          <div class="d-flex align-items-center rounded border px-3 py-2">
            <p class="mb-0">
              <i class="bi bi-geo-alt fa-fw me-2"></i> Ad soyad:
              <strong> {{ currentUser.first_name + ' ' + currentUser.last_name   }} </strong>
            </p>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="d-flex align-items-center rounded border px-3 py-2">
            <p class="mb-0">
              <i class="bi bi-calendar-date fa-fw me-2"></i> Doğum: <strong> {{ currentUser.date_of_birth }}</strong>
            </p>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="d-flex align-items-center rounded border px-3 py-2">
            <p class="mb-0">
              <i class="fa-solid fa-mars-and-venus"></i> Cinsiyet: <strong> {{ currentUser.gender ? currentUser.gender == 'Male' ? 'Erkek ': 'Kadın' : "-" }} </strong>
            </p>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="d-flex align-items-center rounded border px-3 py-2">
            <p class="mb-0">
              <i class="bi bi-briefcase fa-fw me-2"></i> Ünvan: <strong> {{ currentUser.title || "-" }} </strong>
            </p>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="d-flex align-items-center rounded border px-3 py-2">
            <p class="mb-0">
              <i class="bi bi-geo-alt fa-fw me-2"></i> Katılma tarihi
              <strong> {{ currentUser.created_at }}</strong>
            </p>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="d-flex align-items-center rounded border px-3 py-2">
            <p class="mb-0">
              <i class="bi bi-envelope fa-fw me-2"></i> Email:
              <strong>{{currentUser.email}}</strong>
            </p>
         
          </div>
        </div>
        <!--<div class="col-sm-6 position-relative">
                  <a class="btn btn-dashed rounded w-100" href="#!"> <i class="bi bi-plus-circle-dotted me-1"></i>Add a workplace</a>
                </div>
                <div class="col-sm-6 position-relative">
                  <a class="btn btn-dashed rounded w-100" href="#!"> <i class="bi bi-plus-circle-dotted me-1"></i>Add a education</a>
                </div>-->
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { onMounted, ref } from 'vue'
export default {
  setup() {
    const store = useStore() // Vuex store'u alın

    let currentUser = ref("") // Vuex getter'ını kullanarak kullanıcıyı alın
    

    onMounted(async() => {
      await store.dispatch('getUser')
      currentUser.value = store.getters.currentUser
    })
    

    


    return {
      currentUser
    }
  }
}
</script>

<style></style>
