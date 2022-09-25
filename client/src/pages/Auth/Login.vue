<template>
    <div class="row mt-5 pt-5">
        <div class="col-md-4"></div>
        <card class="col-md-4">
            <h3 slot="header" class="title button-container">LogIn</h3>
            <div class="row">
                <div class="col-md-12">
                    <base-input label="Username" v-model="model.username" placeholder="Username or Email"> </base-input>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <base-input label="Password" v-model="model.password" placeholder="Password" type="password"> </base-input>
                </div>
            </div>
            <div class="button-container mt-4 mb-3" style="text-align:center;">
                <base-button slot="footer" class="mb-2" type="primary" fill>LogIn</base-button><br/>
                If don't have an account: <router-link to="/register">Sing Up</router-link>
            </div>
        </card>
    </div>
  </template>
  <script>
    export default {
      props: {
        model: {
          type: Object,
          default: () => {
            return {};
          }
        }
      }
    }
  </script>
  <style>
  </style>