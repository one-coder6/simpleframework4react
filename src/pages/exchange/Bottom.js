import React from 'react';
import { connect } from 'react-redux'
class Index extends React.PureComponent {
    state = {}
    render() {
        const { tiger, car, totalPrice } = this.props;
        return <div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
            <h3>底部,钱包余额：“{tiger}” </h3>
            <div style={{ width: '50%' }}>购物车列表{`(合计：${totalPrice} ¥)`}
                <ul>
                    {
                        car && car.length > 0 && car.map((item, index) => {
                            return <li key={item.id}>{`名称：${item.name}  价格：${item.price}  数量：x${item.count || 1}`} <a href='void:0'>删除</a></li>
                        })
                    }
                </ul>
            </div>
        </div>
    }
}

export default connect((state) => ({
    tiger: state.reducer,
    car: state.carFn.goods,
    totalPrice: state.carFn.totalPrice,
}))(Index);