import VueRouter from "vue-router";
import ComingSoon from "../pages/ComingSoon"
import Tracker from "../pages/WorldstateCharacterTracker"



const router = new VueRouter({
    routes: [
        {
            path: "/",
            name: "Coming Soon",
            component: ComingSoon,
        },
        {
            path: "/comingsoon",
            name: "Coming Soon",
            component: ComingSoon,
        },
        {
            path: "/tracker",
            name: "Worldstate Character Tracker",
            component: Tracker
        },
    ],
    mode: 'history'
});

export default router;