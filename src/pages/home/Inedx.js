import React from 'react'
import {Button} from 'antd'
export default class Home extends React.PureComponent {
    state = {
        source: null
    }
    componentWillMount() {
        debugger;
    }
    componentDidMount() {
    }
    getData = () => {
        let api = React.commonHandler.api;
         api.exchange.getLast10Articles({ categoryCode: "important_notice" }).then((res) => {
            this.setState({ source: res })
            debugger;
        });
    }
    render() {
        const { source } = this.state;
        return <div>
            <h1>我是首页</h1>
            <h3>副标题</h3>
            <Button onClick={this.getData}>测试一个请求</Button>
            <Button>一个按钮</Button>
            <input />
            {
                source && source.map(item => {
                    return <span>{JSON.stringify(item)}</span>
                })
            }
        </div>
    }
} 
