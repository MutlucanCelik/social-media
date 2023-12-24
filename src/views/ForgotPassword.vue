<template>
  <main>
    <div class="container">
      <div class="row justify-content-center align-items-center vh-100 py-5">
        <div class="col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
          <div class="card card-body rounded-3 text-center p-4 p-sm-5">
            <h1 class="forgot-password-text mb-2">Parolanızı mı unuttunuz?</h1>
            <p>Hesabınızla ilişkili olan e-posta adresini girin.</p>
            <form class="mt-3">
              <div class="mb-3">
                <div class="input-group input-group-lg">
                  <input
                    class="form-control fakepassword"
                    type="mail"
                    id="psw-input"
                    placeholder="E-posta girin"
                  />
                </div>
              </div>
             
              <div class="d-grid">
                <button type="submit" class="btn btn-lg btn-primary">Şifreyi sıfırla</button>
              </div>
              <div class="my-3">
                <p>Tekrar <RouterLink :to="{ name: 'Register' }">Kayıt Ol</RouterLink></p>
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
  name: 'ForgotPassword',

  components: {
    CopyRight
  },

 
}
</script>

<style scoped>
.forgot-password-text {
  font-size: 1.5rem;
}
</style>
