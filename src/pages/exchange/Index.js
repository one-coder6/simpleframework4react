import React from 'react';
import Top from './Top';
import Middle from './Middle';
import Bottom from './Bottom';
import { connect } from 'react-redux'
import './exchange.less'
class Index extends React.PureComponent {
    state = {}
    render() {
        return <div className="exchangeBody">
            <div><Top /></div>
            <div><Middle /></div>
            <div> <Bottom /> </div>
        </div>
    }
}

export default connect((state) => {
    return {
        tiger: state.reducer,
        car: state.carFn,
    }
})(Index);