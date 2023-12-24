<template>
  <main class="position-relative" style="height: 100vh">
    <div class="container">
      <div class="row justify-content-center align-items-center vh-100 py-5">
        <div class="col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
          <div class="card card-body rounded-3 p-4 px-sm-5 pb-sm-5">
            <div class="text-center">
              <h1 class="mb-2 register-title">Kayıt ol</h1>
              <span class="d-block"
                >Zaten hesabınız var mı ?
                <RouterLink :to="{ name: 'Login' }">Oturum aç</RouterLink></span
              >
            </div>

            <form class="mt-4 row" action="" method="">
              <div class="col-12">
                <div class="mb-3 input-group-lg">
                  <input
                    v-model="username"
                    type="text"
                    class="form-control"
                    placeholder="Kullanıcı adı"
                  />
                </div>
              </div>
              <div class="col-6 mb-3">
                <div class="input-group-lg">
                  <input v-model="first_name" type="text" class="form-control" placeholder="Ad" />
                </div>
              </div>
              <div class="col-6 mb-3">
                <div class="input-group-lg">
                  <input v-model="last_name" type="text" class="form-control" placeholder="Soyad" />
                </div>
              </div>
              <div class="col-12">
                <div class="mb-3 input-group-lg">
                  <input v-model="email" type="email" class="form-control" placeholder="E-mail" />
                </div>
              </div>
              <div class="col-12">
                <div class="mb-3 input-group-lg">
                  <input
                    v-model="date_of_birth"
                    type="date"
                    class="form-control"
                    placeholder="E-mail"
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="mb-3 position-relative">
                  <div class="input-group input-group-lg">
                    <input
                      class="form-control fakepassword"
                      type="password"
                      v-model="password"
                      id="psw-input"
                      placeholder="Şifre"
                    />
                    <span @click="handleHidePassword('psw-input','icon')" class="input-group-text p-0">
                      <i id="icon"
                        class="fakepasswordicon fa-solid fa-eye-slash cursor-pointer p-2 w-40px"
                      ></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="mb-3 input-group input-group-lg">
                  <input
                    id="psw-input2"
                    v-model="repassword"
                    class="form-control"
                    type="password"
                    placeholder="Şifreyi onay"
                  />
                  <span @click="handleHidePassword('psw-input2','icon2')" class="input-group-text p-0">
                      <i id="icon2"
                        class="fakepasswordicon fa-solid fa-eye-slash cursor-pointer p-2 w-40px"
                      ></i>
                    </span>
                </div>
              </div>
              <div class="d-grid mb-2">
                <a @click="handleRegister" class="btn btn-lg btn-primary">Kayıt ol</a>
              </div>
              <CopyRight />
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import CopyRight from '@/components/CopyRight.vue'

export default {
  name: 'Register',

  components: {
    CopyRight
  },

  setup() {
    const username = ref('')
    const first_name = ref('')
    const last_name = ref('')
    const email = ref('')
    const date_of_birth = ref('')
    const password = ref('')
    const repassword = ref('')
    const router = useRouter()

    const handleRegister = () => {
      if (password.value === repassword.value) {
        sendRegisterRequest()
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

    const sendRegisterRequest = () => {
      fetch('http://127.0.0.1:8000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username.value,
          email: email.value,
          first_name: first_name.value,
          last_name: last_name.value,
          date_of_birth: date_of_birth.value,
          password: password.value
        })
      })
        .then((res) => {
          if(res.ok){
            router.push('/')
            return res.json()
          }else{
            console.log("kayıt oluşturulmadı")
          }
          
        })
        .catch((err) => console.log(err))
    }

    return {
      username,
      email,
      first_name,
      last_name,
      date_of_birth,
      password,
      repassword,
      handleRegister,
      handleHidePassword
    }
  }
}
</script>

<style scoped>
.col-md-8 {
  width: 55%;
}
.register-title {
  font-size: 3rem;
}
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
