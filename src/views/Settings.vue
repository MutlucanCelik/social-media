<template>
  <fragment>
    <Header />
    <main>
      <!-- Container START -->
      <div class="container">
        <div class="row">
          <!-- Sidenav START -->
          
          <!-- Sidenav END -->

          <!-- Main content START -->
          <div class="col-lg-6 vstack gap-4">
            <!-- Setting Tab content START -->
            <div class="tab-content py-0 mb-0">
              <!-- Account setting tab START -->
              <div class="tab-pane show active fade" id="nav-setting-tab-1">
                <!-- Account settings START -->
                <div class="card mb-4">
                  <!-- Title START -->
                  <div class="card-header border-0 pb-0">
                    <h1 class="h5 card-title">Hesap Ayarları</h1>
                  </div>
                  <!-- Card header START -->
                  <!-- Card body START -->
                  <div class="card-body">
                    <!-- Form settings START -->
                    <form class="row g-3">
                      <!-- First name -->
                      <div class="col-lg-6">
                        <label class="form-label">Ad</label>
                        <input type="text" class="form-control" placeholder="" value="Sam" />
                      </div>
                      <!-- Last name -->
                      <div class="col-lg-6">
                        <label class="form-label">Soyad</label>
                        <input type="text" class="form-control" placeholder="" value="Lanson" />
                      </div>
                      <!-- Additional name -->
                      <!-- User name -->
                      <div class="col-sm-6">
                        <label class="form-label">Kullanıcı adı</label>
                        <input type="text" class="form-control" placeholder="" value="@samlanson" />
                      </div>
                      <!-- Birthday -->
                      <div class="col-lg-6">
                        <label class="form-label">Birthday </label>
                        <input type="text" class="form-control flatpickr" value="12/12/1990" />
                      </div>
                      <!-- Phone number -->
                      <div class="col-sm-6">
                        <label class="form-label">Telefon numarası</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder=""
                          value="(678) 324-1251"
                        />
                       
                      </div>
                      <!-- Phone number -->
                      <div class="col-sm-6">
                        <label class="form-label">Email</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder=""
                          value="sam@webestica.com"
                        />
                       
                      </div>
                      <!-- Page information -->
                      <div class="col-12">
                        <label class="form-label">Genel bakış</label>
                        <textarea
                          class="form-control"
                          rows="4"
                          placeholder="Description (Required)"
                        >
