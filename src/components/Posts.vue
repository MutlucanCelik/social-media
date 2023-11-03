<template>
  <div class="d-flex flex-column gap-3">
    <div class="card">
      <div class="card-header border-0 pb-0">
        <div class="d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center">
            <div class="avatar avatar-story me-2">
              <a href="#!">
                <img
                  class="avatar-img rounded-circle"
                  src="../assets/images/avatar/04.jpg"
                  alt=""
                />
              </a>
            </div>
            <div>
              <div class="nav nav-divider">
                <h6 class="nav-item card-title mb-0"><a href="#!">Danyalcan Kayrak </a></h6>
                <span class="nav-item small"> 2hr</span>
              </div>
              <p class="mb-0 small">Backend Developer</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card-body">
        <p>
          Proje alanında lisansüstü sertifika kursunu tamamladığımı paylaşmaktan heyecan duyuyorum
          Başkanın onur listesiyle yönetim.
        </p>
        <img class="card-img" src="../assets/images/post/3by2/01.jpg" alt="Post" />
        <ul class="nav nav-stack py-3 small">
          <li class="nav-item">
            <a
              class="nav-link active"
              href="#!"
              data-bs-container="body"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-html="true"
              data-bs-custom-class="tooltip-text-start"
              data-bs-title="Frances Guerrero<br> Lori Stevens<br> Billy Vasquez<br> Judy Nguyen<br> Larry Lawson<br> Amanda Reed<br> Louis Crawford"
            >
              <i class="bi bi-hand-thumbs-up-fill pe-1"></i>Beğenildi (56)</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#!"> <i class="bi bi-chat-fill pe-1"></i>Yorumlar (12)</a>
          </li>
        </ul>
        <div class="d-flex mb-3">
          <div class="avatar avatar-xs me-2">
            <a href="#!">
              <img class="avatar-img rounded-circle" src="../assets/images/avatar/12.jpg" alt="" />
            </a>
          </div>
          <form class="nav nav-item w-100 position-relative">
            <textarea
              data-autoresize
              class="form-control pe-5 bg-light"
              rows="1"
              placeholder="Yorum ekle..."
            ></textarea>
            <button
              class="nav-link bg-transparent px-3 position-absolute top-50 end-0 translate-middle-y border-0"
              type="submit"
            >
              <i class="bi bi-send-fill"> </i>
            </button>
          </form>
        </div>
        <ul class="comment-wrap list-unstyled">
          <li class="comment-item">
            <div class="d-flex position-relative">
              <div class="avatar avatar-xs">
                <a href="#!"
                  ><img
                    class="avatar-img rounded-circle"
                    src="../assets/images/avatar/05.jpg"
                    alt=""
                /></a>
              </div>
              <div class="ms-2">
                <div class="bg-light rounded-start-top-0 p-3 rounded">
                  <div class="d-flex justify-content-between">
                    <h6 class="mb-1"><a href="#!"> Büşra Gök </a></h6>
                    <small class="ms-2">5hr</small>
                  </div>
                  <p class="small mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam incidunt
                    aliquam animi enim soluta laboriosam.
                  </p>
                </div>
                <ul class="nav nav-divider py-2 small">
                  <li class="nav-item">
                    <a class="nav-link" href="#!"> Beğen (3)</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#!"> Cevap ver</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#!"> 5 Yanıtı görüntüle</a>
                  </li>
                </ul>
              </div>
            </div>
            <ul class="comment-item-nested list-unstyled">
              <li class="comment-item">
                <div class="d-flex">
                  <div class="avatar avatar-xs">
                    <a href="#!"
                      ><img
                        class="avatar-img rounded-circle"
                        src="../assets/images/avatar/06.jpg"
                        alt=""
                    /></a>
                  </div>
                  <div class="ms-2">
                    <div class="bg-light p-3 rounded">
                      <div class="d-flex justify-content-between">
                        <h6 class="mb-1"><a href="#!"> Ahmet Polat </a></h6>
                        <small class="ms-2">2hr</small>
                      </div>
                      <p class="small mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque animi
                        possimus a molestiae reprehenderit officia.
                      </p>
                    </div>
                    <ul class="nav nav-divider py-2 small">
                      <li class="nav-item">
                        <a class="nav-link" href="#!"> Beğen (5)</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#!"> Cevap ver</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="comment-item">
                <div class="d-flex">
                  <div class="avatar avatar-story avatar-xs">
                    <a href="#!"
                      ><img
                        class="avatar-img rounded-circle"
                        src="../assets/images/avatar/07.jpg"
                        alt=""
                    /></a>
                  </div>
                  <div class="ms-2">
                    <div class="bg-light p-3 rounded">
                      <div class="d-flex justify-content-between">
                        <h6 class="mb-1"><a href="#!"> Yağmur Sayhan </a></h6>
                        <small class="ms-2">15min</small>
                      </div>
                      <p class="small mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, earum?
                      </p>
                    </div>
                    <ul class="nav nav-divider py-2 small">
                      <li class="nav-item">
                        <a class="nav-link" href="#!"> Beğen</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#!"> Cevap ver</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
            <a
              href="#!"
              role="button"
              class="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center mb-3 ms-5"
              data-bs-toggle="button"
              aria-pressed="true"
            >
            </a>
          </li>
          <li class="comment-item">
            <div class="d-flex">
              <div class="avatar avatar-xs">
                <a href="#!"
                  ><img
                    class="avatar-img rounded-circle"
                    src="../assets/images/avatar/05.jpg"
                    alt=""
                /></a>
              </div>
              <div class="ms-2">
                <div class="bg-light p-3 rounded">
                  <div class="d-flex justify-content-between">
                    <h6 class="mb-1"><a href="#!"> Büşra Gök </a></h6>
                    <small class="ms-2">4min</small>
                  </div>
                  <p class="small mb-0">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum numquam, optio
                    qui esse quod vitae?
                  </p>
                </div>
                <ul class="nav nav-divider pt-2 small">
                  <li class="nav-item">
                    <a class="nav-link" href="#!"> Beğen (1)</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#!"> Cevap ver</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#!"> 6 Yanıtı görüntüle</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="card">
      <div class="card-header border-0 pb-0">
        <div class="d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center">
            <div class="avatar me-2">
              <a href="#">
                <img class="avatar-img rounded-circle" src="../assets/images/logo/13.svg" alt="" />
              </a>
            </div>
            <div>
              <h6 class="card-title mb-0"><a href="#!"> Apple Eğitimi </a></h6>
              <p class="mb-0 small">9 Kasım 23:29</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card-body pb-0">
        <p>
          Bu yıl sınıfta nasıl zaman kazanabileceğinizi öğrenin. iPad ve Mac'te yeni beceriler
          öğrenirken takdir kazanın. İlk Apple Öğretmen rozetinizi bugün tanımaya başlayın!
        </p>
      </div>
      <div class="card-footer">
        <ul class="nav nav-stack small">
          <li class="nav-item">
            <a
              class="nav-link active"
              href="#!"
              data-bs-container="body"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-html="true"
              data-bs-custom-class="tooltip-text-start"
              data-bs-title="Frances Guerrero<br> Lori Stevens<br> Billy Vasquez<br> Judy Nguyen<br> Larry Lawson<br> Amanda Reed<br> Louis Crawford"
              ><i class="bi bi-hand-thumbs-up-fill pe-1"></i>Beğenildi (56)</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#!"><i class="bi bi-chat-fill pe-1"></i>Yorumlar (12)</a>
          </li>
        </ul>
      </div>
    </div>

    <a
      href="#!"
      role="button"
      class="btn btn-loader btn-primary-soft"
      data-bs-toggle="button"
      aria-pressed="true"
    >
      <span class="load-text"> Daha fazla göster </span>
      <div class="load-icon">
        <div class="spinner-grow spinner-grow-sm" role="status">
          <span class="visually-hidden">Yükleniyor...</span>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
