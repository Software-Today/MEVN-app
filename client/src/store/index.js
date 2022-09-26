//Install Vuex the createStore instance as a plugin

import { createStore } from 'vuex';
import AuthModule from './modules/auth';
// import postModule from './modules/post'

const store = createStore({
    modules: {
        auth: AuthModule, //postModule r namespace hoycce = post
        pageData: {}
    },

})

export default store