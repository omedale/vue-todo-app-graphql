<template>
 <div>
    <todo
     v-if="isUserLoggedIn"
     />
    <home-body
      v-if="!isUserLoggedIn"
     />
 </div>
</template>

<script>
import { mapState } from "vuex";
import Todo from "@/components/Todo";
import HomeBody from "@/components/HomeBody";
export default {
  components: {
    Todo,
    HomeBody
  },
  data() {
    return {
      loggedIn: false
    };
  },
  computed: {
    ...mapState(["isUserLoggedIn", "user"])
  },
  methods: {
    init() {
      if (this.isUserLoggedIn) {
        this.loggedIn = true;
      }
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style scoped>

</style>
