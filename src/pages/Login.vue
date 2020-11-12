<template>
<div class="container">

  <!-- Outer Row -->
  <div class="row justify-content-center">
    <div class="col-xl-10 col-lg-12 col-md-9">

      <div class="card o-hidden border-0 shadow-lg my-5">
        <div class="card-body p-5">
          <!-- Nested Row within Card Body -->
          <div class="row">
            <div class="col-lg-6 offset-lg-3">
              <div class="p-2">
                <div class="text-center">
                  <h1>
                    <i class="fas fa-wifi fa-2x"></i>
                  </h1>
                </div>
              </div>
              <div class="p-5">
                <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">
                      WireGuard ADMIN
                    </h1>
                </div>
                <form class="user">
                  <div class="form-group">
                    <input type="email" class="form-control form-control-user"
                        id="exampleInputEmail" aria-describedby="emailHelp"
                        placeholder="Enter Email Address...">
                  </div>
                  <div class="form-group">
                    <input type="password" class="form-control form-control-user"
                        id="exampleInputPassword" placeholder="Password">
                  </div>
                  <div class="form-group">
                    <div class="custom-control custom-checkbox small">
                        <input type="checkbox" class="custom-control-input" id="customCheck">
                        <label class="custom-control-label" for="customCheck">Remember
                            Me</label>
                    </div>
                  </div>
                  <a href="index.html" class="btn btn-primary btn-user btn-block">
                    Login
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

</div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style scope>
</style>