import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Action from './pages/Action'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/portfolio', component: Portfolio },
        { path: '/stocks', component: Action },
    ]
})