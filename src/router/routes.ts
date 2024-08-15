import {RouteRecordRaw} from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('layouts/MainLayout.vue'),
        children: [
            {
                path: '',
                component: () => import('pages/MainPage.vue'),
                children: [
                    // {
                    //     path: '',
                    //     component: () => import('src/modules/ResearchListModule.vue'),
                    // },
                    {
                        path: 'research/',
                        component: () => import('src/modules/ResearchListModule.vue'),
                    },
                    {
                        path: 'reports/',
                        component: () => import('src/modules/ReportsListModule.vue'),
                    },
                ],
            },
            {
                path: 'report/:id',
                component: () => import('pages/ReportPage.vue'),
            },
        ],
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () => import('pages/ErrorNotFound.vue'),
    },
]

export default routes
