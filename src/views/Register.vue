<template>
  <main>
    <div class="container">
      <div class="row justify-content-center align-items-center vh-100 py-5">
        <div class="col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
          <div class="card card-body rounded-3 p-4 p-sm-5">
            <div class="text-center">
              <h1 class="mb-2">Kayıt ol</h1>
              <span class="d-block"
                >Zaten hesabınız var mı ?
                <RouterLink :to="{ name: 'Login' }">Oturum aç</RouterLink></span
              >
            </div>

            <form class="mt-4" action="" method="">
              <div class="mb-3 input-group-lg">
                <input v-model="username" type="text" class="form-control" placeholder="Kullanıcı adı" />
              </div>
              <div class="mb-3 input-group-lg">
                <input v-model="email" type="email" class="form-control" placeholder="E-mail" />
              </div>
              <div class="mb-3 input-group-lg">
                <input v-model="date_of_birth" type="date" class="form-control" placeholder="E-mail" />
              </div>
              <div class="mb-3 position-relative">
                <div class="input-group input-group-lg">
                  <input
                    class="form-control fakepassword"
                    type="password"
                    v-model="password"
                    id="psw-input"
                    placeholder="Şifre"
                  />
                  <span class="input-group-text p-0">
                    <i class="fakepasswordicon fa-solid fa-eye-slash cursor-pointer p-2 w-40px"></i>
                  </span>
                </div>
              </div>
              <div class="mb-3 input-group-lg">
                <input v-model="repassword" class="form-control" type="password" placeholder="Şifreyi onay" />
              </div>
              <div class="d-grid">
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
import CopyRight from '@/components/CopyRight.vue'
export default {
  name: 'Register',

  data(){
    username:'';
    email:'';
    date_of_birth:'';
    gender:'';
    password:'';
    repassword:'';
  },

  components: {
    CopyRight
  },

  methods: {
    handleRegister(){
      if(this.password == this.repassword){
        console.log('Şifreler doğru')
        this.sendRegisterRequest();
      }
    },

    sendRegisterRequest(){
      console.log("Doğru");
      fetch("http://localhost:8000/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: this.username,
                email: this.email,
                gender: 'Male',
                date_of_birth: '2000/12/12',
                password: this.password,
            }),
        })
            .then((res) => res.json())
            .then((result) => {
                localStorage.setItem("tokenKey", result.token);
                console.log("başarıyla kayıt yaptın!");
                this.$router.push('/');
            }).catch((err) => console.log(err))
    }
    },
}
</script>

<style scoped></style>
