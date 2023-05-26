import {createRouter, createWebHistory} from 'vue-router'

import HomeView from "@/views/HomeView.vue";
import TableMusics from "@/views/TableMusics.vue";
import MainComponent from "@/components/dashboard/MainComponent.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: MainComponent,
            children: [
                {path: '/', name: 'home', component: HomeView},
                {path: '/trending/:id', name: 'trending', component: TableMusics, props: true,}
            ]
        }
    ]
})

export default router
