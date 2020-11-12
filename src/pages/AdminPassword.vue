<template>
<div class="row">
    <!-- First Column -->
    <div class="col-12">

        <!-- Custom Text Color Utilities -->
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">
                  <span>Admin Password</span>
                   <div class="float-right m-0"><a class="btn btn-primary" href="login.html">Apply</a></div>
                </h6>
            </div>
            <div class="card-body">
              <form>
                <div class="form-group row">
                  <label for="inputPassword" class="col-lg-3 col-form-label">Old Password</label>
                  <div class="col-lg-4">
                    <input type="password" class="form-control" id="inputPassword" placeholder="Password">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="inputPassword" class="col-lg-3 col-form-label">New Password</label>
                  <div class="col-lg-4">
                    <input type="password" class="form-control" id="inputPassword" placeholder="Password">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="inputPassword" class="col-lg-3 col-form-label">Confirm Password</label>
                  <div class="col-lg-4">
                    <input type="password" class="form-control" id="inputPassword" placeholder="Password">
                  </div>
                </div>
                <!-- <div class="form-row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="small mb-1" for="inputFirstName">Old Password</label>
                            <input class="form-control py-4" id="inputFirstName" type="text" placeholder="Enter first name">
                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="small mb-1" for="inputPassword">Password</label>
                            <input class="form-control py-4" id="inputPassword" type="password" placeholder="Enter password">
                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="small mb-1" for="inputConfirmPassword">Confirm Password</label>
                            <input class="form-control py-4" id="inputConfirmPassword" type="password" placeholder="Confirm password">
                        </div>
                    </div>
                </div> -->
              </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'AdminPassword'
}
</script>

<style>

</style>