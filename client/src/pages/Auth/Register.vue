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
    import axios from 'axios';

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
                if(this.model.username == "") {
                    return;
                }
                var regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
                if(this.model.email == "" ) {
                    return;
                }
                if(!regex.test(this.model.email)) {
                    console.log("Valid email address.");
                    return;
                }
                var strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
                if(this.model.password == "") {
                    return;
                }
                if(this.model.repassword == "" || this.model.repassword != this.model.password) {
                    return;
                }
                // if(this.model.password.length < 8) {
                //     console.log("Password must be longer than 8!");
                // }
                // if(!strongPassword.test(this.model.password)) {
                //     console.log("Password must contain Uppercase, Lowercase, Number and Special symbol!");
                //     return;
                // }
                var headers = {
                  'Access-Control-Allow-Origin': '*',
                  'Access-Control-Allow-Headers': '*',
                  'Access-Control-Allow-Credentials': 'true'
                };
                var params = {username: this.model.username, email: this.model.email, password: this.model.password};
                axios.post(`http://localhost:5000/register`, { body: params, headers: headers }).then(response => {
                    console.log(response);
                }).catch(e => {
                    console.error(e);
                })
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