import Vue from 'vue'
import Router from 'vue-router'
import Todo from '@/components/Todo'
import Login from '@/components/Login'
import TodoList from '@/components/TodoList'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/todo",
      name: "todo",
      component: Todo
    },
    {
      path: "/",
      name: "home",
      component: Todo
    },
    {
      path: "/todo-list",
      name: "todo-list",
      component: TodoList
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    }
  ]
})
