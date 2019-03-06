import React from 'react';
import { Statistic, Row, Col } from 'antd';
const Countdown = Statistic.Countdown;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK
function onFinish() {
    console.log('finished!');
  }
export default () => {

    const test = () => {
        const fn1 = async function (params) {
            alert('123')
        }
   /*      const fn2 = await function () {
            alert('123')
        } */
        fn1();
        console.log("准备开始")
        //  fn2()
        console.log("准备开始")

    }

    return <div>
        <h1>关于我们</h1>
        <button onClick={test}>吃饭</button>
        <Row gutter={16}>
    <Col span={12}>
      <Countdown title="Countdown" value={deadline} onFinish={onFinish} />
    </Col>
    <Col span={12}>
      <Countdown title="Million Seconds" value={deadline} format="HH:mm:ss:SSS" />
    </Col>
    <Col span={24} style={{ marginTop: 32 }}>
      <Countdown title="Day Level" value={deadline} format="D 天 H 时 m 分 s 秒" />
    </Col>
  </Row>
    </div>
}
