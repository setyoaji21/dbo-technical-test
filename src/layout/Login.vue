<template>
  <section class="vh-100">
    <div class="container-fluid h-custom">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-9 col-lg-6 col-xl-5">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            class="img-fluid" alt="Sample image">
        </div>
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form>

            <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
              <h1 class="lead fw-normal mb-5 me-3"><strong>DBO Technical Test</strong></h1>
            </div>

            <div class="d-flex flex-row">
              <b-alert show variant="warning">
                <h4 class="alert-heading">Perhatian!</h4>
                <p>
                  Mohon masukkan username <b>admin123</b> dan password <b>admin123</b>.
                </p>
                <hr>
              </b-alert>
            </div>



            <b-form-group
              id="input-username"
              label="Username"
              label-for="input-username"
            >
              <b-form-input
                id="input-username"
                v-model="user.username"
                type="text"
                placeholder="Masukkan username"
                required
                :state="inputState"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-password"
              label="Password"
              label-for="input-password"
            >
              <b-form-input
                id="input-password"
                v-model="user.password"
                type="password"
                placeholder="Masukkan password"
                required
                :state="inputState"
              ></b-form-input>
            </b-form-group>

            <div class="text-center text-lg-start mt-4 pt-2">
              <b-button
                @click="loadUserPermissions"
                variant="primary"
                size="lg"
                style="padding-left: 2.5rem; padding-right: 2.5rem;"
              >
                Login
              </b-button>
            </div>

          </form>
        </div>
      </div>
    </div>
    <div
      class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
      <!-- Copyright -->
      <div class="text-white mb-3 mb-md-0">
        Copyright © 2023. All rights reserved.
      </div>
      <!-- Copyright -->
    </div>
  </section>
</template>

<script>
import users from '@/assets/locales/users.json';
export default {
  data () {
    return {
      users: users,
      user: {
        username: null,
        password: null
      },
      inputState: false,
    }
  },
  methods: {
    loadUserPermissions () {
      let selectedUser = users.filter((account) => {
        return account.username === this.user.username
      })


      if (selectedUser.length && (selectedUser[0].password === this.user.password)) {
        this.$cookies.set('token', this.user.username)
      } else {
        this.inputState = false
        this.$cookies.remove('token')
      }

      location.reload()
    }
  }
}
</script>

<style>
.divider:after,
.divider:before {
  content: "";
  flex: 1;
  height: 1px;
  background: #eee;
}
.h-custom {
  height: calc(100% - 73px);
}

@media (max-width: 450px) {
  .h-custom {
    height: 100%;
  }
}
</style>