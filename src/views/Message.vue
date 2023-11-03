<template>
  <fragment>
    <Header />
    <main>
      <!-- Container START -->
      <div class="container" style="height: 80% !important">
        <div class="row gx-0">
          <!-- Sidebar START -->
          <div class="col-lg-4 col-xxl-3" id="chatTabs" role="tablist">
            <!-- Divider -->
            <div class="d-flex align-items-center mb-4 d-lg-none">
              <button
                class="border-0 bg-transparent"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
              >
                <span class="btn btn-primary"><i class="fa-solid fa-sliders-h"></i></span>
                <span class="h6 mb-0 fw-bold d-lg-none ms-2">Mesajlar</span>
              </button>
            </div>
            <!-- Advanced filter responsive toggler END -->
            <div class="card card-body border-end-0 border-bottom-0 rounded-bottom-0">
              <div class="d-flex justify-content-between align-items-center">
                <h1 class="h5 mb-0">
                  Aktif Mesajlar <span class="badge bg-success bg-opacity-10 text-success">6</span>
                </h1>
              </div>
            </div>

            <nav class="navbar navbar-light navbar-expand-lg mx-0">
              <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar">
                <!-- Offcanvas header -->
                <div class="offcanvas-header">
                  <button
                    type="button"
                    class="btn-close text-reset ms-auto"
                    data-bs-dismiss="offcanvas"
                  ></button>
                </div>

                <!-- Offcanvas body -->
                <div class="offcanvas-body p-0">
                  <div
                    class="card card-chat-list rounded-end-lg-0 card-body border-end-lg-0 rounded-top-0"
                  >
                    <!-- Search chat START -->
                    <form class="position-relative">
                      <input
                        class="form-control py-2"
                        type="search"
                        placeholder="Search for chats"
                        aria-label="Search"
                      />
                      <button
                        class="btn bg-transparent text-secondary px-2 py-0 position-absolute top-50 end-0 translate-middle-y"
                        type="submit"
                      >
                        <i class="bi bi-search fs-5"></i>
                      </button>
                    </form>
                    <!-- Search chat END -->
                    <!-- Chat list tab START -->
                    <div class="mt-4 h-100" style="overflow-y: scrool">
                      <div class="chat-tab-list custom-scrollbar">
                        <ul class="nav flex-column nav-pills nav-pills-soft">
                          <li data-bs-dismiss="offcanvas">
                            <!-- Chat user tab item -->
                            <a
                              href="#chat-1"
                              class="nav-link active text-start"
                              id="chat-1-tab"
                              data-bs-toggle="pill"
                              role="tab"
                            >
                              <div class="d-flex">
                                <div class="flex-shrink-0 avatar avatar-story me-2 status-online">
                                  <img
                                    class="avatar-img rounded-circle"
                                    src="@/assets/images/avatar/10.jpg"
                                    alt=""
                                  />
                                </div>
                                <div class="flex-grow-1 d-block">
                                  <h6 class="mb-0 mt-1">Dilan Tepe</h6>
                                  <div class="small text-secondary">
                                    Lorem ipsum dolor sit amet.
                                  </div>
                                </div>
                              </div>
                            </a>
                          </li>
                          <!-- Chat user tab item -->
                          <li data-bs-dismiss="offcanvas">
                            <a
                              href="#chat-2"
                              class="nav-link text-start"
                              id="chat-2-tab"
                              data-bs-toggle="pill"
                              role="tab"
                            >
                              <div class="d-flex">
                                <div class="flex-shrink-0 avatar me-2 status-offline">
                                  <img
                                    class="avatar-img rounded-circle"
                                    src="@/assets/images/avatar/11.jpg"
                                    alt=""
                                  />
                                </div>
                                <div class="flex-grow-1 d-block">
                                  <h6 class="mb-0 mt-1">Merve Kaya</h6>
                                  <div class="small text-secondary">You missed a call form🤙</div>
                                </div>
                              </div>
                            </a>
                          </li>
                          <!-- Chat user tab item -->
                          <li data-bs-dismiss="offcanvas">
                            <a
                              href="#chat-3"
                              class="nav-link text-start"
                              id="chat-3-tab"
                              data-bs-toggle="pill"
                              role="tab"
                            >
                              <div class="d-flex">
                                <div class="flex-shrink-0 avatar avatar-story me-2">
                                  <img
                                    class="avatar-img rounded-circle"
                                    src="@/assets/images/avatar/12.jpg"
                                    alt=""
                                  />
                                </div>
                                <div class="flex-grow-1 d-block">
                                  <h6 class="mb-0 mt-1">Nurşah Uslu</h6>
                                  <div class="small text-secondary">Day sweetness 😊</div>
                                </div>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <!-- Chat list tab END -->
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <!-- Sidebar START -->

          <!-- Chat conversation START -->
          <div class="col-lg-8 col-xxl-9">
            <div class="card card-chat rounded-start-lg-0 border-start-lg-0">
              <div class="card-body h-100">
                <div class="tab-content py-0 mb-0 h-100" id="chatTabsContent">
                  <!-- Conversation item START -->
                  <div
                    class="fade tab-pane show active h-100"
                    id="chat-1"
                    role="tabpanel"
                    aria-labelledby="chat-1-tab"
                    style="padding-bottom: 5rem"
                  >
                    <!-- Top avatar and status START -->
                    <div class="d-sm-flex justify-content-between align-items-center">
                      <div class="d-flex mb-2 mb-sm-0">
                        <div class="flex-shrink-0 avatar me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="@/assets/images/avatar/10.jpg"
                            alt=""
                          />
                        </div>
                        <div class="d-block flex-grow-1">
                          <h6 class="mb-0 mt-1">Dilan Tepe</h6>
                          <div class="small text-secondary">
                            <i class="fa-solid fa-circle text-success me-1"></i>Aktfi
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Top avatar and status END -->
                    <hr />
                    <!-- Chat conversation START -->
                    <div
                      class="chat-conversation-content custom-scrollbar"
                      style="overflow-y: scroll"
                    >
                      <!-- Chat time -->
                      <div class="text-center small my-2">Jul 16, 2022, 06:15 am</div>
                      <!-- Chat message left -->
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="@/assets/images/avatar/10.jpg"
                            alt=""
                          />
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div class="bg-light text-secondary p-2 px-3 rounded-2">
                                Applauded no discovery in newspaper allowance am northward😊
                              </div>
                              <div class="small my-2">6:15 AM</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Chat message right -->
                      <div class="d-flex justify-content-end text-end mb-1">
                        <div class="w-100">
                          <div class="d-flex flex-column align-items-end">
                            <div class="bg-primary text-white p-2 px-3 rounded-2">
                              With pleasure
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Chat message right -->
                      <div class="d-flex justify-content-end text-end mb-1">
                        <div class="w-100">
                          <div class="d-flex flex-column align-items-end">
                            <div class="bg-primary text-white p-2 px-3 rounded-2">
                              No visited raising gravity outward subject my cottage Mr be.
                            </div>
                            <div class="d-flex my-2">
                              <div class="small text-secondary">6:20 AM</div>
                              <div class="small ms-2">
                                <i class="fa-solid fa-check-double text-info"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Chat message left -->
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="@/assets/images/avatar/10.jpg"
                            alt=""
                          />
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div class="bg-light text-secondary p-2 px-3 rounded-2">
                                Please find the attached updated files
                              </div>
                              <!-- Files START -->
                              <!-- Files END -->
                              <div class="small my-2">12:16 PM</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Chat message left -->
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="@/assets/images/avatar/10.jpg"
                            alt=""
                          />
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div class="bg-light text-secondary p-2 px-3 rounded-2">
                                How promotion excellent curiosity yet attempted happiness Gay
                                prosperous impression😮
                              </div>
                              <div class="small my-2">3:22 PM</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Chat message left -->
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="@/assets/images/avatar/10.jpg"
                            alt=""
                          />
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div class="bg-light text-secondary p-2 px-3 rounded-2">
                                <p class="small mb-0">Congratulations:)</p>
                                <div class="card shadow-none p-2 border border-2 rounded mt-2">
                                  <img src="@/assets/images/elements/14.svg" alt="" />
                                </div>
                              </div>
                              <div class="small my-2">3:22 PM</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Chat message right -->
                      <div class="d-flex justify-content-end text-end mb-1">
                        <div class="w-100">
                          <div class="d-flex flex-column align-items-end">
                            <div class="bg-primary text-white p-2 px-3 rounded-2">
                              And sir dare view but over man So at within mr to simple assure Mr
                              disposing.
                            </div>
                            <!-- Images -->
                            <div class="d-flex my-2">
                              <div class="small text-secondary">5:35 PM</div>
                              <div class="small ms-2"><i class="fa-solid fa-check"></i></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Chat message right -->
                      <div class="d-flex justify-content-end text-end mb-1">
                        <div class="w-100">
                          <div class="d-flex flex-column align-items-end">
                            <img
                              class="rounded h-200px"
                              src="@/assets/images/avatar/05.jpg"
                              alt=""
                            />
                            <div class="small my-2">5:36 PM</div>
                          </div>
                        </div>
                      </div>
                      <!-- Chat time -->
                      <div class="text-center small my-2">2 New Messages</div>
                      <!-- Chat message left -->
                      <div class="d-flex mb-2">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="@/assets/images/avatar/10.jpg"
                            alt=""
                          />
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div class="bg-light text-secondary p-2 px-3 rounded-2">
                                Traveling alteration impression 🤐 six all uncommonly Chamber
                                hearing inhabit joy highest private.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Chat message left -->
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="@/assets/images/avatar/10.jpg"
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
                    <!-- Chat conversation END -->
                  </div>
                  <!-- Conversation item END -->
                  <!-- Conversation item START -->
                  <div
                    class="fade tab-pane h-100"
                    id="chat-2"
                    role="tabpanel"
                    aria-labelledby="chat-2-tab"
                  >
                    <!-- Top avatar and status START -->
                    <div class="d-sm-flex justify-content-between align-items-center">
                      <div class="d-flex mb-2 mb-sm-0">
                        <div class="flex-shrink-0 avatar me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="@/assets/images/avatar/11.jpg"
                            alt=""
                          />
                        </div>
                        <div class="d-block flex-grow-1">
                          <h6 class="mb-0 mt-1">Carolyn Ortiz</h6>
                          <div class="small text-secondary">
                            <i class="fa-solid fa-circle text-danger me-1"></i>Last active 2 days
                          </div>
                        </div>
                      </div>
                      <div class="d-flex align-items-center">
                        <!-- Call button -->
                        <a
                          href="#!"
                          class="icon-md rounded-circle btn btn-primary-soft me-2 px-2"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Audio call"
                          ><i class="bi bi-telephone-fill"></i
                        ></a>
                        <a
                          href="#!"
                          class="icon-md rounded-circle btn btn-primary-soft me-2 px-2"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Video call"
                          ><i class="bi bi-camera-video-fill"></i
                        ></a>
                        <!-- Card action START -->
                        <div class="dropdown">
                          <a
                            class="icon-md rounded-circle btn btn-primary-soft me-2 px-2"
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
                                ><i class="bi bi-check-lg me-2 fw-icon"></i>Mark as read</a
                              >
                            </li>
                            <li>
                              <a class="dropdown-item" href="#"
                                ><i class="bi bi-mic-mute me-2 fw-icon"></i>Mute conversation</a
                              >
                            </li>
                            <li>
                              <a class="dropdown-item" href="#"
                                ><i class="bi bi-person-check me-2 fw-icon"></i>View profile</a
                              >
                            </li>
                            <li>
                              <a class="dropdown-item" href="#"
                                ><i class="bi bi-trash me-2 fw-icon"></i>Delete chat</a
                              >
                            </li>
                            <li class="dropdown-divider"></li>
                            <li>
                              <a class="dropdown-item" href="#"
                                ><i class="bi bi-archive me-2 fw-icon"></i>Archive chat</a
                              >
                            </li>
                          </ul>
                        </div>
                        <!-- Card action END -->
                      </div>
                    </div>
                    <!-- Top avatar and status END -->
                    <hr />
                    <!-- Chat conversation START -->
                    <div
                      class="chat-conversation-content overflow-auto custom-scrollbar"
                      style="padding-bottom: 5rem"
                    >
                      <!-- Chat time -->
                      <div class="text-center small my-2">Jul 16, 2022, 06:15 am</div>
                      <!-- Chat message left -->
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="@/assets/images/avatar/11.jpg"
                            alt=""
                          />
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div class="bg-light text-secondary p-2 px-3 rounded-2">
                                Night signs creeping yielding green Seasons.
                              </div>
                              <div class="small my-2">6:15 AM</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Chat message right -->
                      <div class="d-flex justify-content-end text-end mb-1">
                        <div class="w-100">
                          <div class="d-flex flex-column align-items-end">
                            <div class="bg-primary text-white p-2 px-3 rounded-2">
                              Creeping earth under was You're without which image.
                            </div>
                            <div class="d-flex my-2">
                              <div class="small text-secondary">6:20 AM</div>
                              <div class="small ms-2">
                                <i class="fa-solid fa-check-double text-info"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Chat message left -->
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="@/assets/images/avatar/11.jpg"
                            alt=""
                          />
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div class="bg-light text-secondary p-2 px-3 rounded-2">
                                Thank you for prompt response
                              </div>
                              <div class="small my-2">12:16 PM</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Chat message left -->
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="@/assets/images/avatar/11.jpg"
                            alt=""
                          />
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div class="bg-light text-secondary p-2 px-3 rounded-2">
                                Won't that fish him whose won't also.
                              </div>
                              <div class="small my-2">3:22 PM</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Chat message right -->
                      <div class="d-flex justify-content-end text-end mb-1">
                        <div class="w-100">
                          <div class="d-flex flex-column align-items-end">
                            <div class="bg-primary text-white p-2 px-3 rounded-2">
                              Moving living second beast Over fish place beast.
                            </div>
                            <div class="d-flex my-2">
                              <div class="small text-secondary">5:35 PM</div>
                              <div class="small ms-2"><i class="fa-solid fa-check"></i></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Chat time -->
                      <div class="text-center small my-2">2 New Messages</div>
                      <!-- Chat message left -->
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="@/assets/images/avatar/11.jpg"
                            alt=""
                          />
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div class="bg-light text-secondary p-2 px-3 rounded-2">
                                Thing they're fruit together forth day.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Chat message left -->
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="@/assets/images/avatar/11.jpg"
                            alt=""
                          />
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div class="bg-light text-secondary p-2 px-3 rounded-2">
                                Fly replenish third to said void life night yielding for heaven give
                                blessed spirit.
                              </div>
                              <div class="small my-2">9:30 PM</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Chat conversation END -->
                  </div>
                  <!-- Conversation item END -->
                  <!-- Conversation item START -->
                  <div
                    class="fade tab-pane h-100"
                    id="chat-3"
                    role="tabpanel"
                    aria-labelledby="chat-3-tab"
                  >
                    <!-- Top avatar and status START -->
                    <div class="d-sm-flex justify-content-between align-items-center">
                      <div class="d-flex mb-2 mb-sm-0">
                        <div class="flex-shrink-0 avatar me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="@/assets/images/avatar/12.jpg"
                            alt=""
                          />
                        </div>
                        <div class="d-block flex-grow-1">
                          <h6 class="mb-0 mt-1">Billy Vasquez</h6>
                          <div class="small text-secondary">Last active a month</div>
                        </div>
                      </div>
                      <div class="d-flex align-items-center">
                        <!-- Call button -->
                        <a
                          href="#!"
                          class="icon-md rounded-circle btn btn-primary-soft me-2 px-2"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Audio call"
                          ><i class="bi bi-telephone-fill"></i
                        ></a>
                        <a
                          href="#!"
                          class="icon-md rounded-circle btn btn-primary-soft me-2 px-2"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Video call"
                          ><i class="bi bi-camera-video-fill"></i
                        ></a>
                        <!-- Card action START -->
                        <div class="dropdown">
                          <a
                            class="icon-md rounded-circle btn btn-primary-soft me-2 px-2"
                            href="#"
                            id="chatcoversationDropdown3"
                            role="button"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="outside"
                            aria-expanded="false"
                            ><i class="bi bi-three-dots-vertical"></i
                          ></a>
                          <ul
                            class="dropdown-menu dropdown-menu-end"
                            aria-labelledby="chatcoversationDropdown3"
                          >
                            <li>
                              <a class="dropdown-item" href="#"
                                ><i class="bi bi-check-lg me-2 fw-icon"></i>Mark as read</a
                              >
                            </li>
                            <li>
                              <a class="dropdown-item" href="#"
                                ><i class="bi bi-mic-mute me-2 fw-icon"></i>Mute conversation</a
                              >
                            </li>
                            <li>
                              <a class="dropdown-item" href="#"
                                ><i class="bi bi-person-check me-2 fw-icon"></i>View profile</a
                              >
                            </li>
                            <li>
                              <a class="dropdown-item" href="#"
                                ><i class="bi bi-trash me-2 fw-icon"></i>Delete chat</a
                              >
                            </li>
                            <li class="dropdown-divider"></li>
                            <li>
                              <a class="dropdown-item" href="#"
                                ><i class="bi bi-archive me-2 fw-icon"></i>Archive chat</a
                              >
                            </li>
                          </ul>
                        </div>
                        <!-- Card action END -->
                      </div>
                    </div>
                    <!-- Top avatar and status END -->
                    <hr />
                    <!-- Chat conversation START -->
                    <div class="chat-conversation-content overflow-auto custom-scrollbar">
                      <!-- Chat time -->
                      <div class="text-center small my-2">Jul 16, 2022, 06:15 am</div>
                      <!-- Chat message right -->
                      <div class="d-flex justify-content-end text-end mb-1">
                        <div class="w-100">
                          <div class="d-flex flex-column align-items-end">
                            <div class="bg-primary text-white p-2 px-3 rounded-2">Hello</div>
                          </div>
                        </div>
                      </div>
                      <!-- Chat message right -->
                      <div class="d-flex justify-content-end text-end mb-1">
                        <div class="w-100">
                          <div class="d-flex flex-column align-items-end">
                            <div class="bg-primary text-white p-2 px-3 rounded-2">
                              Made and For saw Creepeth place shall Moving.
                            </div>
                            <div class="d-flex my-2">
                              <div class="small text-secondary">6:20 AM</div>
                              <div class="small ms-2">
                                <i class="fa-solid fa-check-double text-info"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Chat message left -->
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="@/assets/images/avatar/12.jpg"
                            alt=""
                          />
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div class="bg-light text-secondary p-2 px-3 rounded-2">
                                Thank you for prompt response
                              </div>
                              <div class="small my-2">12:16 PM</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Chat message left -->
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="@/assets/images/avatar/12.jpg"
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
                    <!-- Chat conversation END -->
                  </div>
                  <!-- Conversation item END -->
                  <!-- Conversation item START -->
                  <div
                    class="fade tab-pane h-100"
                    id="chat-4"
                    role="tabpanel"
                    aria-labelledby="chat-4-tab"
                  >
                    <!-- Top avatar and status START -->
                    <div class="d-sm-flex justify-content-between align-items-center">
                      <div class="d-flex mb-2 mb-sm-0">
                        <div class="flex-shrink-0 avatar me-2">
                          <ul class="avatar-group avatar-group-two">
                            <li class="avatar avatar-xs">
                              <img
                                class="avatar-img rounded-circle"
                                src="@/assets/images/avatar/01.jpg"
                                alt="avatar"
                              />
                            </li>
                            <li class="avatar avatar-xs">
                              <img
                                class="avatar-img rounded-circle"
                                src="@/assets/images/avatar/02.jpg"
                                alt="avatar"
                              />
                            </li>
                          </ul>
                        </div>
                        <div class="flex-grow-1 d-block">
                          <h6 class="mb-0 mt-1">Dennis, Ortiz</h6>
                          <div class="small text-secondary">Ortiz: I'm adding jhon</div>
                        </div>
                      </div>
                      <div class="d-flex align-items-center">
                        <!-- Call button -->
                        <a
                          href="#!"
                          class="icon-md rounded-circle btn btn-primary-soft me-2 px-2"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Audio call"
                          ><i class="bi bi-telephone-fill"></i
                        ></a>
                        <a
                          href="#!"
                          class="icon-md rounded-circle btn btn-primary-soft me-2 px-2"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Video call"
                          ><i class="bi bi-camera-video-fill"></i
                        ></a>
                        <!-- Card action START -->
                        <div class="dropdown">
                          <a
                            class="icon-md rounded-circle btn btn-primary-soft me-2 px-2"
                            href="#"
                            id="chatcoversationDropdown4"
                            role="button"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="outside"
                            aria-expanded="false"
                            ><i class="bi bi-three-dots-vertical"></i
                          ></a>
                          <ul
                            class="dropdown-menu dropdown-menu-end"
                            aria-labelledby="chatcoversationDropdown4"
                          >
                            <li>
                              <a class="dropdown-item" href="#"
                                ><i class="bi bi-check-lg me-2 fw-icon"></i>Mark as read</a
                              >
                            </li>
                            <li>
                              <a class="dropdown-item" href="#"
                                ><i class="bi bi-mic-mute me-2 fw-icon"></i>Mute conversation</a
                              >
                            </li>
                            <li>
                              <a class="dropdown-item" href="#"
                                ><i class="bi bi-person-check me-2 fw-icon"></i>View profile</a
                              >
                            </li>
                            <li>
                              <a class="dropdown-item" href="#"
                                ><i class="bi bi-trash me-2 fw-icon"></i>Delete chat</a
                              >
                            </li>
                            <li class="dropdown-divider"></li>
                            <li>
                              <a class="dropdown-item" href="#"
                                ><i class="bi bi-archive me-2 fw-icon"></i>Archive chat</a
                              >
                            </li>
                          </ul>
                        </div>
                        <!-- Card action END -->
                      </div>
                    </div>
                    <!-- Top avatar and status END -->
                    <hr />
                    <!-- Chat conversation START -->
                    <div class="chat-conversation-content overflow-auto custom-scrollbar">
                      <!-- Chat time -->
                      <div class="text-center small my-2">Jul 16, 2022, 06:15 am</div>
                      <!-- Chat message left -->
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="@/assets/images/avatar/01.jpg"
                            alt=""
                          />
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div class="bg-light text-secondary p-2 px-3 rounded-2">
                                Firmament day life also let subdue.
                              </div>
                              <div class="small my-2">6:15 AM</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Chat message right -->
                      <div class="d-flex justify-content-end text-end mb-1">
                        <div class="w-100">
                          <div class="d-flex flex-column align-items-end">
                            <div class="bg-primary text-white p-2 px-3 rounded-2">Yes</div>
                          </div>
                        </div>
                      </div>
                      <!-- Chat message right -->
                      <div class="d-flex justify-content-end text-end mb-1">
                        <div class="w-100">
                          <div class="d-flex flex-column align-items-end">
                            <div class="bg-primary text-white p-2 px-3 rounded-2">
                              Hold do at tore in park feet near my case.
                            </div>
                            <div class="d-flex my-2">
                              <div class="small text-secondary">6:20 AM</div>
                              <div class="small ms-2">
                                <i class="fa-solid fa-check-double text-info"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Chat message left -->
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="@/assets/images/avatar/01.jpg"
                            alt=""
                          />
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div class="bg-light text-secondary p-2 px-3 rounded-2">
                                78958642-589
                              </div>
                              <div class="small my-2">12:16 PM</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Chat message left -->
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="@/assets/images/avatar/01.jpg"
                            alt=""
                          />
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div class="bg-light text-secondary p-2 px-3 rounded-2">
                                Void Fowl greater upon moveth bring gathering.
                              </div>
                              <div class="small my-2">3:22 PM</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Chat message right -->
                      <div class="d-flex justify-content-end text-end mb-1">
                        <div class="w-100">
                          <div class="d-flex flex-column align-items-end">
                            <div class="bg-primary text-white p-2 px-3 rounded-2">
                              Kind had stars cattle Good fill divide Multiply.
                            </div>
                            <div class="d-flex my-2">
                              <div class="small text-secondary">5:35 PM</div>
                              <div class="small ms-2"><i class="fa-solid fa-check"></i></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Chat time -->
                      <div class="text-center small my-2">2 New Messages</div>
                      <!-- Chat message left -->
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="@/assets/images/avatar/01.jpg"
                            alt=""
                          />
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div class="bg-light text-secondary p-2 px-3 rounded-2">
                                She'd Darkness beast don't deep One above.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Chat message left -->
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="@/assets/images/avatar/01.jpg"
                            alt=""
                          />
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div class="bg-light text-secondary p-2 px-3 rounded-2">
                                Signs creepeth replenish which fourth may Seasons.
                              </div>
                              <div class="small my-2">9:30 PM</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Chat conversation END -->
                  </div>
                  <!-- Conversation item END -->
                  <!-- Conversation item START -->
                  <div
                    class="fade tab-pane h-100"
                    id="chat-5"
                    role="tabpanel"
                    aria-labelledby="chat-5-tab"
                  >
                    <!-- Top avatar and status START -->
                    <div class="d-sm-flex justify-content-between align-items-center">
                      <div class="d-flex mb-2 mb-sm-0">
                        <div class="flex-shrink-0 avatar me-2">
                          <ul class="avatar-group avatar-group-three">
                            <li class="avatar avatar-xs">
                              <img
                                class="avatar-img rounded-circle"
                                src="@/assets/images/avatar/03.jpg"
                                alt="avatar"
                              />
                            </li>
                            <li class="avatar avatar-xs">
                              <img
                                class="avatar-img rounded-circle"
                                src="@/assets/images/avatar/04.jpg"
                                alt="avatar"
                              />
                            </li>
                            <li class="avatar avatar-xs">
                              <img
                                class="avatar-img rounded-circle"
                                src="@/assets/images/avatar/05.jpg"
                                alt="avatar"
                              />
                            </li>
                          </ul>
                        </div>
                        <div class="flex-grow-1 d-block">
                          <h6 class="mb-0 mt-1">Knight, Billy, Bryan</h6>
                          <div class="small text-secondary">Billy: Thank you!</div>
                        </div>
                      </div>
                      <div class="d-flex align-items-center">
                        <!-- Call button -->
                        <a
                          href="#!"
                          class="icon-md rounded-circle btn btn-primary-soft me-2 px-2"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Audio call"
                          ><i class="bi bi-telephone-fill"></i
                        ></a>
                        <a
                          href="#!"
                          class="icon-md rounded-circle btn btn-primary-soft me-2 px-2"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Video call"
                          ><i class="bi bi-camera-video-fill"></i
                        ></a>
                        <!-- Card action START -->
                        <div class="dropdown">
                          <a
                            class="icon-md rounded-circle btn btn-primary-soft me-2 px-2"
                            href="#"
                            id="chatcoversationDropdown5"
                            role="button"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="outside"
                            aria-expanded="false"
                            ><i class="bi bi-three-dots-vertical"></i
                          ></a>
                          <ul
                            class="dropdown-menu dropdown-menu-end"
                            aria-labelledby="chatcoversationDropdown5"
                          >
                            <li>
                              <a class="dropdown-item" href="#"
                                ><i class="bi bi-check-lg me-2 fw-icon"></i>Mark as read</a
                              >
                            </li>
                            <li>
                              <a class="dropdown-item" href="#"
                                ><i class="bi bi-mic-mute me-2 fw-icon"></i>Mute conversation</a
                              >
                            </li>
                            <li>
                              <a class="dropdown-item" href="#"
                                ><i class="bi bi-person-check me-2 fw-icon"></i>View profile</a
                              >
                            </li>
                            <li>
                              <a class="dropdown-item" href="#"
                                ><i class="bi bi-trash me-2 fw-icon"></i>Delete chat</a
                              >
                            </li>
                            <li class="dropdown-divider"></li>
                            <li>
                              <a class="dropdown-item" href="#"
                                ><i class="bi bi-archive me-2 fw-icon"></i>Archive chat</a
                              >
                            </li>
                          </ul>
                        </div>
                        <!-- Card action END -->
                      </div>
                    </div>
                    <!-- Top avatar and status END -->
                    <hr />
                    <!-- Chat conversation START -->
                    <div class="chat-conversation-content overflow-auto custom-scrollbar">
                      <!-- Chat time -->
                      <div class="text-center small my-2">Jul 16, 2022, 06:15 am</div>
                      <!-- Chat message left -->
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="@/assets/images/avatar/01.jpg"
                            alt=""
                          />
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div class="bg-light text-secondary p-2 px-3 rounded-2">
                                Night signs creeping yielding green Seasons.
                              </div>
                              <div class="small my-2">6:15 AM</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Chat message left -->
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="@/assets/images/avatar/02.jpg"
                            alt=""
                          />
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div class="bg-light text-secondary p-2 px-3 rounded-2">
                                Thank you for prompt response
                              </div>
                              <div class="small my-2">12:16 PM</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Chat message left -->
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="@/assets/images/avatar/03.jpg"
                            alt=""
                          />
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div class="bg-light text-secondary p-2 px-3 rounded-2">
                                Won't that fish him whose won't also.
                              </div>
                              <div class="small my-2">3:22 PM</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Chat time -->
                      <div class="text-center small my-2">2 New Messages</div>
                      <!-- Chat message left -->
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="@/assets/images/avatar/11.jpg"
                            alt=""
                          />
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div class="bg-light text-secondary p-2 px-3 rounded-2">
                                Thing they're fruit together forth day.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Chat message left -->
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="@/assets/images/avatar/11.jpg"
                            alt=""
                          />
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div class="bg-light text-secondary p-2 px-3 rounded-2">
                                Fly replenish third to said void life night yielding for heaven give
                                blessed spirit.
                              </div>
                              <div class="small my-2">9:30 PM</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Chat conversation END -->
                  </div>
                  <!-- Conversation item END -->
                  <!-- Conversation item START -->
                  <div
                    class="fade tab-pane h-100"
                    id="chat-6"
                    role="tabpanel"
                    aria-labelledby="chat-6-tab"
                  >
                    <!-- Top avatar and status START -->
                    <div class="d-sm-flex justify-content-between align-items-center">
                      <div class="d-flex mb-2 mb-sm-0">
                        <div class="flex-shrink-0 avatar me-2">
                          <ul class="avatar-group avatar-group-four">
                            <li class="avatar avatar-xxs">
                              <img
                                class="avatar-img rounded-circle"
                                src="@/assets/images/avatar/06.jpg"
                                alt="avatar"
                              />
                            </li>
                            <li class="avatar avatar-xxs">
                              <img
                                class="avatar-img rounded-circle"
                                src="@/assets/images/avatar/07.jpg"
                                alt="avatar"
                              />
                            </li>
                            <li class="avatar avatar-xxs">
                              <img
                                class="avatar-img rounded-circle"
                                src="@/assets/images/avatar/08.jpg"
                                alt="avatar"
                              />
                            </li>
                            <li class="avatar avatar-xxs">
                              <img
                                class="avatar-img rounded-circle"
                                src="@/assets/images/avatar/placeholder.jpg"
                                alt="avatar"
                              />
                            </li>
                          </ul>
                        </div>
                        <div class="flex-grow-1 d-block overflow-hidden">
                          <h6 class="mb-0 mt-1 text-truncate w-75">Webestica crew</h6>
                          <div class="small text-secondary">You: Okay thanks, everyone.</div>
                        </div>
                      </div>
                      <div class="d-flex align-items-center">
                        <!-- Call button -->
                        <a
                          href="#!"
                          class="icon-md rounded-circle btn btn-primary-soft me-2 px-2"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Audio call"
                          ><i class="bi bi-telephone-fill"></i
                        ></a>
                        <a
                          href="#!"
                          class="icon-md rounded-circle btn btn-primary-soft me-2 px-2"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Video call"
                          ><i class="bi bi-camera-video-fill"></i
                        ></a>
                        <!-- Card action START -->
                        <div class="dropdown">
                          <a
                            class="icon-md rounded-circle btn btn-primary-soft me-2 px-2"
                            href="#"
                            id="chatcoversationDropdown6"
                            role="button"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="outside"
                            aria-expanded="false"
                            ><i class="bi bi-three-dots-vertical"></i
                          ></a>
                          <ul
                            class="dropdown-menu dropdown-menu-end"
                            aria-labelledby="chatcoversationDropdown6"
                          >
                            <li>
                              <a class="dropdown-item" href="#"
                                ><i class="bi bi-check-lg me-2 fw-icon"></i>Mark as read</a
                              >
                            </li>
                            <li>
                              <a class="dropdown-item" href="#"
                                ><i class="bi bi-mic-mute me-2 fw-icon"></i>Mute conversation</a
                              >
                            </li>
                            <li>
                              <a class="dropdown-item" href="#"
                                ><i class="bi bi-person-check me-2 fw-icon"></i>View profile</a
                              >
                            </li>
                            <li>
                              <a class="dropdown-item" href="#"
                                ><i class="bi bi-trash me-2 fw-icon"></i>Delete chat</a
                              >
                            </li>
                            <li class="dropdown-divider"></li>
                            <li>
                              <a class="dropdown-item" href="#"
                                ><i class="bi bi-archive me-2 fw-icon"></i>Archive chat</a
                              >
                            </li>
                          </ul>
                        </div>
                        <!-- Card action END -->
                      </div>
                    </div>
                    <!-- Top avatar and status END -->
                    <hr />
                    <!-- Chat conversation START -->
                    <div class="chat-conversation-content custom-scrollbar">
                      <!-- Chat time -->
                      <div class="text-center small my-2">Jul 16, 2022, 06:15 am</div>
                      <!-- Chat message left -->
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="@/assets/images/avatar/02.jpg"
                            alt=""
                          />
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div class="bg-light text-secondary p-2 px-3 rounded-2">
                                Applauded no discovery in newspaper allowance am northward😍
                              </div>
                              <div class="small my-2">6:15 AM</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Chat message left -->
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="@/assets/images/avatar/03.jpg"
                            alt=""
                          />
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div class="bg-light text-secondary p-2 px-3 rounded-2">
                                Please find the attached updated files
                              </div>
                              <!-- Files START -->
                              <!-- Files END -->
                              <div class="small my-2">12:16 PM</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Chat message left -->
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="@/assets/images/avatar/04.jpg"
                            alt=""
                          />
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div class="bg-light text-secondary p-2 px-3 rounded-2">
                                How promotion excellent 🥰 curiosity yet attempted happiness Gay
                                prosperous impression.
                              </div>
                              <div class="small my-2">3:22 PM</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Chat time -->
                      <div class="text-center small my-2">2 New Messages</div>
                      <!-- Chat message left -->
                      <div class="d-flex mb-2">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="@/assets/images/avatar/05.jpg"
                            alt=""
                          />
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div class="bg-light text-secondary p-2 px-3 rounded-2">
                                Traveling alteration impression six all uncommonly Chamber hearing
                                inhabit joy highest privat.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Chat message left -->
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="@/assets/images/avatar/06.jpg"
                            alt=""
                          />
                        </div>
                        <div class="flex-grow-1">
                          <div class="w-100">
                            <div class="d-flex flex-column align-items-start">
                              <div class="bg-light text-secondary p-2 px-3 rounded-2">
                                Attempted happiness Gay prosperous impression.
                              </div>
                              <div class="small my-2">3:22 PM</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Chat message left -->
                      <div class="d-flex mb-1">
                        <div class="flex-shrink-0 avatar avatar-xs me-2">
                          <img
                            class="avatar-img rounded-circle"
                            src="@/assets/images/avatar/07.jpg"
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
                    <!-- Chat conversation END -->
                  </div>
                  <!-- Conversation item END -->
                </div>
              </div>
              <div class="card-footer" style="position: absolute; bottom: 0; width: 100%">
                <div class="d-sm-flex align-items-end">
                  <textarea
                    class="form-control mb-sm-0 mb-3"
                    data-autoresize
                    placeholder="Mesaj yaz.."
                    rows="1"
                  ></textarea>
                  <button class="btn btn-sm btn-danger-soft ms-sm-2">
                    <i class="fa-solid fa-face-smile fs-6"></i>
                  </button>
                  <button class="btn btn-sm btn-secondary-soft ms-2">
                    <i class="fa-solid fa-paperclip fs-6"></i>
                  </button>
                  <button class="btn btn-sm btn-primary ms-2">
                    <i class="fa-solid fa-paper-plane fs-6"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- Chat conversation END -->
        </div>
        <!-- Row END -->
        <!-- =======================
                Chat END -->
      </div>
      <!-- Container END -->
    </main>
  </fragment>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  name: 'Message',

  components: {
    Header
  }
}
</script>

<style></style>
