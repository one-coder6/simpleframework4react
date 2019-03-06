import { request } from '../../utils/request.js'
export default {
    name: 'exchange',
    apis: {
        // 获取公告列表
        getLast10Articles(params) {
            return request('/plat/cms/c/web/getLast10Articles', {
                method: 'post',
                params
            })
        }
    }
}