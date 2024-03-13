import { createRouter, createWebHistory } from 'vue-router';
import Auth0Callback from "./views/Auth0Callback.vue";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Contact from "./views/Contact.vue";
import Members from "./views/Members.vue";
import Login from "./views/Login.vue";
import Dashboard from "./views/admin/Dashboard.vue";
import Settings from "@/views/admin/Settings.vue";
import ModifUser from "@/views/admin/Modif_users.vue";
import Pubs from "@/views/admin/Pubs.vue";
import Users from "@/views/admin/utilisateurs/Users.vue";
import Polls from "@/views/admin/vote/Polls.vue";
import Surveys from "@/views/admin/sondage/Surveys.vue";
import Maps from "@/views/admin/Maps.vue";
import Landing from "@/views/Landing.vue";
import Profile from "@/views/Profile.vue";
import Store from "./store";

const routes = [
 { path: "/auth0callback", name: 'auth0callback', component: Auth0Callback },
 { path: "/", component: Home, name: "home" },
 { path: "/about", component: About, name: "about" },
 { path: "/contact", component: Contact, name: "contact" },
 { path: "/login", component: Login, name: "login" },
 { path: "/members", component: Members, name: "members", meta: { requiresAuth: true } },
 { path: "/admin/dashboard", component: Dashboard },
 { path: "/admin/settings", component: Settings },
 { path: "/admin/user/:id", name: "modifUser", component: ModifUser, props: true },
 { path: "/admin/publication", name: "pubs", component: Pubs, props: true },
 { path: "/admin/users", name: "Liste", component: Users },
 { path: "/admin/vote/polls", component: Polls },
 { path: "/admin/sondage/surveys", component: Surveys },
 { path: "/admin/maps", component: Maps },
 { path: "/landing", component: Landing },
 { path: "/profile", component: Profile },
 { path: "/:pathMatch(.*)*", redirect: "/" }
];

const router = createRouter({
 history: createWebHistory(),
 routes: routes
});

router.beforeEach((to, from, next) => {
    if (to.path === "/auth0callback") {
       console.log("router.beforeEach found /auth0callback url");
       Store.auth0HandleAuthentication();
       next(); // Continuez la navigation vers la route demandée
    } else {
       let routerAuthCheck = false;
       if (
         localStorage.getItem("access_token") &&
         localStorage.getItem("id_token") &&
         localStorage.getItem("expires_at")
       ) {
         console.log("found local storage tokens");
         let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
         routerAuthCheck = new Date().getTime() < expiresAt;
       }
       // Appeler la méthode setUserIsAuthenticated directement
       Store.setUserIsAuthenticated(routerAuthCheck);
       if (to.meta && to.meta.requiresAuth) {
         if (routerAuthCheck) {
           next(); 
         } else {
           next("/login");
         }
       } else {
         next(); 
       }
    }
});

   

export default router;
