<template>
  <fragment>
    <Header />
    <main>
      <div class="container">
        <div class="row">
          <div class="col-sm-6 vstack gap-4">
            <div class="tab-content py-0 mb-0">
              <div class="tab-pane show active fade" id="nav-setting-tab-1">
                <div class="card mb-4 position-relative">
                  <Toast />
                  <div class="card-header border-0 pb-0">
                    <h1 class="h5 card-title">Kullanıcı Bilgileri</h1>
                  </div>
                  <div class="d-flex justify-content-center align-items-center">
                    <div @click="handleFileEdit" class="img-container">
                      <img
                        id="modal_image"
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
                          @change="handleFileChange"
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
                            <option v-if="!currentUser.gender"  value="" :selected="currentUser.gender === ''">Cinsiyet seçin</option>
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
                          readonly
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
                    <form @submit.prevent="handeleResetPassword" class="row g-3">
                      <div class="col-12">
                        <label class="form-label">Email</label>
                        <input type="mail" class="form-control" v-model="currentUser.email" name="email" readonly/>
                      </div>
                      <div class="col-12">
                        <label class="form-label">Şifre</label>
                        <div class="input-group">
                          <input v-model="password" class="form-control fakepassword" type="password" id="psw-input" name="password"/>
                          <span @click="handleHidePassword('psw-input','icon')" class="input-group-text p-0">
                            <i
                            id="icon"
                              class="fakepasswordicon fa-solid fa-eye-slash cursor-pointer p-2 w-40px"
                            ></i>
                          </span>
                        </div>
                    
                      </div>
                      <div class="col-12">
                        <label class="form-label">Şifre kontrol</label>
                        <div class="input-group">
                          <input v-model="password_confirmation" id="psw-input2" type="password" class="form-control" placeholder=""  name="password_confirmation" />
                          <span @click="handleHidePassword('psw-input2','icon2')" class="input-group-text p-0">
                            <i
                            id="icon2"
                              class="fakepasswordicon fa-solid fa-eye-slash cursor-pointer p-2 w-40px"
                            ></i>
                          </span>
                        </div>
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
import Toast from '@/components/Toast.vue'
import moment from 'moment'
import { useStore } from 'vuex'
import { onMounted, ref } from 'vue'
import avatar from '@/assets/images/avatar/user.jpeg'
import { useRouter } from 'vue-router'
export default {
  name: 'Settings',

  components: {
    Toast,
    Header,
    CopyRight
    
  },

  setup() {
    const store = useStore() // Vuex store'u alın
    const router = useRouter()
    let currentUser = ref({})
    let password = ref("");
    let password_confirmation = ref("");

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
    const handleFileChange = (event) => {
      const selectedFile = event.target.files[0]; // Seçilen dosya
      const reader = new FileReader();

      reader.onload = () => {
        const previewImage = document.getElementById('modal_image'); // ID ile img etiketini seçin
        if (previewImage) {
          previewImage.src = reader.result; // Seçilen resmin URL'sini img etiketine ata
        }
      };

      if (selectedFile) {
        reader.readAsDataURL(selectedFile); // Dosya URL'sini okur
      }
    }

    const handleSettingSubmit = () => {
        const token = "Bearer " + localStorage.getItem("tokenKey");
        let data = {
          first_name: currentUser.value.first_name,
          last_name: currentUser.value.last_name,
          username: currentUser.value.username,
          date_of_birth: currentUser.value.date_of_birth,
          title: currentUser.value.title,
          description: currentUser.value.description,
        }
        if(document.getElementById("img_input").files[0]){
        data.profile_photo = document.getElementById("img_input").files[0]
        }
        if(currentUser.value.gender){
          data.gender = currentUser.value.gender
        }
        const formData = new FormData();
          for (const key in data) {
            formData.append(key, data[key]);
          }
        fetch(`http://127.0.0.1:8000/api/profile/update`, {
            method: "POST",
            headers: {
              "Authorization": token,
            },
            body: formData,
          })
          .then((response) => {
            console.log(response)
            if (response.ok) {
              localStorage.setItem('username', currentUser.value.username)
              $('#toast').toast('show')
              router.push("/settings")
              return response.blob();
            }else{
              console.log("HATA : Güncelleme yapılamadı")
            }
            
          }).then(async () => {
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
          .catch((error) => {
            console.error('Postta Bir sorun oluştu:', error);
          });
        };
      
    
    const handeleResetPassword = () => {
      let formData = {
        email : currentUser.value.email,
        password : password.value,
        password_confirmation : password_confirmation.value
      }
      if(formData.password === formData.password_confirmation){
        fetch('http://127.0.0.1:8000/api/auth/reset-password', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "Authorization" : "Bearer " + localStorage.getItem("tokenKey"),
          },
          body: JSON.stringify(formData),
        })
          .then(response => {
            if (response.ok) {
              password.value = ""
              password_confirmation.value = ""
              return response.json();
              
            }else{
              throw new Error('Network response was not ok');
            }
            
          })
          .catch(error => {
            console.error('Hata:', error);
          });

      }
    }
    const handleHidePassword = (input,i) => {
      const passwordInput = document.getElementById(input)
      const icon = document.getElementById(i)
      if (passwordInput.type === 'text') {
        passwordInput.type = 'password';  
        icon.classList.add("fa-eye-slash")
        icon.classList.remove("fa-eye")
      } 
      else{
        passwordInput.type = 'text'
        icon.classList.add("fa-eye")
        icon.classList.remove("fa-eye-slash")
      }
    }
    const handleFileEdit = () => {
      const imgInput = document.getElementById('img_input')
      imgInput.click()
    }

  

    return {
      currentUser,
      handleSettingSubmit,
      handleFileEdit,
      handleFileChange,
      handeleResetPassword,
      password,
      password_confirmation,
      handleHidePassword
    }
  }
}
</script>

<style scoped>
.img-container {
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  font-size: 1.2rem;
  font-family: Arial, Helvetica, sans-serif;

}
.img-container img{
  width: 100%;
  height: 100%;
  border-radius: 50%;
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
