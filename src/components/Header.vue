<template>
  <nav class="navbar is-transparent">
  <div class="navbar-brand">
    <a class="navbar-item" href="#">
      <h3>OMEDALE</h3>
    </a>
    <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" href="#">
        <router-link :to="{name: 'home'}">
               Home
          </router-link>
      </a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p
            v-if="!isUserLoggedIn"
           class="control">
              <router-link class="button is-link" :to="{name: 'register'}">
               <span>Register</span>
               </router-link>
          </p>
          <p
            v-if="!isUserLoggedIn"
            class="control">
            <router-link class="button is-link" :to="{name: 'login'}">
               <span>Login</span>
               </router-link>
          </p>
          <p
            v-if="isUserLoggedIn"
            class="control">
            <a @click="logout" class="button is-link" href="#">
              <span>Log Out</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
     ...mapState([
      'isUserLoggedIn',
    ])
  },
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'home'
      })
    }
  }
}
</script>

<style scoped>

</style>
