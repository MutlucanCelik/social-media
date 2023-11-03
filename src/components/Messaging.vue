<template>
  <div class="d-none d-lg-block">
    <a
      class="icon-md btn btn-primary position-fixed end-0 bottom-0 me-5 mb-5"
      data-bs-toggle="offcanvas"
      href="#offcanvasChat"
      role="button"
      aria-controls="offcanvasChat"
    >
      <i class="bi bi-chat-left-text-fill"></i>
    </a>
    <div
      class="offcanvas offcanvas-end"
      data-bs-scroll="true"
      data-bs-backdrop="false"
      tabindex="-1"
      id="offcanvasChat"
    >
      <div class="offcanvas-header d-flex justify-content-between">
        <h5 class="offcanvas-title">Mesajlaşma</h5>
        <div class="d-flex">
          <a
            href="#"
            class="btn btn-secondary-soft-hover py-1 px-2"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i class="fa-solid fa-xmark"></i>
          </a>
        </div>
      </div>

      <div class="offcanvas-body pt-0 custom-scrollbar">
        <form class="rounded position-relative">
          <input
            class="form-control ps-5 bg-light"
            type="search"
            placeholder="Ara..."
            aria-label="Search"
          />
          <button
            class="btn bg-transparent px-3 py-0 position-absolute top-50 start-0 translate-middle-y"
            type="submit"
          >
            <i class="bi bi-search fs-5"> </i>
          </button>
        </form>

        <ul class="list-unstyled">
          <li
            class="mt-3 hstack gap-3 align-items-center position-relative toast-btn"
            data-target="chatToast"
          >
            <div class="avatar status-online">
              <img class="avatar-img rounded-circle" src="../assets/images/avatar/01.jpg" alt="" />
            </div>

            <div class="overflow-hidden">
              <a class="h6 mb-0 stretched-link" href="#!">Mustafa Yeler </a>
              <div class="small text-secondary text-truncate">Çok güzel çıkmışsın 😁</div>
            </div>

            <div class="small ms-auto text-nowrap">Şimdi</div>
          </li>

          <li
            class="mt-3 hstack gap-3 align-items-center position-relative toast-btn"
            data-target="chatToast2"
          >
            <div class="avatar status-online">
              <img class="avatar-img rounded-circle" src="../assets/images/avatar/02.jpg" alt="" />
            </div>

            <div class="overflow-hidden">
              <a class="h6 mb-0 stretched-link" href="#!">Merve Kaya </a>
              <div class="small text-secondary text-truncate">Ondan bahsetmiyorum.</div>
            </div>

            <div class="small ms-auto text-nowrap">1dakika</div>
          </li>

          <li class="mt-3 hstack gap-3 align-items-center position-relative">
            <div class="avatar status-offline">
              <img
                class="avatar-img rounded-circle"
                src="../assets/images/avatar/placeholder.jpg"
                alt=""
              />
            </div>

            <div class="overflow-hidden">
              <a class="h6 mb-0 stretched-link" href="#!">Delice Giyim </a>
              <div class="small text-secondary text-truncate">O ürünün fiyatı 299.99₺</div>
            </div>

            <div class="small ms-auto text-nowrap">2min</div>
          </li>

          <li class="mt-3 hstack gap-3 align-items-center position-relative">
            <div class="avatar">
              <img class="avatar-img rounded-circle" src="../assets/images/avatar/04.jpg" alt="" />
            </div>

            <div class="overflow-hidden">
              <a class="h6 mb-0 stretched-link" href="#!">Deniz Sayhan </a>
              <div class="small text-secondary text-truncate">Doğum günün kutlu olsun 🎂</div>
            </div>

            <div class="small ms-auto text-nowrap">10dakika</div>
          </li>

          <li class="mt-3 hstack gap-3 align-items-center position-relative">
            <div class="avatar avatar-story status-online">
              <img class="avatar-img rounded-circle" src="../assets/images/avatar/05.jpg" alt="" />
            </div>

            <div class="overflow-hidden">
              <a class="h6 mb-0 stretched-link" href="#!">Aslı Şirin </a>
              <div class="small text-secondary text-truncate">Yarın görüşürüz o zaman</div>
            </div>

            <div class="small ms-auto text-nowrap">2saat</div>
          </li>

          <li class="mt-3 hstack gap-3 align-items-center position-relative">
            <div class="avatar status-online">
              <img class="avatar-img rounded-circle" src="../assets/images/avatar/06.jpg" alt="" />
            </div>

            <div class="overflow-hidden">
              <a class="h6 mb-0 stretched-link" href="#!">Tuğrul Deveci </a>
              <div class="small text-secondary text-truncate">Şahsen ben öyle düşünmüyorum</div>
            </div>

            <div class="small ms-auto text-nowrap">1gün</div>
          </li>

          <li class="mt-3 hstack gap-3 align-items-center position-relative">
            <div class="avatar status-offline">
              <img class="avatar-img rounded-circle" src="../assets/images/avatar/08.jpg" alt="" />
            </div>

            <div class="overflow-hidden">
              <a class="h6 mb-0 stretched-link" href="#!">Nurullah gönül </a>
              <div class="small text-secondary text-truncate">Lorem ipsum dolor sit amet.</div>
            </div>

            <div class="small ms-auto text-nowrap">6gün</div>
          </li>

          <li class="mt-3 hstack gap-3 align-items-center position-relative">
            <div class="avatar">
              <img class="avatar-img rounded-circle" src="../assets/images/avatar/09.jpg" alt="" />
            </div>

            <div class="overflow-hidden">
              <a class="h6 mb-0 stretched-link" href="#!">Murat Demir </a>
              <div class="small text-secondary text-truncate">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, accusamus.
              </div>
            </div>

            <div class="small ms-auto text-nowrap">1gün</div>
          </li>

          <li class="mt-3 hstack gap-3 align-items-center position-relative">
            <div class="avatar status-online">
              <img class="avatar-img rounded-circle" src="../assets/images/avatar/10.jpg" alt="" />
            </div>

            <div class="overflow-hidden">
              <a class="h6 mb-0 stretched-link" href="#!">Duygu Sayhan </a>
              <div class="small text-secondary text-truncate">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aut ratione
                doloremque?
              </div>
            </div>

            <div class="small ms-auto text-nowrap">15gün</div>
          </li>

          <li class="mt-3 hstack gap-3 align-items-center position-relative">
            <div class="avatar">
              <img class="avatar-img rounded-circle" src="../assets/images/avatar/11.jpg" alt="" />
            </div>

            <div class="overflow-hidden">
              <a class="h6 mb-0 stretched-link" href="#!">Aylin Demet </a>
              <div class="small text-secondary text-truncate">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>

            <div class="small ms-auto text-nowrap">18gün</div>
          </li>

          <li class="mt-3 hstack gap-3 align-items-center position-relative">
            <div class="avatar status-online">
              <img class="avatar-img rounded-circle" src="../assets/images/avatar/12.jpg" alt="" />
            </div>

            <div class="overflow-hidden">
              <a class="h6 mb-0 stretched-link" href="#!">Dilek Çelik </a>
              <div class="small text-secondary text-truncate">Lorem ipsum dolor sit amet.</div>
            </div>

            <div class="small ms-auto text-nowrap">20gün</div>
          </li>

          <li class="mt-3 d-grid">
            <a class="btn btn-primary-soft" href="messaging.html"> Tüm mesajlaşmaları gör </a>
          </li>
        </ul>
      </div>
    </div>

    <div aria-live="polite" aria-atomic="true" class="position-relative">
      <div class="toast-container toast-chat d-flex gap-3 align-items-end">
        <div
          id="chatToast"
          class="toast mb-0 bg-mode"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          data-bs-autohide="false"
        >
          <div class="toast-header bg-mode">
            <div class="d-flex justify-content-between align-items-center w-100">
              <div class="d-flex">
                <div class="flex-shrink-0 avatar me-2">
                  <img
                    class="avatar-img rounded-circle"
                    src="../assets/images/avatar/01.jpg"
                    alt=""
                  />
                </div>
                <div class="flex-grow-1">
                  <h6 class="mb-0 mt-1">Frances Guerrero</h6>
                  <div class="small text-secondary">
                    <i class="fa-solid fa-circle text-success me-1"></i>Online
                  </div>
                </div>
              </div>
              <div class="d-flex">
                <div class="dropdown">
                  <a
                    class="btn btn-secondary-soft-hover py-1 px-2"
                    href="#"
                    id="chatcoversationDropdown"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="false"
                    ><i class="bi bi-three-dots-vertical"></i
                  ></a>
                  <ul
                    class="dropdown-menu dropdown-menu-end"
                    aria-labelledby="chatcoversationDropdown"
                  >
                    <li>
                      <a class="dropdown-item" href="#"
                        ><i class="bi bi-camera-video me-2 fw-icon"></i>Video call</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="#"
                        ><i class="bi bi-telephone me-2 fw-icon"></i>Audio call</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="#"
                        ><i class="bi bi-trash me-2 fw-icon"></i>Delete
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#"
                        ><i class="bi bi-chat-square-text me-2 fw-icon"></i>Mark as unread</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="#"
                        ><i class="bi bi-volume-up me-2 fw-icon"></i>Muted</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="#"
                        ><i class="bi bi-archive me-2 fw-icon"></i>Archive</a
                      >
                    </li>
                    <li class="dropdown-divider"></li>
                    <li>
                      <a class="dropdown-item" href="#"
                        ><i class="bi bi-flag me-2 fw-icon"></i>Report</a
                      >
                    </li>
                  </ul>
                </div>

                <a
                  class="btn btn-secondary-soft-hover py-1 px-2"
                  data-bs-toggle="collapse"
                  href="#collapseChat"
                  aria-expanded="false"
                  aria-controls="collapseChat"
                  ><i class="bi bi-dash-lg"></i
                ></a>
                <button
                  class="btn btn-secondary-soft-hover py-1 px-2"
                  data-bs-dismiss="toast"
                  aria-label="Close"
                >
                  <i class="fa-solid fa-xmark"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="toast-body collapse show" id="collapseChat">
            <div class="chat-conversation-content custom-scrollbar h-200px">
              <div class="text-center small my-2">Jul 16, 2022, 06:15 am</div>

              <div class="d-flex mb-1">
                <div class="flex-shrink-0 avatar avatar-xs me-2">
                  <img
                    class="avatar-img rounded-circle"
                    src="../assets/images/avatar/01.jpg"
                    alt=""
                  />
                </div>
                <div class="flex-grow-1">
                  <div class="w-100">
                    <div class="d-flex flex-column align-items-start">
                      <div class="bg-light text-secondary p-2 px-3 rounded-2">
                        Applauded no discovery😊
                      </div>
                      <div class="small my-2">6:15 AM</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="d-flex justify-content-end text-end mb-1">
                <div class="w-100">
                  <div class="d-flex flex-column align-items-end">
                    <div class="bg-primary text-white p-2 px-3 rounded-2">With pleasure</div>
                  </div>
                </div>
              </div>

              <div class="d-flex mb-1">
                <div class="flex-shrink-0 avatar avatar-xs me-2">
                  <img
                    class="avatar-img rounded-circle"
                    src="../assets/images/avatar/01.jpg"
                    alt=""
                  />
                </div>
                <div class="flex-grow-1">
                  <div class="w-100">
                    <div class="d-flex flex-column align-items-start">
                      <div class="bg-light text-secondary p-2 px-3 rounded-2">
                        Please find the attached
                      </div>

                      <div class="small my-2">12:16 PM</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="d-flex mb-1">
                <div class="flex-shrink-0 avatar avatar-xs me-2">
                  <img
                    class="avatar-img rounded-circle"
                    src="../assets/images/avatar/01.jpg"
                    alt=""
                  />
                </div>
                <div class="flex-grow-1">
                  <div class="w-100">
                    <div class="d-flex flex-column align-items-start">
                      <div class="bg-light text-secondary p-2 px-3 rounded-2">
                        How promotion excellent curiosity😮
                      </div>
                      <div class="small my-2">3:22 PM</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="d-flex justify-content-end text-end mb-1">
                <div class="w-100">
                  <div class="d-flex flex-column align-items-end">
                    <div class="bg-primary text-white p-2 px-3 rounded-2">And sir dare view.</div>

                    <div class="d-flex my-2">
                      <div class="small text-secondary">5:35 PM</div>
                      <div class="small ms-2"><i class="fa-solid fa-check"></i></div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="text-center small my-2">2 New Messages</div>

              <div class="d-flex mb-1">
                <div class="flex-shrink-0 avatar avatar-xs me-2">
                  <img
                    class="avatar-img rounded-circle"
                    src="../assets/images/avatar/01.jpg"
                    alt=""
                  />
                </div>
                <div class="flex-grow-1">
                  <div class="w-100">
                    <div class="d-flex flex-column align-items-start">
                      <div class="bg-light text-secondary p-3 rounded-2">
                        <div class="typing d-flex align-items-center">
                          <div class="dot"></div>
                          <div class="dot"></div>
                          <div class="dot"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-2">
              <textarea
                class="form-control mb-sm-0 mb-3"
                placeholder="Type a message"
                rows="1"
              ></textarea>

              <div class="d-sm-flex align-items-end mt-2">
                <button class="btn btn-sm btn-danger-soft me-2">
                  <i class="fa-solid fa-face-smile fs-6"></i>
                </button>
                <button class="btn btn-sm btn-secondary-soft me-2">
                  <i class="fa-solid fa-paperclip fs-6"></i>
                </button>
                <button class="btn btn-sm btn-success-soft me-2">Gif</button>
                <button class="btn btn-sm btn-primary ms-auto">Send</button>
              </div>
            </div>
          </div>
        </div>

        <div
          id="chatToast2"
          class="toast mb-0 bg-mode"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          data-bs-autohide="false"
        >
          <div class="toast-header bg-mode">
            <div class="d-flex justify-content-between align-items-center w-100">
              <div class="d-flex">
                <div class="flex-shrink-0 avatar me-2">
                  <img
                    class="avatar-img rounded-circle"
                    src="../assets/images/avatar/02.jpg"
                    alt=""
                  />
                </div>
                <div class="flex-grow-1">
                  <h6 class="mb-0 mt-1">Lori Ferguson</h6>
                  <div class="small text-secondary">
                    <i class="fa-solid fa-circle text-success me-1"></i>Online
                  </div>
                </div>
              </div>
              <div class="d-flex">
                <div class="dropdown">
                  <a
                    class="btn btn-secondary-soft-hover py-1 px-2"
                    href="#"
                    id="chatcoversationDropdown2"
                    role="button"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="false"
                    ><i class="bi bi-three-dots-vertical"></i
                  ></a>
                  <ul
                    class="dropdown-menu dropdown-menu-end"
                    aria-labelledby="chatcoversationDropdown2"
                  >
                    <li>
                      <a class="dropdown-item" href="#"
                        ><i class="bi bi-camera-video me-2 fw-icon"></i>Video call</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="#"
                        ><i class="bi bi-telephone me-2 fw-icon"></i>Audio call</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="#"
                        ><i class="bi bi-trash me-2 fw-icon"></i>Delete
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#"
                        ><i class="bi bi-chat-square-text me-2 fw-icon"></i>Mark as unread</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="#"
                        ><i class="bi bi-volume-up me-2 fw-icon"></i>Muted</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" href="#"
                        ><i class="bi bi-archive me-2 fw-icon"></i>Archive</a
                      >
                    </li>
                    <li class="dropdown-divider"></li>
                    <li>
                      <a class="dropdown-item" href="#"
                        ><i class="bi bi-flag me-2 fw-icon"></i>Report</a
                      >
                    </li>
                  </ul>
                </div>

                <a
                  class="btn btn-secondary-soft-hover py-1 px-2"
                  data-bs-toggle="collapse"
                  href="#collapseChat2"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseChat2"
                  ><i class="bi bi-dash-lg"></i
                ></a>
                <button
                  class="btn btn-secondary-soft-hover py-1 px-2"
                  data-bs-dismiss="toast"
                  aria-label="Close"
                >
                  <i class="fa-solid fa-xmark"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="toast-body collapse show" id="collapseChat2">
            <div class="chat-conversation-content custom-scrollbar h-200px">
              <div class="text-center small my-2">Jul 16, 2022, 06:15 am</div>

              <div class="d-flex mb-1">
                <div class="flex-shrink-0 avatar avatar-xs me-2">
                  <img
                    class="avatar-img rounded-circle"
                    src="../assets/images/avatar/02.jpg"
                    alt=""
                  />
                </div>
                <div class="flex-grow-1">
                  <div class="w-100">
                    <div class="d-flex flex-column align-items-start">
                      <div class="bg-light text-secondary p-2 px-3 rounded-2">
                        Applauded no discovery😊
                      </div>
                      <div class="small my-2">6:15 AM</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="d-flex justify-content-end text-end mb-1">
                <div class="w-100">
                  <div class="d-flex flex-column align-items-end">
                    <div class="bg-primary text-white p-2 px-3 rounded-2">With pleasure</div>
                  </div>
                </div>
              </div>

              <div class="d-flex mb-1">
                <div class="flex-shrink-0 avatar avatar-xs me-2">
                  <img
                    class="avatar-img rounded-circle"
                    src="../assets/images/avatar/02.jpg"
                    alt=""
                  />
                </div>
                <div class="flex-grow-1">
                  <div class="w-100">
                    <div class="d-flex flex-column align-items-start">
                      <div class="bg-light text-secondary p-2 px-3 rounded-2">
                        Please find the attached
                      </div>

                      <div class="small my-2">12:16 PM</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="d-flex mb-1">
                <div class="flex-shrink-0 avatar avatar-xs me-2">
                  <img
                    class="avatar-img rounded-circle"
                    src="../assets/images/avatar/02.jpg"
                    alt=""
                  />
                </div>
                <div class="flex-grow-1">
                  <div class="w-100">
                    <div class="d-flex flex-column align-items-start">
                      <div class="bg-light text-secondary p-2 px-3 rounded-2">
                        How promotion excellent curiosity😮
                      </div>
                      <div class="small my-2">3:22 PM</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="d-flex justify-content-end text-end mb-1">
                <div class="w-100">
                  <div class="d-flex flex-column align-items-end">
                    <div class="bg-primary text-white p-2 px-3 rounded-2">And sir dare view.</div>

                    <div class="d-flex my-2">
                      <div class="small text-secondary">5:35 PM</div>
                      <div class="small ms-2"><i class="fa-solid fa-check"></i></div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="text-center small my-2">2 New Messages</div>

              <div class="d-flex mb-1">
                <div class="flex-shrink-0 avatar avatar-xs me-2">
                  <img
                    class="avatar-img rounded-circle"
                    src="../assets/images/avatar/02.jpg"
                    alt=""
                  />
                </div>
                <div class="flex-grow-1">
                  <div class="w-100">
                    <div class="d-flex flex-column align-items-start">
                      <div class="bg-light text-secondary p-3 rounded-2">
                        <div class="typing d-flex align-items-center">
                          <div class="dot"></div>
                          <div class="dot"></div>
                          <div class="dot"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-2">
              <textarea
                class="form-control mb-sm-0 mb-3"
                placeholder="Type a message"
                rows="1"
              ></textarea>

              <div class="d-sm-flex align-items-end mt-2">
                <button class="btn btn-sm btn-danger-soft me-2">
                  <i class="fa-solid fa-face-smile fs-6"></i>
                </button>
                <button class="btn btn-sm btn-secondary-soft me-2">
                  <i class="fa-solid fa-paperclip fs-6"></i>
                </button>
                <button class="btn btn-sm btn-success-soft me-2">Gif</button>
                <button class="btn btn-sm btn-primary ms-auto">Send</button>
              </div>
            </div>
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
