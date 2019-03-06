import React from 'react';
import { connect } from 'react-redux'
class Index extends React.PureComponent {
    render() {
        const { dispatch } = this.props;
        return <div>
            <p>中间的正文</p>
            <button onClick={() => dispatch({ type: '涨工资' })}>挣钱</button> <button onClick={() => dispatch({ type: '扣工资' })}>花钱</button>
            <hr />
            <button onClick={() => {
                dispatch({ type: 'change', val: { id: 2, name: '裤子👖', price: '122.81' } })
            }}>将裤子1加入购物车</button>    <button onClick={() => {
                dispatch({ type: 'change', val: { id: 3, name: '裤子😁', price: '152.0093' } })
            }}>将裤子2加入购物车</button>
        </div>
    }
}
export default connect()(Index);