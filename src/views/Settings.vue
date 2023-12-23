<template>
  <fragment>
    <Header />
    <main>
      <div class="container">
        <div class="row">
          <div class="col-sm-6 vstack gap-4">
            <div class="tab-content py-0 mb-0">
              <div class="tab-pane show active fade" id="nav-setting-tab-1">
                <div class="card mb-4">
                  <div class="card-header border-0 pb-0">
                    <h1 class="h5 card-title">Kullanıcı Bilgileri</h1>
                  </div>
                  <div class="d-flex justify-content-center align-items-center">
                    <div @click="hadleFileEdit" class="img-container rounded-circle">
                      <img
                        class="rounded-circle"
                        :src="currentUser.profile_photo_url"
                        alt="img"
                      />
                      <div class="img-modal">
                        <i class="fa-solid fa-plus"></i>
                        <span>Düzenle</span>
                      </div>
                    </div>
                  </div>
                  <div class="card-body" @submit.prevent="handleSettingSubmit">
                    <form class="row g-3">
                      <div class="col-lg-12 d-none">
                        <label class="form-label">Resim</label>
                        <input
                          
                          id="img_input"
                          type="file"
                          class="form-control"
                        />
                      </div>

                      <div class="col-sm-6">
                        <label class="form-label">Ad</label>
                        <input
                          type="text"
                          class="form-control"
                          v-model="currentUser.first_name"
                        />
                      </div>
                      <div class="col-sm-6">
                        <label class="form-label">Soyad</label>
                        <input
                          type="text"
                          class="form-control"
                          v-model="currentUser.last_name"
                        />
                      </div>
                      <div class="col-sm-6">
                        <label class="form-label">Kullanıcı adı</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder=""
                          v-model="currentUser.username"
                          
                        />
                      </div>
                      <div class="col-sm-6">
                        <label class="form-label">Doğum tarihi </label>
                        <input
                          type="date"
                          class="form-control"
                          v-model="currentUser.date_of_birth"
                        />
                      </div>
                      <div class="col-sm-6">
                        <label class="form-label">Ünvan</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder=""
                          v-model="currentUser.title"
                        />
                      </div>
                      <div class="col-sm-6">
                        <label class="form-label">Cinsiyet</label>
                        <select class="form-select" name="gender" id="gender" v-model="currentUser.gender">
                            <option v-if="currentUser.gender" value="" :selected="currentUser.gender === ''">Cinsiyet seçin</option>
                            <option value="Male" :selected="currentUser.gender === 'Male'">Erkek</option>
                            <option value="Female" :selected="currentUser.gender === 'Female'">Kadın</option>
                        </select>
                      </div>
                      <div class="col-sm-12">
                        <label class="form-label">Email</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder=""
                          v-model="currentUser.email"
                          
                        />
                      </div>
                      <div class="col-12">
                        <label class="form-label">Genel bakış</label>
                        <textarea
                          class="form-control"
                          rows="4"
                          placeholder="Bir kaç kelimeyle kendinizden bahsedin..."
                          v-model="currentUser.description"
                        ></textarea>
                      </div>
                      <div class="col-12 text-end">
                        <button type="submit" class="btn btn-sm btn-primary mb-0">Kaydet</button>
                      </div>
                    </form>
                  </div>
                </div>

                <div class="card">
                  <div class="card-header border-0 pb-0">
                    <h5 class="card-title">Şifre Değiştir</h5>
                  </div>
                  <div class="card-body">
                    <form class="row g-3">
                      <div class="col-12">
                        <label class="form-label">Şifre</label>
                        <input type="text" class="form-control" placeholder="" />
                      </div>
                      <div class="col-12">
                        <label class="form-label">Yeni şifre</label>
                        <div class="input-group">
                          <input class="form-control fakepassword" type="password" id="psw-input" />
                          <span class="input-group-text p-0">
                            <i
                              class="fakepasswordicon fa-solid fa-eye-slash cursor-pointer p-2 w-40px"
                            ></i>
                          </span>
                        </div>
                        <div id="pswmeter" class="mt-2"></div>
                        <div id="pswmeter-message" class="rounded mt-1"></div>
                      </div>
                      <div class="col-12">
                        <label class="form-label">Şifre kontrol</label>
                        <input type="text" class="form-control" placeholder="" />
                      </div>
                      <div class="col-12 text-end">
                        <button type="submit" class="btn btn-primary mb-0">Kaydet</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </fragment>
</template>

<script>
import Header from '@/components/Header.vue'
import CopyRight from '@/components/CopyRight.vue'
import moment from 'moment'
import { useStore } from 'vuex'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import avatar from '@/assets/images/avatar/user.jpeg'
export default {
  name: 'Settings',

  components: {
    Header,
    CopyRight
  },

  setup() {
    const store = useStore() // Vuex store'u alın
    const router = useRouter()
    let currentUser = ref({}) // Vuex getter'ını kullanarak kullanıcıyı alın

    onMounted(async () => {
      await store.dispatch('getUser')
      if (store.getters.currentUser) {
        currentUser.value = store.getters.currentUser
        currentUser.value.date_of_birth = moment(
          currentUser.value.date_of_birth,
          'DD.MM.YYYY'
        ).format('YYYY-MM-DD')
        console.log(currentUser.value)
        currentUser.value.profile_photo_url = currentUser.value.profile_photo_url || avatar
        currentUser.value.gender = currentUser.value.gender || ''
        
      }
      
    })

    const handleSettingSubmit = () => {
      let formData = {
        first_name: currentUser.value.first_name,
        last_name: currentUser.value.last_name,
        username: currentUser.value.username,
        date_of_birth: currentUser.value.date_of_birth,
        title: currentUser.value.title,
        description: currentUser.value.description,
      }
      if(document.getElementById("img_input").files[0]){
        formData.profile_photo = document.getElementById("img_input").files[0]
      }
      if(currentUser.value.gender){
        formData.gender = currentUser.value.gender
      }
      console.log(formData)
      store.dispatch('postUser', formData)
      
        .then(() => {
          localStorage.setItem('username', currentUser.value.username)
          
          router.push('/index')
        })
        .catch((error) => {
          console.error('Post işlemi sırasında bir hata oluştu:', error)
        })
    }

    const hadleFileEdit = () => {
      const imgInput = document.getElementById('img_input')
      imgInput.click()
    }

  

    return {
      currentUser,
      handleSettingSubmit,
      hadleFileEdit,
    }
  }
}
</script>

<style scoped>
.img-container {
  width: 10rem;
  cursor: pointer;
  position: relative;
  font-size: 1.2rem;
  font-family: Arial, Helvetica, sans-serif;
}
.img-modal {
  width: 100%;
  height: 100%;
  color: #fff;
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  transition: all 0.5s;

  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
}
.img-container:hover .img-modal {
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;
}
.form-select {
  background-color: initial;
}
</style>
