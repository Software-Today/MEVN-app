import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
import NotFound from "@/pages/NotFoundPage.vue";


// Admin pages
const Home = () => import("@/pages/Home.vue");
const Register = () => import("@/pages/Auth/Register.vue");
const Login = () => import("@/pages/Auth/Login.vue");

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
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },

  { path: "*", component: NotFound },
];

export default routes;
