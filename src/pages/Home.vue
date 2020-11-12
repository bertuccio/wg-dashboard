<template>
<div class="row">
    <!-- First Column -->
    <div class="col-12">

        <!-- Custom Text Color Utilities -->
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">
                  <span>Wireguard® Admin Dashboard</span>
                </h6>
            </div>
            <div class="card-body">
              <div class="row" v-if="loading">
                <div class="col-12 text-center">
                  <div class="fa-3x m-5">
                    <i class="fas fa-spinner fa-spin"></i>
                  </div>
                </div>
              </div>
              <div class="row" v-else>
                <div class="col-lg-7">
                  <div class="row">
                    <div class="col-lg-4">
                      <b>Device</b>
                    </div>
                    <div class="col-lg-8 text-right">
                      {{device.name}}
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-lg-4">
                      <b>Type</b>
                    </div>
                    <div class="col-lg-8 text-right">
                      {{device.type}}
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-lg-4">
                      <b>Public key</b>
                    </div>
                    <div class="col-lg-8 text-right">
                      {{device.public_key}}
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-lg-4">
                      <b>Listen port</b>
                    </div>
                    <div class="col-lg-8 text-right">
                      {{device.listen_port}}
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-lg-4">
                      <b>Number of peers</b>
                    </div>
                    <div class="col-lg-8 text-right">
                      {{device.num_peers}}
                    </div>
                  </div>
                  <hr>
                </div>
                <div class="col-lg-5 d-none d-lg-block text-center">
                  <span class="fa-stack fa-8x align-middle">
                    <i class="fas fa-circle fa-stack-2x text-primary"></i>
                    <i class="fas fa-shield-alt fa-stack-1x fa-inverse"></i>
                  </span>
                </div>
              </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      loading: true
    }
  },
  computed: {
    device() {
      return this.$store.state.deviceInfo.device
    }
  },
  created() {
    this.loading = true
    this.$store.dispatch('fetchDeviceInfo').then(
      response => {
        this.loading = false
      }
    )
  }
}
</script>

<style>

</style>