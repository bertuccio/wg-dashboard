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
              <div class="row">
                <div class="col-lg-7">
                  <div class="row">
                    <div class="col-lg-8">
                      Device
                    </div>
                    <div class="col-lg-4">
                      wg0
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-lg-8">
                      Type
                    </div>
                    <div class="col-lg-4">
                      Linux kernel
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-lg-8">
                      Public key
                    </div>
                    <div class="col-lg-4">
                      xoY2MZZ1UmbEakFBPyqryHwTaMi6ae4myP+vuILmJUY=
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-lg-8">
                      Listen port
                    </div>
                    <div class="col-lg-4">
                      51820
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-lg-8">
                      Number of peers
                    </div>
                    <div class="col-lg-4">
                      13
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
  name: 'Home'
}
</script>

<style>

</style>