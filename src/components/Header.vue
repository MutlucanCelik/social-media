<template>
  <header class="navbar-light fixed-top header-static bg-mode">
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <RouterLink class="navbar-brand" :to="{ name: 'Index' }">
          <div class="logo-container">
            <i class="fa-solid fa-house"></i>
          </div>
          
        </RouterLink>

        <button
          class="navbar-toggler ms-auto icon-md btn btn-light p-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-animation">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="nav mt-3 mt-lg-0 flex-nowrap align-items-center px-4 px-lg-0">
            <div class="nav-item w-100">
              <form class="rounded position-relative">
                <input
                  class="form-control ps-5 bg-light"
                  type="search"
                  placeholder="Ara..."
                  aria-label="Search"
                />
                <button
                  class="btn bg-transparent px-2 py-0 position-absolute top-50 start-0 translate-middle-y"
                  type="submit"
                >
                  <i class="bi bi-search fs-5"> </i>
                </button>
              </form>
            </div>
          </div>
        </div>

        <ul class="nav flex-nowrap align-items-center ms-sm-3 list-unstyled">
          <li class="nav-item ms-2">
            <RouterLink class="nav-link icon-md btn btn-light p-0" :to="{ name: 'Message' }">
              <i class="bi bi-chat-left-text-fill fs-6"> </i>
            </RouterLink>
          </li>
          <li class="nav-item ms-2">
            <RouterLink class="nav-link icon-md btn btn-light p-0" :to="{ name: 'Settings' }">
              <i class="bi bi-gear-fill fs-6"> </i>
            </RouterLink>
          </li>
          <li class="nav-item dropdown ms-2">
            <a
              class="nav-link icon-md btn btn-light p-0"
              href="#"
              id="notifDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              data-bs-auto-close="outside"
            >
              <span class="badge-notif animation-blink"></span>
              <i class="bi bi-bell-fill fs-6"> </i>
            </a>
            <div
              class="dropdown-menu dropdown-animation dropdown-menu-end dropdown-menu-size-md p-0 shadow-lg border-0"
              aria-labelledby="notifDropdown"
            >
              <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center">
                  <h6 class="m-0">
                    Bildirimler
                    <span class="badge bg-danger bg-opacity-10 text-danger ms-2">4 Yeni</span>
                  </h6>
                  <a class="small" href="#">Hepsini temizle</a>
                </div>
                <div class="card-body p-0">
                  <ul class="list-group list-group-flush list-unstyled p-2">
                    <li>
                      <div
                        class="list-group-item list-group-item-action rounded badge-unread d-flex border-0 mb-1 p-3"
                      >
                        <div class="avatar text-center d-none d-sm-inline-block">
                          <img
                            class="avatar-img rounded-circle"
                            src="../assets/images/avatar/01.jpg"
                            alt=""
                          />
                        </div>
                        <div class="ms-sm-3">
                          <div class="d-flex">
                            <p class="small mb-2">
                              <b>Mutlucan Çelik</b> sana bir arkadaşlık isteği gönderdi.
                            </p>
                          </div>
                          <div class="d-flex">
                            <button class="btn btn-sm py-1 btn-primary me-2">Kabul et</button>
                            <button class="btn btn-sm py-1 btn-danger-soft">Sil</button>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="card-footer text-center">
                  <a href="#" class="btn btn-sm btn-primary-soft"
                    >Tüm gelen arkadaşlık isteklerini görün.</a
                  >
                </div>
              </div>
            </div>
          </li>

          <li class="nav-item ms-2 dropdown">
            <a
              class="nav-link btn icon-md p-0"
              href="#"
              id="profileDropdown"
              role="button"
              data-bs-auto-close="outside"
              data-bs-display="static"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img class="avatar-img rounded-2" src="../assets/images/avatar/07.jpg" alt="" />
            </a>
            <ul
              class="dropdown-menu dropdown-animation dropdown-menu-end pt-3 pb-0 small me-md-n3"
              aria-labelledby="profileDropdown"
            >
              <li class="px-3">
                <div class="d-flex align-items-center position-relative">
                  <div class="avatar me-3">
                    <img
                      class="avatar-img rounded-circle"
                      src="../assets/images/avatar/07.jpg"
                      alt="avatar"
                    />
                  </div>
                  <div>
                    <a class="h6 stretched-link" href="#">Mutlucan Çelik</a>
                    <p class="small m-0">Frontend Web Developer</p>
                  </div>
                </div>
                <RouterLink
                  :to="{ name: 'Profil' }"
                  class="dropdown-item btn btn-primary-soft btn-sm my-2 text-center"
                  href="my-profile.html"
                  >Profili görüntüle</RouterLink
                >
              </li>

              <li>
                <RouterLink class="dropdown-item" :to="{name:'Settings'}"
                  ><i class="bi bi-gear fa-fw me-2"></i>Ayarlar</RouterLink
                >
              </li>
              <li class="dropdown-divider"></li>
              <li>
                <RouterLink :to="{ name: 'Login' }" class="dropdown-item bg-danger-soft-hover"
                  ><i class="bi bi-power fa-fw me-2"></i>Çıkış</RouterLink
                >
              </li>
              <li><hr class="dropdown-divider mb-0" /></li>
              <!--Temayı sihah vesaire yapma olayları -->
              <!--<li>
                <div
                  class="modeswitch-item theme-icon-active d-flex justify-content-center gap-3 align-items-center p-2 pb-0"
                >
                  <span>Mode:</span>
                  <button
                    type="button"
                    class="btn btn-modeswitch nav-link text-primary-hover mb-0"
                    data-bs-theme-value="light"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Light"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-sun fa-fw mode-switch"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
                      />
                      <use href="#"></use>
                    </svg>
                  </button>
                  <button
                    type="button"
                    class="btn btn-modeswitch nav-link text-primary-hover mb-0"
                    data-bs-theme-value="dark"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Dark"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-moon-stars fa-fw mode-switch"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"
                      />
                      <path
                        d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"
                      />
                      <use href="#"></use>
                    </svg>
                  </button>
                  <button
                    type="button"
                    class="btn btn-modeswitch nav-link text-primary-hover mb-0 active"
                    data-bs-theme-value="auto"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Auto"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-circle-half fa-fw mode-switch"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
                      <use href="#"></use>
                    </svg>
                  </button>
                </div>
              </li> -->
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {}
</script>

<style>
.logo-container{
  background-color: #0E6EEC;
  color: #fff;
  width: 37px;
  height: 37px;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
}
.logo-container svg{
  font-size: 1rem;
}
</style>
