<template>
    <section class="section">
        <div class="columns">
            <div class="column is-4 is-offset-4">
                <h2 class="title has-text-centered">Register</h2>

                <form method="POST" @submit.prevent="register">
                    <div class="field">
                        <label class="label">Fullname</label>

                        <p class="control">
                            <input
                                type="text"
                                class="input"
                                v-model="fullname">
                        </p>
                    </div>

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
                        <button class="button is-link is-fullwidth is-uppercase">SignUp</button>
                    </p>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
import { REGISTER_MUTATION } from "@/graphql";
export default {
  name: "Register",
  data() {
    return {
      fullname: "",
      email: "",
      password: ""
    };
  },
  methods: {
    register() {
      this.$apollo
        .mutate({
          mutation: REGISTER_MUTATION,
          variables: {
            fullname: this.fullname,
            email: this.email,
            password: this.password
          }
        })
        .then(response => {
          // redirect to login page
          this.$router.replace("/login");
        });
    }
  }
};
</script>
