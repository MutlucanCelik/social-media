<template>
  <div class="col-md-6 col-lg-12">
    <div class="card">
      <div class="card-header border-0 pb-0">
        <h5 class="card-title">Hakkımda</h5>
      </div>

      <div class="card-body position-relative pt-0">
        <p>
          {{ currentUser.description || "Eminim harika birisiniz." }}
        </p>

        <ul class="list-unstyled mt-3 mb-0">
          <li class="mb-2">
            <i class="bi bi-calendar-date fa-fw pe-1"></i> Doğum:
            <strong> {{ currentUser.date_of_birth }}</strong>
          </li>
          <li class="mb-2">
            <i class="fa-solid fa-mars-and-venus"></i> Cinsiye: <strong> {{currentUser.gender == 'Male' ? "Erkek" : 'Kadın'}} </strong>
          </li>
          <li>
            <i class="bi bi-envelope fa-fw pe-1"></i> Email:
            <strong> {{ currentUser.email }} </strong>
          </li>
        </ul>
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
