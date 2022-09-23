import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
const Home = () => import(/* webpackChunkName: "common" */"@/pages/Home.vue");

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    children: [
      {
        path: "",
        name: "home",
        component: Home
      },
    ]
  },
  { path: "*", component: NotFound },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
