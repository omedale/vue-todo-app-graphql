<template>
    <section class="section">
        <div class="columns">
            <div class="column is-4 is-offset-4">
                <h2 class="title has-text-centered">Login</h2>

                 <article
                 v-if="this.error"
                 class="message is-danger">
                    <div class="message-body">
                        Invalid credentials
                    </div>
                  </article>

                <form method="POST" @submit.prevent="login">
                    <div class="field">
                        <label class="label">E-Mail Address</label>

                        <p class="control">
                            <input
                                type="email"
                                class="input"
                                v-model="email">
                        </p>
                    </div>

                    <div class="field">
                        <label class="label">Password</label>

                        <p class="control">
                            <input
                                type="password"
                                class="input"
                                v-model="password">
                        </p>
                    </div>

                    <p class="control">
                        <button class="button is-link is-fullwidth is-uppercase">Login</button>
                    </p>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
import { SIGNIN_MUTATION } from "@/graphql";
import { retry } from 'async';
export default {
  name: "LogIn",
  data() {
    return {
      email: "",
      password: "",
      error: false
    };
  },
  methods: {
    login() {
      this.$apollo
        .mutate({
          mutation: SIGNIN_MUTATION,
          variables: {
            email: this.email,
            password: this.password
          }
        })
        .then(response => {
          if(response.data.signinUser !== null) {
            this.$store.dispatch('setToken', response.data.signinUser.token)
            this.$store.dispatch('setUser', response.data.signinUser.user)
            this.$router.replace("/");
            return;
          }
          this.error = true;
          return;
        });
    }
  }
};
</script>
