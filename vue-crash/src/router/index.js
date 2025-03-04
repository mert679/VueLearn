// This is our main file for routing. we download vue-router
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import JobsView from "@/views/JobsView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import AddjobVue from "@/views/AddjobVue.vue";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name:"home",
            component: HomeView
        },
        {
            path: "/jobs",
            name:"jobs",
            component: JobsView
        },
        {
            path: "/jobs/add",
            name:"jobAdd",
            component: AddjobVue
        },
        {
            path:'/:catchAll(.*)',
            name:"not-fount",
            component:NotFoundView
        }
    ]
})

export default router