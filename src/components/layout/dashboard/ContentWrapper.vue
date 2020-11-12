<template>
<div id="content-wrapper" class="d-flex flex-column">

    <!-- Main Content -->
    <div id="content">

        <!-- Topbar -->
        <sb-topbar></sb-topbar>
        <!-- End of Topbar -->

        <!-- Begin Page Content -->
        <div class="container-fluid">
          <router-view></router-view>
        </div>
        <!-- /.container-fluid -->

    </div>
    <!-- End of Main Content -->

    <!-- Footer -->
    <sb-footer></sb-footer>
    <!-- End of Footer -->

</div>
</template>

<script>

import Footer from '@/components/layout/dashboard/Footer.vue'
import Topbar from '@/components/layout/dashboard/Topbar.vue'

export default {
  name: 'ContentWrapper',
  components: {
    'sb-topbar': Topbar,
    'sb-footer': Footer
  },
}
</script>

<style>

</style>