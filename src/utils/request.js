import axios from 'axios'

export function request(url, action) {
    if (!action.method) return;
    axios.defaults.headers = {
        'X-Token': 'zh,1072477336055582722,35915c18f04949b3a09e3efc1c28f40d,1,e514f9a54f8e54eaad66079de3ab01ae71f148075d36955db910049e47812389'
    }
    // 添加请求拦截器
    axios.interceptors.request.use(function (config) {
        // 在发送请求之前做些什么
        return config;
    }, function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    });

    // 添加响应拦截器
    axios.interceptors.response.use(function (response) {
        // 对响应数据做点什么
        return response;
    }, function (error) {
        // 对响应错误做点什么
        return Promise.reject(error);
    });

    let success = (res) => {
        return res.data;
    }
    let fail = () => {
        return '返回错误'
    }
    let params = null;
    if (action.method === 'post') {
        params = action.params;
    } else if (action.method === 'get') {
        params = { params: action.params }
    }
    return new Promise((resolve, reject) => {
        axios[action.method](url, params).then(res => {
            success(res);
            resolve(res.data)
        }).catch(response => {
            fail(response);
            reject(response);
        })
    })
}