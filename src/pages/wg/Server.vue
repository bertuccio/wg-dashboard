<template>
<div class="row">
    <!-- First Column -->
    <div class="col-12">

        <!-- Custom Text Color Utilities -->
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">
                  <span class="dot bg-success"></span>
                  <span>Wireguard® Server</span>
                </h6>
            </div>
            <div class="card-body">
              <ul class="nav nav-tabs" role="tablist">
                <li class="nav-item">
                  <a class="nav-link active" id="status-tab" data-toggle="tab" href="#status" role="tab" aria-controls="status" aria-selected="true">Status</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" id="management-tab" data-toggle="tab" href="#management" role="tab" aria-controls="management" aria-selected="false">Management</a>
                </li>
              </ul>
              <div class="tab-content">
                <div class="tab-pane fade show active" id="status" role="tabpanel" aria-labelledby="status-tab">
                  <hr>
                  <div class="row">
                    <div class="col-lg-10 col-md-8">
                      Local IP
                    </div>
                    <div class="col-lg-2 col-md-4">
                      <input type="text" class="form-control" value="127.0.0.1" disabled>
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-lg-10 col-md-8">
                      Local Port
                    </div>
                    <div class="col-lg-2 col-md-4">
                      <input type="text" class="form-control" value="51820" disabled>

                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-12 text-center mb-3">
                      <button type="submit" class="btn btn-danger">STOP</button>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <table class="table">
                        <thead class="thead-light">
                          <tr class="text-center">
                            <th scope="col">Name</th>
                            <th scope="col">Client IP</th>
                            <th scope="col">Sent / Received</th>
                            <th scope="col">Last Connected</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="text-center">
                            <th scope="row">Edu</th>
                            <td>192.168.1.1</td>
                            <td>2.50 MB / 30 MB</td>
                            <td>2 days</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="management" role="tabpanel" aria-labelledby="profile-tab">
                  <hr>
                  <div class="row">
                    <div class="col-12">
                      <h5 class="list-group-item">Wireguard® Clients</h5>
                      <table class="table">
                        <thead class="thead-light">
                          <tr class="text-center">
                            <th scope="col">Public key</th>
                            <th scope="col">Allowed IPs</th>
                            <th scope="col">Configurations</th>
                            <th scope="col">Delete</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="text-center" v-for="peer in peers" :key="peer.public_key">
                              <td>{{peer.public_key}}</td>
                              <td>{{peer.allowed_ips.join(', ')}}</td>
                              <td><i class="fas fa-file"></i></td>
                              <td>
                                <a href="#" v-on:click="deleteModal()">
                                  <i class="fas fa-trash"></i>
                                </a>
                              </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 text-center mb-3">
                      <button type="submit" class="btn btn-primary" v-on:click="addClientModal()">
                        <i class="fas fa-plus"></i>
                        Add new client
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Caution</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">Delete user?</div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">No</button>
                    <a class="btn btn-primary" href="login.html">Yes</a>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="addClientModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Add a New Wireguard® Client</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <form>
                  <div class="modal-body">
                    <div class="form-group row">
                      <label for="inputName" class="col-lg-2 col-form-label">Name</label>
                      <div class="col-lg-10">
                        <input type="text" class="form-control" id="inputName" placeholder="Name" required>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                      <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                      <a class="btn btn-primary" type="submit">Add</a>
                  </div>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'Server',
  data () {
    return {
      loading: true
    }
  },
  computed: {
    device() {
      return this.$store.state.deviceInfo.device
    },
    peers() {
      return this.$store.state.peers.peers
    }
  },
  created() {
    this.loading = true
    this.$store.dispatch('fetchDeviceInfo').then(
      response => {
        this.loading = false
      }
    )
    this.$store.dispatch('fetchPeers').then(
      response => {
        this.loading = false
      }
    )
  },
  methods: {
    deleteModal: function () {
        $('#deleteModal').modal('show');
    },
    addClientModal: function () {
        $('#addClientModal').modal('show');
    }
  }
}
</script>

<style scoped>
  .dot {
    height: 10px;
    width: 10px;
    margin: 0 5px;
    border-radius: 50%;
    display: inline-block;
  }
</style>
