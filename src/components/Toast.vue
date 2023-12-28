<template>
    <div id="toast" class="toast ms-auto" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <i data-v-b6033467="" class="bi bi-patch-check-fill text-success small me-2"></i>
        <strong class="mr-auto">Kullanıcı bilgileriniz güncellendi.</strong>
        <button type="button" class="btn ml-2 mb-1 close ms-auto" data-dismiss="toast" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
     
    </div>
</template>

<script>
export default {

    setup(){

        

        
    }
}   
</script>

<style scoped>
   .toast{
    position: fixed;
    top:62px;
    right: 10px;
    z-index: 99999;
   }

</style>