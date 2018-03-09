import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/Home'
import Login from '@/components/Login'
import TodoList from '@/components/TodoList'
import NewTodo from '@/components/NewTodo'
import Register from '@/components/Register'
import store from '../store/store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      meta: { adminOnly: false },
      component: HomePage
    },
    {
      path: "/new-todo",
      name: "new-todo",
      meta: { adminOnly: true },
      component: NewTodo
    },
    {
      path: "/todo-list/:id",
      name: "todo-list",
      meta: { adminOnly: true },
      component: TodoList
    },
    {
      path: "/login",
      name: "login",
      meta: { adminOnly: false },
      component: Login
    },
    {
      path: "/register",
      name: "register",
      meta: { adminOnly: false },
      component: Register
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.adminOnly)) {
    if (store.state.isUserLoggedIn){
      next();
    } else {
      next({
        path: '/login'
      })
    }
 } else {
    next();
   }
});

export default router
