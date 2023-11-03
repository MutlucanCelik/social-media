<template>
  <div class="card">
    <div class="card-header d-sm-flex align-items-center justify-content-between border-0 pb-0">
      <h5 class="card-title">Fotoğraflar</h5>
    </div>
    <div class="card-body">
      <div class="row g-3">
        <div class="col-sm-6 col-md-4 col-lg-3">
          <div
            class="border border-2 py-5 border-dashed h-100 rounded text-center d-flex align-items-center justify-content-center position-relative"
          >
            <a class="stretched-link" href="#!">
              <i class="fa-solid fa-camera-retro fs-1"></i>
              <h6 class="mt-2">Fotoğraf ekle</h6>
            </a>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-3">
          <a
            href="@/assets/images/albums/01.jpg"
            data-gallery="image-popup"
            data-glightbox="description: .custom-desc2; descPosition: left;"
          >
            <img class="rounded img-fluid" src="@/assets/images/albums/01.jpg" alt="" />
          </a>
          <ul class="nav nav-stack py-2 small">
            <li class="nav-item">
              <a class="nav-link" href="#!">
                <i class="bi bi-heart-fill text-danger pe-1"></i>22k
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#!"> <i class="bi bi-chat-left-text-fill pe-1"></i>3k </a>
            </li>
          </ul>
          <div class="glightbox-desc custom-desc2">
            <div class="d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center">
                <div class="avatar me-2">
                  <img
                    class="avatar-img rounded-circle"
                    src="@/assets/images/avatar/04.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <div class="nav nav-divider">
                    <h6 class="nav-item card-title mb-0">Lori Ferguson</h6>
                    <span class="nav-item small"> 2hr</span>
                  </div>
                  <p class="mb-0 small">Web Developer at Webestica</p>
                </div>
              </div>
              <div class="dropdown">
                <a
                  href="#"
                  class="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                  id="cardFeedAction"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="bi bi-three-dots"></i>
                </a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardFeedAction">
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-bookmark fa-fw pe-2"></i>Save post</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-person-x fa-fw pe-2"></i>Unfollow lori ferguson
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-x-circle fa-fw pe-2"></i>Hide post</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-slash-circle fa-fw pe-2"></i>Block</a
                    >
                  </li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-flag fa-fw pe-2"></i>Report post</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <p class="mt-3 mb-0">
              I'm so privileged to be involved in the @bootstrap hiring process!
              <a href="#">#internship #inclusivebusiness</a> <a href="#">#internship</a>
              <a href="#"> #hiring</a> <a href="#">#apply</a>
            </p>
            <ul class="nav nav-stack py-3 small">
              <li class="nav-item">
                <a class="nav-link active" href="#!">
                  <i class="bi bi-hand-thumbs-up-fill pe-1"></i>Liked (56)</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#!"> <i class="bi bi-chat-fill pe-1"></i>Comments (12)</a>
              </li>
              <li class="nav-item dropdown ms-auto">
                <a
                  class="nav-link mb-0"
                  href="#"
                  id="cardShareAction"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="bi bi-reply-fill fa-flip-horizontal pe-1"></i>Share (3)
                </a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction">
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-envelope fa-fw pe-2"></i>Send via Direct Message</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-bookmark-check fa-fw pe-2"></i>Bookmark
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-link fa-fw pe-2"></i>Copy link to post</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-share fa-fw pe-2"></i>Share post via …</a
                    >
                  </li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-pencil-square fa-fw pe-2"></i>Share to News Feed</a
                    >
                  </li>
                </ul>
              </li>
            </ul>
            <div class="d-flex mb-3">
              <div class="avatar avatar-xs me-2">
                <img class="avatar-img rounded-circle" src="@/assets/images/avatar/04.jpg" alt="" />
              </div>
              <form class="position-relative w-100">
                <textarea
                  class="one form-control pe-4 bg-light"
                  data-autoresize
                  rows="1"
                  placeholder="Add a comment..."
                ></textarea>
                <div class="position-absolute top-0 end-0">
                  <button class="btn" type="button">🙂</button>
                </div>
              </form>
            </div>
            <ul class="comment-wrap list-unstyled">
              <li class="comment-item">
                <div class="d-flex">
                  <div class="avatar avatar-xs">
                    <img
                      class="avatar-img rounded-circle"
                      src="@/assets/images/avatar/05.jpg"
                      alt=""
                    />
                  </div>
                  <div class="ms-2">
                    <div class="bg-light rounded-start-top-0 p-3 rounded">
                      <div class="d-flex justify-content-center">
                        <div class="me-2">
                          <h6 class="mb-1"><a href="#!"> Frances Guerrero </a></h6>
                          <p class="small mb-0">
                            Removed demands expense account in outward tedious do.
                          </p>
                        </div>
                        <small>5hr</small>
                      </div>
                    </div>
                    <ul class="nav nav-divider py-2 small">
                      <li class="nav-item">
                        <a class="nav-link" href="#!"> Like (3)</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#!"> Reply</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#!"> View 5 replies</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-sm-6 col-md-4 col-lg-3 position-relative">
          <a
            href="@/assets/images/albums/02.jpg"
            data-gallery="image-popup"
            data-glightbox="description: .custom-desc2; descPosition: left;"
          >
            <img class="rounded img-fluid" src="@/assets/images/albums/02.jpg" alt="" />
          </a>
          <ul class="nav nav-stack py-2 small">
            <li class="nav-item">
              <a class="nav-link" href="#!">
                <i class="bi bi-heart-fill text-danger pe-1"></i>32k
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#!"> <i class="bi bi-chat-left-text-fill pe-1"></i>12k </a>
            </li>
          </ul>
          <div class="glightbox-desc custom-desc2">
            <div class="d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center">
                <div class="avatar me-2">
                  <img
                    class="avatar-img rounded-circle"
                    src="@/assets/images/avatar/04.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <div class="nav nav-divider">
                    <h6 class="nav-item card-title mb-0">Lori Ferguson</h6>
                    <span class="nav-item small"> 2hr</span>
                  </div>
                  <p class="mb-0 small">Web Developer at Webestica</p>
                </div>
              </div>
              <div class="dropdown">
                <a
                  href="#"
                  class="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                  id="cardFeedAction2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="bi bi-three-dots"></i>
                </a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardFeedAction2">
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-bookmark fa-fw pe-2"></i>Save post</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-person-x fa-fw pe-2"></i>Unfollow lori ferguson
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-x-circle fa-fw pe-2"></i>Hide post</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-slash-circle fa-fw pe-2"></i>Block</a
                    >
                  </li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-flag fa-fw pe-2"></i>Report post</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <p class="mt-3 mb-0">
              I'm so privileged to be involved in the @bootstrap hiring process!
              <a href="#">#internship #inclusivebusiness</a> <a href="#">#internship</a>
              <a href="#"> #hiring</a> <a href="#">#apply</a>
            </p>
            <ul class="nav nav-stack py-3 small">
              <li class="nav-item">
                <a class="nav-link active" href="#!">
                  <i class="bi bi-hand-thumbs-up-fill pe-1"></i>Liked (56)</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#!"> <i class="bi bi-chat-fill pe-1"></i>Comments (12)</a>
              </li>
              <li class="nav-item dropdown ms-auto">
                <a
                  class="nav-link mb-0"
                  href="#"
                  id="cardShareAction2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="bi bi-reply-fill fa-flip-horizontal pe-1"></i>Share (3)
                </a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction2">
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-envelope fa-fw pe-2"></i>Send via Direct Message</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-bookmark-check fa-fw pe-2"></i>Bookmark
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-link fa-fw pe-2"></i>Copy link to post</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-share fa-fw pe-2"></i>Share post via …</a
                    >
                  </li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-pencil-square fa-fw pe-2"></i>Share to News Feed</a
                    >
                  </li>
                </ul>
              </li>
            </ul>
            <div class="d-flex mb-3">
              <div class="avatar avatar-xs me-2">
                <img class="avatar-img rounded-circle" src="@/assets/images/avatar/04.jpg" alt="" />
              </div>
              <form class="position-relative w-100">
                <textarea
                  class="form-control pe-4 bg-light"
                  rows="1"
                  placeholder="Add a comment..."
                ></textarea>
              </form>
            </div>
            <ul class="comment-wrap list-unstyled">
              <li class="comment-item">
                <div class="d-flex">
                  <div class="avatar avatar-xs">
                    <img
                      class="avatar-img rounded-circle"
                      src="@/assets/images/avatar/05.jpg"
                      alt=""
                    />
                  </div>
                  <div class="ms-2">
                    <div class="bg-light rounded-start-top-0 p-3 rounded">
                      <div class="d-flex justify-content-center">
                        <div class="me-2">
                          <h6 class="mb-1"><a href="#!"> Frances Guerrero </a></h6>
                          <p class="small mb-0">
                            Removed demands expense account in outward tedious do.
                          </p>
                        </div>
                        <small>5hr</small>
                      </div>
                    </div>
                    <ul class="nav nav-divider py-2 small">
                      <li class="nav-item">
                        <a class="nav-link" href="#!"> Like (3)</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#!"> Reply</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#!"> View 5 replies</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-sm-6 col-md-4 col-lg-3">
          <a
            href="@/assets/images/albums/03.jpg"
            data-gallery="image-popup"
            data-glightbox="description: .custom-desc2; descPosition: left;"
          >
            <img class="rounded img-fluid" src="@/assets/images/albums/03.jpg" alt="" />
          </a>
          <ul class="nav nav-stack py-2 small">
            <li class="nav-item">
              <a class="nav-link" href="#!">
                <i class="bi bi-heart-fill text-danger pe-1"></i>21k
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#!"> <i class="bi bi-chat-left-text-fill pe-1"></i>4k </a>
            </li>
          </ul>
          <div class="glightbox-desc custom-desc2">
            <div class="d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center">
                <div class="avatar me-2">
                  <img
                    class="avatar-img rounded-circle"
                    src="@/assets/images/avatar/04.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <div class="nav nav-divider">
                    <h6 class="nav-item card-title mb-0">Lori Ferguson</h6>
                    <span class="nav-item small"> 2hr</span>
                  </div>
                  <p class="mb-0 small">Web Developer at Webestica</p>
                </div>
              </div>
              <div class="dropdown">
                <a
                  href="#"
                  class="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                  id="cardFeedAction3"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="bi bi-three-dots"></i>
                </a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardFeedAction3">
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-bookmark fa-fw pe-2"></i>Save post</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-person-x fa-fw pe-2"></i>Unfollow lori ferguson
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-x-circle fa-fw pe-2"></i>Hide post</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-slash-circle fa-fw pe-2"></i>Block</a
                    >
                  </li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-flag fa-fw pe-2"></i>Report post</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <p class="mt-3 mb-0">
              I'm so privileged to be involved in the @bootstrap hiring process!
              <a href="#">#internship #inclusivebusiness</a> <a href="#">#internship</a>
              <a href="#"> #hiring</a> <a href="#">#apply</a>
            </p>
            <ul class="nav nav-stack py-3 small">
              <li class="nav-item">
                <a class="nav-link active" href="#!">
                  <i class="bi bi-hand-thumbs-up-fill pe-1"></i>Liked (56)</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#!"> <i class="bi bi-chat-fill pe-1"></i>Comments (12)</a>
              </li>
              <li class="nav-item dropdown ms-auto">
                <a
                  class="nav-link mb-0"
                  href="#"
                  id="cardShareAction3"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="bi bi-reply-fill fa-flip-horizontal pe-1"></i>Share (3)
                </a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction3">
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-envelope fa-fw pe-2"></i>Send via Direct Message</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-bookmark-check fa-fw pe-2"></i>Bookmark
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-link fa-fw pe-2"></i>Copy link to post</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-share fa-fw pe-2"></i>Share post via …</a
                    >
                  </li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-pencil-square fa-fw pe-2"></i>Share to News Feed</a
                    >
                  </li>
                </ul>
              </li>
            </ul>
            <div class="d-flex mb-3">
              <div class="avatar avatar-xs me-2">
                <img class="avatar-img rounded-circle" src="@/assets/images/avatar/04.jpg" alt="" />
              </div>
              <form class="position-relative w-100">
                <textarea
                  class="form-control pe-4 bg-light"
                  rows="1"
                  placeholder="Add a comment..."
                ></textarea>
              </form>
            </div>
            <ul class="comment-wrap list-unstyled">
              <li class="comment-item">
                <div class="d-flex">
                  <div class="avatar avatar-xs">
                    <img
                      class="avatar-img rounded-circle"
                      src="@/assets/images/avatar/05.jpg"
                      alt=""
                    />
                  </div>
                  <div class="ms-2">
                    <div class="bg-light rounded-start-top-0 p-3 rounded">
                      <div class="d-flex justify-content-center">
                        <div class="me-2">
                          <h6 class="mb-1"><a href="#!"> Frances Guerrero </a></h6>
                          <p class="small mb-0">
                            Removed demands expense account in outward tedious do.
                          </p>
                        </div>
                        <small>5hr</small>
                      </div>
                    </div>
                    <ul class="nav nav-divider py-2 small">
                      <li class="nav-item">
                        <a class="nav-link" href="#!"> Like (3)</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#!"> Reply</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#!"> View 5 replies</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-sm-6 col-md-4 col-lg-3">
          <a
            href="@/assets/images/albums/04.jpg"
            data-gallery="image-popup"
            data-glightbox="description: .custom-desc2; descPosition: left;"
          >
            <img class="rounded img-fluid" src="@/assets/images/albums/04.jpg" alt="" />
          </a>
          <ul class="nav nav-stack py-2 small">
            <li class="nav-item">
              <a class="nav-link" href="#!">
                <i class="bi bi-heart-fill text-danger pe-1"></i>32k
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#!"> <i class="bi bi-chat-left-text-fill pe-1"></i>16k </a>
            </li>
          </ul>
          <div class="glightbox-desc custom-desc2">
            <div class="d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center">
                <div class="avatar me-2">
                  <img
                    class="avatar-img rounded-circle"
                    src="@/assets/images/avatar/04.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <div class="nav nav-divider">
                    <h6 class="nav-item card-title mb-0">Lori Ferguson</h6>
                    <span class="nav-item small"> 2hr</span>
                  </div>
                  <p class="mb-0 small">Web Developer at Webestica</p>
                </div>
              </div>
              <div class="dropdown">
                <a
                  href="#"
                  class="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                  id="cardFeedAction4"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="bi bi-three-dots"></i>
                </a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardFeedAction4">
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-bookmark fa-fw pe-2"></i>Save post</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-person-x fa-fw pe-2"></i>Unfollow lori ferguson
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-x-circle fa-fw pe-2"></i>Hide post</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-slash-circle fa-fw pe-2"></i>Block</a
                    >
                  </li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-flag fa-fw pe-2"></i>Report post</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <p class="mt-3 mb-0">
              I'm so privileged to be involved in the @bootstrap hiring process!
              <a href="#">#internship #inclusivebusiness</a> <a href="#">#internship</a>
              <a href="#"> #hiring</a> <a href="#">#apply</a>
            </p>
            <ul class="nav nav-stack py-3 small">
              <li class="nav-item">
                <a class="nav-link active" href="#!">
                  <i class="bi bi-hand-thumbs-up-fill pe-1"></i>Liked (56)</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#!"> <i class="bi bi-chat-fill pe-1"></i>Comments (12)</a>
              </li>
              <li class="nav-item dropdown ms-auto">
                <a
                  class="nav-link mb-0"
                  href="#"
                  id="cardShareAction4"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="bi bi-reply-fill fa-flip-horizontal pe-1"></i>Share (3)
                </a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction4">
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-envelope fa-fw pe-2"></i>Send via Direct Message</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-bookmark-check fa-fw pe-2"></i>Bookmark
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-link fa-fw pe-2"></i>Copy link to post</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-share fa-fw pe-2"></i>Share post via …</a
                    >
                  </li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-pencil-square fa-fw pe-2"></i>Share to News Feed</a
                    >
                  </li>
                </ul>
              </li>
            </ul>
            <div class="d-flex mb-3">
              <div class="avatar avatar-xs me-2">
                <img class="avatar-img rounded-circle" src="@/assets/images/avatar/04.jpg" alt="" />
              </div>
              <form class="position-relative w-100">
                <textarea
                  class="form-control pe-4 bg-light"
                  rows="1"
                  placeholder="Add a comment..."
                ></textarea>
              </form>
            </div>
            <ul class="comment-wrap list-unstyled">
              <li class="comment-item">
                <div class="d-flex">
                  <div class="avatar avatar-xs">
                    <img
                      class="avatar-img rounded-circle"
                      src="@/assets/images/avatar/05.jpg"
                      alt=""
                    />
                  </div>
                  <div class="ms-2">
                    <div class="bg-light rounded-start-top-0 p-3 rounded">
                      <div class="d-flex justify-content-center">
                        <div class="me-2">
                          <h6 class="mb-1"><a href="#!"> Frances Guerrero </a></h6>
                          <p class="small mb-0">
                            Removed demands expense account in outward tedious do.
                          </p>
                        </div>
                        <small>5hr</small>
                      </div>
                    </div>
                    <ul class="nav nav-divider py-2 small">
                      <li class="nav-item">
                        <a class="nav-link" href="#!"> Like (3)</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#!"> Reply</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#!"> View 5 replies</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-sm-6 col-md-4 col-lg-3">
          <a
            href="@/assets/images/albums/05.jpg"
            data-gallery="image-popup"
            data-glightbox="description: .custom-desc2; descPosition: left;"
          >
            <img class="rounded img-fluid" src="@/assets/images/albums/05.jpg" alt="" />
          </a>
          <ul class="nav nav-stack py-2 small">
            <li class="nav-item">
              <a class="nav-link" href="#!">
                <i class="bi bi-heart-fill text-danger pe-1"></i>20k
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#!"> <i class="bi bi-chat-left-text-fill pe-1"></i>8k </a>
            </li>
          </ul>
          <div class="glightbox-desc custom-desc2">
            <div class="d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center">
                <div class="avatar me-2">
                  <img
                    class="avatar-img rounded-circle"
                    src="@/assets/images/avatar/04.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <div class="nav nav-divider">
                    <h6 class="nav-item card-title mb-0">Lori Ferguson</h6>
                    <span class="nav-item small"> 2hr</span>
                  </div>
                  <p class="mb-0 small">Web Developer at Webestica</p>
                </div>
              </div>
              <div class="dropdown">
                <a
                  href="#"
                  class="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                  id="cardFeedAction5"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="bi bi-three-dots"></i>
                </a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardFeedAction5">
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-bookmark fa-fw pe-2"></i>Save post</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-person-x fa-fw pe-2"></i>Unfollow lori ferguson
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-x-circle fa-fw pe-2"></i>Hide post</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-slash-circle fa-fw pe-2"></i>Block</a
                    >
                  </li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-flag fa-fw pe-2"></i>Report post</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <p class="mt-3 mb-0">
              I'm so privileged to be involved in the @bootstrap hiring process!
              <a href="#">#internship #inclusivebusiness</a> <a href="#">#internship</a>
              <a href="#"> #hiring</a> <a href="#">#apply</a>
            </p>
            <ul class="nav nav-stack py-3 small">
              <li class="nav-item">
                <a class="nav-link active" href="#!">
                  <i class="bi bi-hand-thumbs-up-fill pe-1"></i>Liked (56)</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#!"> <i class="bi bi-chat-fill pe-1"></i>Comments (12)</a>
              </li>
              <li class="nav-item dropdown ms-auto">
                <a
                  class="nav-link mb-0"
                  href="#"
                  id="cardShareAction5"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="bi bi-reply-fill fa-flip-horizontal pe-1"></i>Share (3)
                </a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction5">
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-envelope fa-fw pe-2"></i>Send via Direct Message</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-bookmark-check fa-fw pe-2"></i>Bookmark
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-link fa-fw pe-2"></i>Copy link to post</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-share fa-fw pe-2"></i>Share post via …</a
                    >
                  </li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-pencil-square fa-fw pe-2"></i>Share to News Feed</a
                    >
                  </li>
                </ul>
              </li>
            </ul>
            <div class="d-flex mb-3">
              <div class="avatar avatar-xs me-2">
                <img class="avatar-img rounded-circle" src="@/assets/images/avatar/04.jpg" alt="" />
              </div>
              <form class="position-relative w-100">
                <textarea
                  class="form-control pe-4 bg-light"
                  rows="1"
                  placeholder="Add a comment..."
                ></textarea>
              </form>
            </div>
            <ul class="comment-wrap list-unstyled">
              <li class="comment-item">
                <div class="d-flex">
                  <div class="avatar avatar-xs">
                    <img
                      class="avatar-img rounded-circle"
                      src="@/assets/images/avatar/05.jpg"
                      alt=""
                    />
                  </div>
                  <div class="ms-2">
                    <div class="bg-light rounded-start-top-0 p-3 rounded">
                      <div class="d-flex justify-content-center">
                        <div class="me-2">
                          <h6 class="mb-1"><a href="#!"> Frances Guerrero </a></h6>
                          <p class="small mb-0">
                            Removed demands expense account in outward tedious do.
                          </p>
                        </div>
                        <small>5hr</small>
                      </div>
                    </div>
                    <ul class="nav nav-divider py-2 small">
                      <li class="nav-item">
                        <a class="nav-link" href="#!"> Like (3)</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#!"> Reply</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#!"> View 5 replies</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-sm-6 col-md-4 col-lg-3">
          <a
            href="@/assets/images/albums/06.jpg"
            data-gallery="image-popup"
            data-glightbox="description: .custom-desc2; descPosition: left;"
          >
            <img class="rounded img-fluid" src="@/assets/images/albums/06.jpg" alt="" />
          </a>
          <ul class="nav nav-stack py-2 small">
            <li class="nav-item">
              <a class="nav-link" href="#!">
                <i class="bi bi-heart-fill text-danger pe-1"></i>56k
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#!"> <i class="bi bi-chat-left-text-fill pe-1"></i>12k </a>
            </li>
          </ul>
          <div class="glightbox-desc custom-desc2">
            <div class="d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center">
                <div class="avatar me-2">
                  <img
                    class="avatar-img rounded-circle"
                    src="@/assets/images/avatar/04.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <div class="nav nav-divider">
                    <h6 class="nav-item card-title mb-0">Lori Ferguson</h6>
                    <span class="nav-item small"> 2hr</span>
                  </div>
                  <p class="mb-0 small">Web Developer at Webestica</p>
                </div>
              </div>
              <div class="dropdown">
                <a
                  href="#"
                  class="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                  id="cardFeedAction6"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="bi bi-three-dots"></i>
                </a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardFeedAction6">
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-bookmark fa-fw pe-2"></i>Save post</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-person-x fa-fw pe-2"></i>Unfollow lori ferguson
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-x-circle fa-fw pe-2"></i>Hide post</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-slash-circle fa-fw pe-2"></i>Block</a
                    >
                  </li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-flag fa-fw pe-2"></i>Report post</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <p class="mt-3 mb-0">
              I'm so privileged to be involved in the @bootstrap hiring process!
              <a href="#">#internship #inclusivebusiness</a> <a href="#">#internship</a>
              <a href="#"> #hiring</a> <a href="#">#apply</a>
            </p>

            <ul class="nav nav-stack py-3 small">
              <li class="nav-item">
                <a class="nav-link active" href="#!">
                  <i class="bi bi-hand-thumbs-up-fill pe-1"></i>Liked (56)</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#!"> <i class="bi bi-chat-fill pe-1"></i>Comments (12)</a>
              </li>
              <li class="nav-item dropdown ms-auto">
                <a
                  class="nav-link mb-0"
                  href="#"
                  id="cardShareAction6"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="bi bi-reply-fill fa-flip-horizontal pe-1"></i>Share (3)
                </a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction6">
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-envelope fa-fw pe-2"></i>Send via Direct Message</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-bookmark-check fa-fw pe-2"></i>Bookmark
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-link fa-fw pe-2"></i>Copy link to post</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-share fa-fw pe-2"></i>Share post via …</a
                    >
                  </li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-pencil-square fa-fw pe-2"></i>Share to News Feed</a
                    >
                  </li>
                </ul>
              </li>
            </ul>
            <div class="d-flex mb-3">
              <div class="avatar avatar-xs me-2">
                <img class="avatar-img rounded-circle" src="@/assets/images/avatar/04.jpg" alt="" />
              </div>
              <form class="position-relative w-100">
                <textarea
                  class="form-control pe-4 bg-light"
                  rows="1"
                  placeholder="Add a comment..."
                ></textarea>
              </form>
            </div>
            <ul class="comment-wrap list-unstyled">
              <li class="comment-item">
                <div class="d-flex">
                  <div class="avatar avatar-xs">
                    <img
                      class="avatar-img rounded-circle"
                      src="@/assets/images/avatar/05.jpg"
                      alt=""
                    />
                  </div>
                  <div class="ms-2">
                    <div class="bg-light rounded-start-top-0 p-3 rounded">
                      <div class="d-flex justify-content-center">
                        <div class="me-2">
                          <h6 class="mb-1"><a href="#!"> Frances Guerrero </a></h6>
                          <p class="small mb-0">
                            Removed demands expense account in outward tedious do.
                          </p>
                        </div>
                        <small>5hr</small>
                      </div>
                    </div>
                    <ul class="nav nav-divider py-2 small">
                      <li class="nav-item">
                        <a class="nav-link" href="#!"> Like (3)</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#!"> Reply</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#!"> View 5 replies</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
