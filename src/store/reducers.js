import { combineReducers } from 'redux'

const tiger = 10000
const car = {
    goods: [{ id: 1, name: '衣服👔', price: '188.00', count: 1 }],
    totalPrice: 188.00
}


//这是reducer
const reducer = (state = tiger, action) => {
    switch (action.type) {
        case '涨工资':
            return state += 100;
        case '扣工资':
            return state -= 100;
        default:
            return state;
    }
}
//car
const carFn = (state = car, action) => {
    switch (action.type) {
        case 'change':
            let goods = [...state.goods, action.val],
                totalPrice = 0;
            goods.forEach((item) => {
                totalPrice = totalPrice + ((item.price || 0) * (item.count || 1));
            })
            return {
                goods,
                totalPrice:totalPrice.toFixed(2)
            }
        default:
            return state;
    }
}

export default combineReducers({
    reducer,
    carFn
});