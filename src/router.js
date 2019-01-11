import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/Homepage.vue";
import Signup from "./pages/signup/Signup.vue";
import Login from "./pages/login/Login.vue";
import Shipper from "./pages/shipper/Shipper.vue";
import Carrier from "./pages/carrier/Carrier.vue";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/signup",
            name: "signup",
            component: Signup
        },
        {
            path: "/login",
            name: "login",
            component: Login
        },
        {
            path: "/shipper",
            name: "shipper",
            component: Shipper
        },
        {
            path: "/carrier",
            name: "carrier",
            component: Carrier
        }
    ]
});