Interested has all Devonshire difficulty gay assistance joy. Handsome met debating sir dwelling age material. As style lived he worse dried. Offered related so visitors we private removed. Moderate do subjects to distance.</textarea
                        >
                        <small>Karakter limiti: 300</small>
                      </div>
                      <!-- Button  -->
                      <div class="col-12 text-end">
                        <button type="submit" class="btn btn-sm btn-primary mb-0">
                          Kaydet
                        </button>
                      </div>
                    </form>
                    <!-- Settings END -->
                  </div>
                  <!-- Card body END -->
                </div>
                <!-- Account settings END -->

                <!-- Change your password START -->
                <div class="card">
                  <!-- Title START -->
                  <div class="card-header border-0 pb-0">
                    <h5 class="card-title">Şifre Değiştir</h5>
                  </div>
                  <!-- Title START -->
                  <div class="card-body">
                    <!-- Settings START -->
                    <form class="row g-3">
                      <!-- Current password -->
                      <div class="col-12">
                        <label class="form-label">Şifre</label>
                        <input type="text" class="form-control" placeholder="" />
                      </div>
                      <!-- New password -->
                      <div class="col-12">
                        <label class="form-label">Yeni şifre</label>
                        <!-- Input group -->
                        <div class="input-group">
                          <input
                            class="form-control fakepassword"
                            type="password"
                            id="psw-input"
                          />
                          <span class="input-group-text p-0">
                            <i
                              class="fakepasswordicon fa-solid fa-eye-slash cursor-pointer p-2 w-40px"
                            ></i>
                          </span>
                        </div>
                        <!-- Pswmeter -->
                        <div id="pswmeter" class="mt-2"></div>
                        <div id="pswmeter-message" class="rounded mt-1"></div>
                      </div>
                      <!-- Confirm password -->
                      <div class="col-12">
                        <label class="form-label">Şifre kontrol</label>
                        <input type="text" class="form-control" placeholder="" />
                      </div>
                      <!-- Button  -->
                      <div class="col-12 text-end">
                        <button type="submit" class="btn btn-primary mb-0">Kaydet</button>
                      </div>
                    </form>
                    <!-- Settings END -->
                  </div>
                </div>
                <!-- Card END -->
              </div>
              <!-- Account setting tab END -->

              <!-- Notification tab START -->
              <div class="tab-pane fade" id="nav-setting-tab-2">
                <!-- Notification START -->
                <div class="card">
                  <!-- Card header START -->
                  <div class="card-header border-0 pb-0">
                    <h5 class="card-title">Notification</h5>
                    <p class="mb-0">
                      Tried law yet style child. The bore of true of no be deal. Frequently
                      sufficient to be unaffected. The furnished she concluded depending procuring
                      concealed.
                    </p>
                  </div>
                  <!-- Card header START -->
                  <!-- Card body START -->
                  <div class="card-body pb-0">
                    <!-- Notification START -->
                    <ul class="list-group list-group-flush">
                      <!-- Notification list item -->
                      <li
                        class="list-group-item d-flex justify-content-between align-items-center px-0 py-3"
                      >
                        <div class="me-2">
                          <h6 class="mb-0">Likes and Comments</h6>
                          <p class="small mb-0">Joy say painful removed reached end.</p>
                        </div>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="NotiSwitchCheckChecked"
                            checked
                          />
                        </div>
                      </li>
                      <!-- Notification list item -->
                      <li
                        class="list-group-item d-flex justify-content-between align-items-center px-0 py-3"
                      >
                        <div class="me-2">
                          <h6 class="mb-0">Reply to My comments</h6>
                          <p class="small mb-0">Ask a quick six seven offer see among.</p>
                        </div>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="NotiSwitchCheckChecked2"
                            checked
                          />
                        </div>
                      </li>
                      <!-- Notification list item -->
                      <li
                        class="list-group-item d-flex justify-content-between align-items-center px-0 py-3"
                      >
                        <div class="me-2">
                          <h6 class="mb-0">Subscriptions</h6>
                          <p class="small mb-0">Preference any astonished unreserved Mrs.</p>
                        </div>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="NotiSwitchCheckChecked3"
                          />
                        </div>
                      </li>
                      <!-- Notification list item -->
                      <li
                        class="list-group-item d-flex justify-content-between align-items-center px-0 py-3"
                      >
                        <div class="me-2">
                          <h6 class="mb-0">Birthdays</h6>
                          <p class="small mb-0">Contented he gentleman agreeable do be</p>
                        </div>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="NotiSwitchCheckChecked4"
                          />
                        </div>
                      </li>
                      <!-- Notification list item -->
                      <li
                        class="list-group-item d-flex justify-content-between align-items-center px-0 py-3"
                      >
                        <div class="me-2">
                          <h6 class="mb-0">Events</h6>
                          <p class="small mb-0">Fulfilled direction use continually.</p>
                        </div>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="NotiSwitchCheckChecked5"
                            checked
                          />
                        </div>
                      </li>
                      <!-- Notification list item -->
                      <li class="list-group-item px-0 py-3">
                        <!-- Accordion START -->
                        <div class="accordion accordion-flush border-0" id="emailNotifications">
                          <!-- Accordion item -->
                          <div class="accordion-item bg-transparent">
                            <h2 class="accordion-header" id="flush-headingOne">
                              <a
                                href="#!"
                                class="accordion-button mb-0 p-0 collapsed bg-transparent shadow-none"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne"
                                aria-expanded="false"
                                aria-controls="flush-collapseOne"
                              >
                                <span>
                                  <span class="mb-0 h6 d-block">Email notifications</span>
                                  <small class="small mb-0 text-secondary"
                                    >As hastened oh produced prospect.
                                  </small>
                                </span>
                              </a>
                            </h2>
                            <div
                              id="flush-collapseOne"
                              class="accordion-collapse collapse"
                              aria-labelledby="flush-headingOne"
                              data-bs-parent="#emailNotifications"
                            >
                              <div class="accordion-body p-0 pt-3">
                                <!-- Notification list item -->
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="NotiSwitchCheckChecked6"
                                    checked
                                  />
                                  <label class="form-check-label" for="NotiSwitchCheckChecked6">
                                    Product emails
                                  </label>
                                </div>
                                <!-- Notification list item -->
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="NotiSwitchCheckChecke7"
                                  />
                                  <label class="form-check-label" for="NotiSwitchCheckChecke7">
                                    Feedback emails
                                  </label>
                                </div>
                                <hr />
                                <div class="mt-3">
                                  <h6>Email frequency</h6>
                                  <!-- Notification list item -->
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      name="NotiRadio"
                                      id="NotiRadio1"
                                    />
                                    <label class="form-check-label" for="NotiRadio1"> Daily </label>
                                  </div>
                                  <!-- Notification list item -->
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      name="NotiRadio"
                                      id="NotiRadio2"
                                      checked
                                    />
                                    <label class="form-check-label" for="NotiRadio2">
                                      Weekly
                                    </label>
                                  </div>
                                  <!-- Notification list item -->
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      name="NotiRadio"
                                      id="NotiRadio3"
                                    />
                                    <label class="form-check-label" for="NotiRadio3">
                                      Periodically
                                    </label>
                                  </div>
                                  <!-- Notification list item -->
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      name="NotiRadio"
                                      id="NotiRadio4"
                                      checked
                                    />
                                    <label class="form-check-label" for="NotiRadio4"> Off </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- Accordion END -->
                      </li>
                      <!-- Notification list item -->
                      <li
                        class="list-group-item d-flex justify-content-between align-items-center px-0 py-3"
                      >
                        <div class="me-2">
                          <h6 class="mb-0">Push notifications</h6>
                          <p class="small mb-0">Rendered six say his striking confined.</p>
                        </div>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="NotiSwitchCheckChecked8"
                            checked
                          />
                        </div>
                      </li>
                      <!-- Notification list item -->
                      <li
                        class="list-group-item d-flex justify-content-between align-items-center px-0 py-3"
                      >
                        <div class="me-2">
                          <h6 class="mb-0">
                            Weekly account summary
                            <span class="badge bg-primary smaller"> Pro only</span>
                          </h6>
                          <p class="small mb-0">Rendered six say his striking confined.</p>
                        </div>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="NotiSwitchCheckChecked9"
                            disabled
                          />
                        </div>
                      </li>
                    </ul>
                    <!-- Notification END -->
                  </div>
                  <!-- Card body END -->
                  <!-- Button save -->
                  <div class="card-footer pt-0 text-end border-0">
                    <button type="submit" class="btn btn-sm btn-primary mb-0">Save changes</button>
                  </div>
                </div>
                <!-- Notification END -->
              </div>
              <!-- Notification tab END -->

              <!-- Privacy and safety tab START -->
              <div class="tab-pane fade" id="nav-setting-tab-3">
                <!-- Privacy and safety START -->
                <div class="card">
                  <!-- Card header START -->
                  <div class="card-header border-0 pb-0">
                    <h5 class="card-title">Privacy and safety</h5>
                    <p class="mb-0">
                      See information about your account, download an archive of your data, or learn
                      about your account deactivation options
                    </p>
                  </div>
                  <!-- Card header START -->
                  <!-- Card body START -->
                  <div class="card-body">
                    <!-- Privacy START -->
                    <ul class="list-group">
                      <!-- Privacy item -->
                      <li
                        class="list-group-item d-md-flex justify-content-between align-items-start"
                      >
                        <div class="me-md-3">
                          <h6 class="mb-0">Use two-factor authentication</h6>
                          <p class="small mb-0">
                            Unaffected occasional thoroughly. Adieus it no wonders spirit houses.
                          </p>
                        </div>
                        <button class="btn btn-primary-soft btn-sm mt-1 mt-md-0">
                          <i class="bi bi-pencil-square"></i> Change
                        </button>
                      </li>

                      <!-- Privacy item -->
                      <li
                        class="list-group-item d-md-flex justify-content-between align-items-start"
                      >
                        <div class="me-md-3">
                          <h6 class="mb-0">Login activity</h6>
                          <p class="small mb-0">Select the language you use on social</p>
                        </div>
                        <button
                          class="btn btn-primary-soft btn-sm mt-1 mt-md-0"
                          data-bs-toggle="modal"
                          data-bs-target="#modalLoginActivity"
                        >
                          <i class="bi bi-eye"></i> View
                        </button>
                      </li>

                      <!-- Privacy item -->
                      <li
                        class="list-group-item d-md-flex justify-content-between align-items-start"
                      >
                        <div class="me-md-3">
                          <h6 class="mb-0">Manage your data and activity</h6>
                          <p class="small mb-0">Select a language for translation</p>
                        </div>
                        <button class="btn btn-primary-soft btn-sm mt-1 mt-md-0">
                          <i class="bi bi-pencil-square"></i> Change
                        </button>
                      </li>

                      <!-- Privacy item -->
                      <li
                        class="list-group-item d-md-flex justify-content-between align-items-start"
                      >
                        <div class="me-md-3">
                          <h6 class="mb-0">Search history</h6>
                          <p class="small mb-0">Choose to autoplay videos on social</p>
                        </div>
                        <button class="btn btn-primary-soft btn-sm mt-1 mt-md-0">
                          <i class="bi bi-pencil-square"></i> Change
                        </button>
                      </li>

                      <!-- Privacy item -->
                      <li
                        class="list-group-item d-md-flex justify-content-between align-items-start"
                      >
                        <div class="me-md-3">
                          <h6 class="mb-0">Permitted services</h6>
                          <p class="small mb-0">Choose if this feature appears on your profile</p>
                        </div>
                        <button class="btn btn-primary-soft btn-sm mt-1 mt-md-0">
                          <i class="bi bi-pencil-square"></i> Change
                        </button>
                      </li>
                    </ul>
                    <!-- Privacy END -->
                  </div>
                  <!-- Card body END -->
                  <!-- Button save -->
                  <div class="card-footer pt-0 text-end border-0">
                    <button type="submit" class="btn btn-sm btn-primary mb-0">Save changes</button>
                  </div>
                </div>
                <!-- Privacy and safety END -->
              </div>
              <!-- Privacy and safety tab END -->

              <!-- Communications tab START -->
              <div class="tab-pane fade" id="nav-setting-tab-4">
                <!-- Communications START -->
                <div class="card">
                  <!-- Title START -->
                  <div class="card-header border-0 pb-0">
                    <h5 class="card-title">Who can connect with you?</h5>
                    <p class="mb-0">
                      He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire
                      difficulty gay assistance joy. Unaffected at ye of compliment alteration to.
                    </p>
                  </div>
                  <!-- Title START -->
                  <!-- Card body START -->
                  <div class="card-body">
                    <!-- Accordion START -->
                    <div class="accordion" id="communications">
                      <!-- Accordion item -->
                      <div class="accordion-item bg-transparent">
                        <h2 class="accordion-header" id="communicationOne">
                          <button
                            class="accordion-button mb-0 h6"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#communicationcollapseOne"
                            aria-expanded="true"
                            aria-controls="communicationcollapseOne"
                          >
                            Connection request
                          </button>
                        </h2>
                        <!-- Accordion info -->
                        <div
                          id="communicationcollapseOne"
                          class="accordion-collapse collapse show"
                          aria-labelledby="communicationOne"
                          data-bs-parent="#communications"
                        >
                          <div class="accordion-body">
                            <!-- Notification list item -->
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="ComRadio"
                                id="ComRadio5"
                              />
                              <label class="form-check-label" for="ComRadio5">
                                Everyone on social (recommended)
                              </label>
                            </div>
                            <!-- Notification list item -->
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="ComRadio"
                                id="ComRadio2"
                                checked
                              />
                              <label class="form-check-label" for="ComRadio2">
                                Only people who know your email address
                              </label>
                            </div>
                            <!-- Notification list item -->
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="ComRadio"
                                id="ComRadio3"
                              />
                              <label class="form-check-label" for="ComRadio3">
                                Only people who appear in your mutual connection list
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Accordion item -->
                      <div class="accordion-item bg-transparent">
                        <h2 class="accordion-header" id="communicationTwo">
                          <button
                            class="accordion-button mb-0 h6 collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#communicationcollapseTwo"
                            aria-expanded="false"
                            aria-controls="communicationcollapseTwo"
                          >
                            Who can message you
                          </button>
                        </h2>
                        <!-- Accordion info -->
                        <div
                          id="communicationcollapseTwo"
                          class="accordion-collapse collapse"
                          aria-labelledby="communicationTwo"
                          data-bs-parent="#communications"
                        >
                          <div class="accordion-body">
                            <ul class="list-group list-group-flush">
                              <!-- Notification list item -->
                              <li
                                class="list-group-item d-sm-flex justify-content-between align-items-center px-0 py-1 border-0"
                              >
                                <div class="me-2">
                                  <p class="mb-0">Enable message request notifications</p>
                                </div>
                                <div class="form-check form-switch">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="comSwitchCheckChecked"
                                  />
                                </div>
                              </li>
                              <!-- Notification list item -->
                              <li
                                class="list-group-item d-sm-flex justify-content-between align-items-center px-0 py-1 border-0"
                              >
                                <div class="me-2">
                                  <p class="mb-0">Allow connections to add you on group</p>
                                </div>
                                <div class="form-check form-switch">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="comSwitchCheckChecked2"
                                    checked
                                  />
                                </div>
                              </li>
                              <!-- Notification list item -->
                              <li
                                class="list-group-item d-sm-flex justify-content-between align-items-center px-0 py-1 border-0"
                              >
                                <div class="me-2">
                                  <p class="mb-0">Allow Sponsored Messages</p>
                                  <p class="small">
                                    Your personal information is safe with our marketing partners
                                    unless you respond to their Sponsored Messages
                                  </p>
                                </div>
                                <div class="form-check form-switch">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="comSwitchCheckChecked3"
                                    checked
                                  />
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <!-- Accordion item -->
                      <div class="accordion-item bg-transparent">
                        <h2 class="accordion-header" id="communicationThree">
                          <button
                            class="accordion-button mb-0 h6 collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#communicationcollapseThree"
                            aria-expanded="false"
                            aria-controls="communicationcollapseThree"
                          >
                            How people can find you
                          </button>
                        </h2>
                        <!-- Accordion info -->
                        <div
                          id="communicationcollapseThree"
                          class="accordion-collapse collapse"
                          aria-labelledby="communicationThree"
                          data-bs-parent="#communications"
                        >
                          <div class="accordion-body">
                            <ul class="list-group list-group-flush">
                              <!-- Notification list item -->
                              <li
                                class="list-group-item d-sm-flex justify-content-between align-items-center px-0 py-1 border-0"
                              >
                                <div class="me-2">
                                  <p class="mb-0">Allow search engines to show your profile?</p>
                                </div>
                                <div class="form-check form-switch">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="comSwitchCheckChecked4"
                                    checked
                                  />
                                </div>
                              </li>
                              <!-- Notification list item -->
                              <li
                                class="list-group-item d-sm-flex justify-content-between align-items-center px-0 py-1 border-0"
                              >
                                <div class="me-2">
                                  <p class="mb-0">Allow people to search by your email address?</p>
                                </div>
                                <div class="form-check form-switch">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="comSwitchCheckChecked5"
                                  />
                                </div>
                              </li>
                              <!-- Notification list item -->
                              <li
                                class="list-group-item d-sm-flex justify-content-between align-items-center px-0 py-1 border-0"
                              >
                                <div class="me-2">
                                  <p class="mb-0">Allow Sponsored Messages</p>
                                  <p class="small">
                                    Your personal information is safe with our marketing partners
                                    unless you respond to their Sponsored Messages
                                  </p>
                                </div>
                                <div class="form-check form-switch">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="comSwitchCheckChecked6"
                                    checked
                                  />
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Accordion END -->
                  </div>
                  <!-- Card body END -->
                  <!-- Button save -->
                  <div class="card-footer pt-0 text-end border-0">
                    <button type="submit" class="btn btn-sm btn-primary mb-0">Save changes</button>
                  </div>
                </div>
                <!-- Communications  END -->
              </div>
              <!-- Communications tab END -->

              <!-- Messaging tab START -->
              <div class="tab-pane fade" id="nav-setting-tab-5">
                <!-- Messaging privacy START -->
                <div class="card mb-4">
                  <!-- Title START -->
                  <div class="card-header border-0 pb-0">
                    <h5 class="card-title">Messaging privacy settings</h5>
                    <p class="mb-0">
                      As young ye hopes no he place means. Partiality diminution gay yet entreaties
                      admiration. In mention perhaps attempt pointed suppose. Unknown ye chamber of
                      warrant of Norland arrived.
                    </p>
                  </div>
                  <!-- Title START -->
                  <div class="card-body">
                    <!-- Settings style START -->
                    <ul class="list-group list-group-flush">
                      <!-- Message list item -->
                      <li
                        class="list-group-item d-flex justify-content-between align-items-center px-0"
                      >
                        <div class="me-2">
                          <h6 class="mb-0">Enable message request notifications</h6>
                        </div>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="msgSwitchCheckChecked"
                            checked
                          />
                        </div>
                      </li>
                      <!-- Message list item -->
                      <li
                        class="list-group-item d-flex justify-content-between align-items-center px-0"
                      >
                        <div class="me-2">
                          <h6 class="mb-0">Invitations from your network</h6>
                        </div>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="msgSwitchCheckChecked2"
                            checked
                          />
                        </div>
                      </li>
                      <!-- Message list item -->
                      <li
                        class="list-group-item d-flex justify-content-between align-items-center px-0"
                      >
                        <div class="me-2">
                          <h6 class="mb-0">Allow connections to add you on group</h6>
                        </div>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="msgSwitchCheckChecked3"
                          />
                        </div>
                      </li>
                      <!-- Message list item -->
                      <li
                        class="list-group-item d-flex justify-content-between align-items-center px-0"
                      >
                        <div class="me-2">
                          <h6 class="mb-0">Reply to comments</h6>
                        </div>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="msgSwitchCheckChecked4"
                          />
                        </div>
                      </li>
                      <!-- Message list item -->
                      <li
                        class="list-group-item d-flex justify-content-between align-items-center px-0"
                      >
                        <div class="me-2">
                          <h6 class="mb-0">Messages from activity on my page or channel</h6>
                        </div>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="msgSwitchCheckChecked5"
                            checked
                          />
                        </div>
                      </li>
                      <!-- Message list item -->
                      <li
                        class="list-group-item d-flex justify-content-between align-items-center px-0"
                      >
                        <div class="me-2">
                          <h6 class="mb-0">Personalise tips for my page</h6>
                        </div>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="msgSwitchCheckChecked6"
                            checked
                          />
                        </div>
                      </li>
                    </ul>
                    <!-- Message END -->
                  </div>
                  <!-- Button save -->
                  <div class="card-footer pt-0 text-end border-0">
                    <button type="submit" class="btn btn-sm btn-primary mb-0">Save changes</button>
                  </div>
                </div>
                <!-- Messaging privacy END -->
                <!-- Messaging experience START -->
                <div class="card">
                  <!-- Card header START -->
                  <div class="card-header border-0 pb-0">
                    <h5 class="card-title">Messaging experience</h5>
                    <p class="mb-0">Arrived off she elderly beloved him affixed noisier yet.</p>
                  </div>
                  <!-- Card header START -->
                  <!-- Card body START -->
                  <div class="card-body">
                    <!-- Message START -->
                    <ul class="list-group list-group-flush">
                      <!-- Message list item -->
                      <li
                        class="list-group-item d-sm-flex justify-content-between align-items-center px-0"
                      >
                        <div class="me-2">
                          <h6 class="mb-0">Read receipts and typing indicators</h6>
                        </div>
                        <button class="btn btn-primary-soft btn-sm mt-1 mt-md-0">
                          <i class="bi bi-pencil-square"></i> Change
                        </button>
                      </li>
                      <!-- Message list item -->
                      <li
                        class="list-group-item d-sm-flex justify-content-between align-items-center px-0"
                      >
                        <div class="me-2">
                          <h6 class="mb-0">Message suggestions</h6>
                        </div>
                        <button class="btn btn-primary-soft btn-sm mt-1 mt-md-0">
                          <i class="bi bi-pencil-square"></i> Change
                        </button>
                      </li>
                      <!-- Message list item -->
                      <li
                        class="list-group-item d-sm-flex justify-content-between align-items-center px-0"
                      >
                        <div class="me-2">
                          <h6 class="mb-0">Message nudges</h6>
                        </div>
                        <button class="btn btn-primary-soft btn-sm mt-1 mt-md-0">
                          <i class="bi bi-pencil-square"></i> Change
                        </button>
                      </li>
                    </ul>
                    <!-- Message END -->
                  </div>
                  <!-- Card body END -->
                  <!-- Button save -->
                  <div class="card-footer pt-0 text-end border-0">
                    <button type="submit" class="btn btn-sm btn-primary mb-0">Save changes</button>
                  </div>
                </div>
                <!-- Messaging experience END -->
              </div>
              <!-- Messaging tab END -->

              <!-- Close account tab START -->
              <div class="tab-pane fade" id="nav-setting-tab-6">
                <!-- Card START -->
                <div class="card">
                  <!-- Card header START -->
                  <div class="card-header border-0 pb-0">
                    <h5 class="card-title">Delete account</h5>
                    <p class="mb-0">
                      He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire
                      difficulty gay assistance joy. Unaffected at ye of compliment alteration to.
                    </p>
                  </div>
                  <!-- Card header START -->
                  <!-- Card body START -->
                  <div class="card-body">
                    <!-- Delete START -->
                    <h6>Before you go...</h6>
                    <ul>
                      <li>Take a backup of your data <a href="#">Here</a></li>
                      <li>If you delete your account, you will lose your all data.</li>
                    </ul>
                    <div class="form-check form-check-md my-4">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="deleteaccountCheck"
                      />
                      <label class="form-check-label" for="deleteaccountCheck"
                        >Yes, I'd like to delete my account</label
                      >
                    </div>
                    <a href="#" class="btn btn-success-soft btn-sm mb-2 mb-sm-0">Keep my account</a>
                    <a href="#" class="btn btn-danger btn-sm mb-0">Delete my account</a>
                    <!-- Delete END -->
                  </div>
                  <!-- Card body END -->
                </div>
                <!-- Card END -->
              </div>
              <!-- Close account tab END -->
            </div>
            <!-- Setting Tab content END -->
          </div>
        </div>
        <!-- Row END -->
      </div>
      <!-- Container END -->
    </main>
  </fragment>
</template>

<script>
import Header from '@/components/Header.vue'
import CopyRight from '@/components/CopyRight.vue'
import { useStore } from 'vuex'
import { onMounted, ref } from 'vue'
export default {
  name: 'Settings',

  components: {
    Header,
    CopyRight
  },

  setup() {
    const store = useStore() // Vuex store'u alın

    let currentUser = ref("") // Vuex getter'ını kullanarak kullanıcıyı alın
    

    onMounted(async() => {
      await store.dispatch('fetchUser')
      currentUser.value = store.getters.currentUser
      console.log(currentUser.value)
    })

    


    return {
      currentUser // Component içinde kullanıcıyı dışarıya döndür
    }
  }
}
</script>

<style></style>
