
/**
 * 定义一些公用的方法在全局，装载于React下面
 */
import React from 'react'
import api from './App.api.js'
React.commonHandler = {
    jcTest: () => alert('Test'),
    api
}

/** 路由变化的时候可以做点什么 */
window.addEventListener('hashchange', (changer) => {
    // window.location.hash.substr(1)
    console.log('=>', changer)
})