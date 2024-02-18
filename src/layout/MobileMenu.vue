<template>
  <ul class="nav nav-mobile-menu">
    <li class="nav-item">
      <b-button
        variant="link"
        class="nav-link"
        @click="removeUserPermissions"
        to="/"
      >
        Log out
      </b-button>
    </li>
  </ul>
</template>
<script>
  export default {
    name: 'mobile-menu',
    methods: {
      removeUserPermissions () {
        this.$cookies.remove('token')
        location.reload()
      }
    }
  }
</script>
<style>
</style>
