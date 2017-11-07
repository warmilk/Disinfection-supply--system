import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import Validator from 'vue-validator'

// ①注册：
import Register from '@/view/register'
// ②登录：
import Login from '@/view/login'
// ③容器：
import Home from '@/view/home' // 整个网站的模板（左边导航条+顶部导航条）它是下面子页面的容器

// 个人信息
import Profile from '@/view/profile/profile'
// 清洗管理
import Clean from '@/view/clean/clean'
// 配包管理
import Wrap from '@/view/wrap/wrap'
// 消毒管理
import Disinfect from '@/view/disinfect/disinfect'
// 发放管理
import Distribute from '@/view/distribute/distribute'
// 使用管理
import Use from '@/view/use/use'
// 回收管理
import Recycle from '@/view/recycle/recycle'

Vue.use(Router)
Vue.use(Resource)
Vue.use(Validator)

export default new Router({
    routes: [{
            path: '/',
            component: Login
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/home',
            component: Home,
            name: '',
            children: [{
                    path: 'profile',
                    component: Profile,
                    name: '个人信息'
                },
                {
                    path: 'clean',
                    component: Clean,
                    name: '清洗管理'
                },
                {
                    path: 'wrap',
                    component: Wrap,
                    name: '配包管理'
                },
                {
                    path: 'disinfect',
                    component: Disinfect,
                    name: '消毒管理',
                    children: [{
                        path: '',
                        // component: AddWork
                    }]
                },
                {
                    path: 'distribute',
                    component: Distribute,
                    name: '发放管理',
                    // children: [{
                    //         path: 'mem_package',
                    //         component: mem_package,
                    //         name: '会员套餐'
                    //     },
                    //     {
                    //         path: 'account',
                    //         component: account,
                    //         name: '会员帐号'
                    //     },
                    //     {
                    //         path: 'integral',
                    //         component: integral,
                    //         name: '会员积分'
                    //     },
                    //     {
                    //         path: 'style',
                    //         component: style,
                    //         name: '会员类型'
                    //     },
                    //     {
                    //         path: '/',
                    //         redirect: 'account'
                    //     } //在子路由定向到account
                    // ]
                },
                {
                    path: 'use',
                    component: Use,
                    name: '使用管理',
                    // children: [{
                    //         path: 'smallproject',
                    //         component: smallproject,
                    //         name: '子项目'
                    //     },
                    //     {
                    //         path: 'package',
                    //         component: Package,
                    //         name: '套餐'
                    //     },
                    //     {
                    //         path: 'registration',
                    //         component: registration,
                    //         name: '挂号费'
                    //     },
                    //     {
                    //         path: '/',
                    //         redirect: 'smallproject'
                    //     } //在子路由定向到smallproject
                    // ]
                },
                {
                    path: 'recycle',
                    component: Recycle,
                    name: '回收管理',
                    // children: [{
                    //         path: 'Mrliu',
                    //         component: Mrliu,
                    //         name: '今日预约',
                    //         children: [{
                    //                 path: 'Visdoctor',
                    //                 component: Visdoctor,
                    //                 name: '出诊医生'
                    //             },
                    //             {
                    //                 path: 'liuContent',
                    //                 component: LiuContent,
                    //                 name: '刘医生'
                    //             },
                    //             {
                    //                 path: '/',
                    //                 redirect: 'Visdoctor'
                    //             }
                    //         ]

                    //     },
                    //     {
                    //         path: 'Vdetails',
                    //         component: Vdetails,
                    //         name: '详情页'
                    //     },
                    //     {
                    //         path: '/',
                    //         redirect: 'Mrliu'
                    //     },
                    //     {
                    //         path: 'appointreport',
                    //         component: Appointreport,
                    //         name: '预约报备'
                    //     }
                    // ]
                },

            ]
        }
    ]
})