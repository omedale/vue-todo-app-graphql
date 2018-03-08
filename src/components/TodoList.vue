<template>
  <div class="container is-fluid padding-30px">
    <div class="notification">
        <nav class="panel">
        <p class="panel-heading">
          TODOLIST
        </p>
        <div class="panel-block">
          <p class="control has-icons-left">
            <input class="input is-small" type="text" placeholder="search">
            <span class="icon is-small is-left">
              <i class="fas fa-search"></i>
            </span>
          </p>
        </div>

        <a class="panel-block is-active">
          <span class="panel-icon">
            <i class="fas fa-list"></i>
          </span>
          bulma
        </a>

        <div class="panel-block">
          <button class="button is-primary is-link is-fullwidth">
            reset all filters
          </button>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  methods: {}
};
</script>

<style scoped>

</style>
