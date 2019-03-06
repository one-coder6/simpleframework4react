import Home from '../pages/home/Inedx'
import About from '../pages/about/Index'
import Exchange from '../pages/exchange/Index'

export default [{
    path: "/home",
    name: '首页',
    component: Home
}, {
    path: "/exchange",
    name: '功能首页',
    component: Exchange
},
{
    path: "/about",
    name: '关于',
    component: About
},
]