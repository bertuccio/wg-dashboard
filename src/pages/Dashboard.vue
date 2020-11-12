<template>
  <div>
    <div id="wrapper">
      <sb-sidebar></sb-sidebar>
      <sb-content-wrapper></sb-content-wrapper>
    </div>
    <sb-scroll-top></sb-scroll-top>
  </div>
</template>

<script>


import "sb-admin-2/vendor/bootstrap/js/bootstrap.bundle.min.js";
import "sb-admin-2/vendor/jquery-easing/jquery.easing.min.js";
import "sb-admin-2/css/sb-admin-2.min.css";
import "sb-admin-2/vendor/fontawesome-free/css/all.min.css";
import "sb-admin-2/js/sb-admin-2.min.js";

import Sidebar from '@/components/layout/dashboard/Sidebar.vue'
import ContentWrapper from '@/components/layout/dashboard/ContentWrapper.vue'
import ScrollTop from '@/components/layout/dashboard/ScrollTop.vue'


export default {
  name: 'Dashboard',
  components: {
    'sb-sidebar': Sidebar,
    'sb-content-wrapper': ContentWrapper,
    'sb-scroll-top': ScrollTop
  },
}
</script>

<style>

</style>