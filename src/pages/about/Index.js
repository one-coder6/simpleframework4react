import React from 'react';

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
        <h1>关于我们关于我们</h1>
        <button onClick={test}>吃饭</button>
    </div>
}
