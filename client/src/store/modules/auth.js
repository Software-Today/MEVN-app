import Mixin from "../../helper/mixin"

export default {

    mixins: [Mixin],
    namespaced: true,

    state: {
        isLogged: false
    },

    getters: {
        isLogged(state) {
            return state.isLogged;
        }
    },

    mutations: {
        setAuth(state, status) {
            state.isLogged = status;
        }
    },

    actions: {
        // async geDatatList({ commit, state }, [page, limit, keyword]) {

        //     if (keyword != '') {
        //         state.isLoading = false;
        //     } else {
        //         state.isLoading = true;
        //     }

        //     await axios.get(base_url + 'post/post/list?page=' + page + '&limit=' + limit + "&keyword=" + keyword).then((response) => {
        //             commit('getAllPost', response.data.post);
        //         })
        //         .catch((error) => {
        //             console.log(error)
        //             this.isLoading = false;
        //         })
        //     history.pushState(null, null, "?page=" + page + "&limit=" + limit + "&keyword=" + keyword);
        // },

        register({ commit, state }, userInfo) {
            console.log(api_url);
            state.button_name = "Saving Post...";

            // axios.post(api_url + "register", userInfo).then((response) => {
            //     state.button_name = "Sign Up";
            //     if (response.data.status == "success") {
            //         console.log(response.data.status);
            //     } else {

            //     }
            // }).catch((err) => {
            //     console.log(err);
            //     state.button_name = "Sign Up";

            // });
        }

    }
}
