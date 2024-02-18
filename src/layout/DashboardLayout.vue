<template>
  <div class="wrapper" v-if="getToken">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/admin/customer">
        <AccountIcon class="icon-sidebar"></AccountIcon>
        <p>Customer</p>
      </sidebar-link>
      <sidebar-link to="/admin/order">
        <PackageIcon class="icon-sidebar"></PackageIcon>
        <p>Order</p>
      </sidebar-link>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click="toggleSidebar">

      </dashboard-content>

      <!-- <content-footer></content-footer> -->
    </div>
  </div>
  <LoginView v-else></LoginView>
</template>
<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  import MobileMenu from './MobileMenu.vue'
  import LoginView from './Login.vue'
  import PackageIcon from 'vue-material-design-icons/Package.vue';
  import AccountIcon from 'vue-material-design-icons/Account.vue';
  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent,
      MobileMenu,
      LoginView,
      PackageIcon,
      AccountIcon,
    },
    computed: {
      getToken () {
        return this.$cookies.get('token');
      }
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      }
    }
  }

</script>
<style lang="scss">
.material-design-icon.icon-sidebar {
  margin-right: 20px;
}
</style>