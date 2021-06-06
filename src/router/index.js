import Vue from 'vue'
import Router from 'vue-router'
import login from "../views/login"
import teacher from "../views/teacher"
import student from "../views/student"
import student_1_1 from "../components/student_1_1"
import student_1_2 from "../components/student_1_2";
import student_2_1 from "../components/student_2_1";
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/login'
        }
        ,
        {
            path: '/login',
            component: login
        }
        ,
        {
            path: '/student',
            component: student,
            children:[
                {
                  path: 'ClassScheduleCard',
                  component: student_1_1
                },
                {
                    path: 'ClassOpening',
                    component: student_1_2
                },
                {
                    path: 'StudentAchievement',
                    component: student_2_1
                },
            ]
        }
        ,
        {
            path: '/teacher',
            component: teacher
        }
    ]
})

/*
Router.beforeEach((to, from, next) => {
    const LOGINURL = '/login'
    let url, user

    url = to.path
    user = sessionStorage.getItem('user')

    if (url === LOGINURL) {
        sessionStorage.removeItem('user')
    }

    // 判断是否登录
    if (!user && url !== LOGINURL) {
        next({ path: LOGINURL })
    } else {
        next()
    }
})
*/