<template>
    <div class="row mt-5 pt-5">
        <div class="col-md-4"></div>
        <card class="col-md-4">
            <h3 slot="header" class="title button-container">Sign Up</h3>
            <div class="row">
                <div class="col-md-12">
                    <base-input label="Username" v-model="model.username" placeholder="Username"> </base-input>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <base-input label="Email" v-model="model.email" placeholder="Mike.gamil.com"> </base-input>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <base-input label="Password" v-model="model.password" placeholder="Password" type="password"> </base-input>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <base-input label="Confirm Password" v-model="model.repassword" placeholder="Confirm Password" type="password"> </base-input>
                </div>
            </div>
            <div class="button-container mt-4 mb-3" style="text-align:center;">
                <base-button slot="footer" @click.prevent="save" class="mb-2" type="primary" fill>{{button_name}}</base-button><br/>
                If already have an account: <router-link to="/login">LogIn</router-link>
            </div>
        </card>
    </div>
  </template>
  <script>
    export default {
        props: {},
        mounted() {

        },
        data() {
            return {
                model: {
                    username: "",
                    email: "",
                    password: "",
                    repassword: ""
                },
                button_name: "Sign Up"
            }
        },
        methods: {
            save() {
                console.log(this.$store);
                console.log(this.state);
                // this.$store.dispatch('auth/register',this.model);
            },
            resetForm() {
                this.model = {
                    username: "",
                    email: "",
                    password: "",
                    repassword: "",
                };

                this.button_name = "Sign Up";
            },
        }
    }
  </script>
  <style>
  </style>