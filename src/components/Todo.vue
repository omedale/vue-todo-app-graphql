<template>
<div>
  <div class="container is-fluid padding-30px">
    <div class="notification">
        <nav class="panel">
        <p class="panel-heading">
          TODO
        </p>
        <div class="panel-block">
          <p class="control has-icons-left">
            <input class="input is-small" type="text" placeholder="search">
            <span class="icon is-small is-left">
              <i class="fas fa-search"></i>
            </span>
          </p>
        </div>

        <a
           v-for="todo in userTodos"
           :key="todo.id"
         class="panel-block is-active">
          <span class="panel-icon">
            <i class="fas fa-list"></i>
          </span>
          <router-link :to="`/todo-list/${todo.id}`">
                 {{ todo.name }}
          </router-link>
        </a>

        <div class="panel-block">
          <button class="button is-primary is-link is-fullwidth">
            reset all filters
          </button>
        </div>
      </nav>
    </div>
  </div>

  <div v-bind:class="{ 'is-active': modalOpen }" class="modal">
  <div class="modal-background"></div>
  <div class="modal-content">
    <h3 class="color-white">Add New Todo</h3>
     <form method="post" @submit.prevent="addTodo">
                        <div class="field">
                            <p class="control">
                                <input
                                    class="input"
                                    v-model="title"
                                    placeholder="Todo">
                            </p>
                        </div>

                        <div class="field">

                            <p class="control">
                                <textarea
                                    class="textarea"
                                    rows="3"
                                    v-model="content"
                                    placeholder="Todo Description"
                                    ></textarea>
                            </p>
                        </div>

                        <p class="control">
                            <button class="button is-primary">Add</button>
                        </p>
                    </form>
  </div>
  <button @click="closeModal" class="modal-close is-large" aria-label="close"></button>
</div>
 <a v-if="isUserLoggedIn" @click="openTodoModal" class="button fab-btn" ><i class="fa fa-plus"></i></a>
</div>
</template>

<script>
import { mapState } from 'vuex'
import { ADD_TODO_MUTATION, ALL_TODOS_QUERY } from "@/graphql";
export default {
    data () {
      return {
        content: '',
        title: '',
        modalOpen: false,
        userTodos: []
      }
    },
    apollo: {
        // fetch all posts
        userTodos: {
            query: ALL_TODOS_QUERY,
            variables () {
                return {
                    user_id: this.user.id
                }
            }
        }
    },
   computed: {
     ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },

  methods: {
    init(){
      // this.todos
    },
    closeModal() {
       this.modalOpen = false
    },
    openTodoModal() {
      this.modalOpen = true
    },
    addTodo() {
      this.$apollo
        .mutate({
          mutation: ADD_TODO_MUTATION,
          variables: {
            name: this.title,
            content: this.content,
            user_id: this.user.id
          }
        })
        .then(response => {
          console.log(response.data)
          this.$router.push({
          name: 'home'
        })
           this.modalOpen = false
        });
    }
  },
  mounted(){
    this.init()
  }
};
</script>

<style scoped>
.fab-btn {
    position: absolute;
    right: 80px;
    bottom: 10px;
    border-radius: 50%;
    background: #3373dc;
    color: white;
}
.color-white {
  color: white;
}
</style>
