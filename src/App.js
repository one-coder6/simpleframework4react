import React, { Component } from 'react';
import { Route, Redirect } from 'react-router'
import { Switch, HashRouter  } from 'react-router-dom';
import './App.css';
import allRouter from './router/router'
import './utils/App.api.js'
import './utils/global.js'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{ background: 'green', display: 'flex', width: '90%', padding: '10px', margin: '20px auto' }}>
          {
            allRouter && allRouter.length > 0 && allRouter.map((item, index) => <a
              key={index}
              style={{ color: 'RGBA(255,255,255,0.75)', margin: 5 }}
              href={`#${item.path}`}>
              {item.name}
            </a>)
          }
        </div>
        <div style={{ border: '1px solid red', width: '90%', minHeight: 500, margin: '20px auto' }}>
          <HashRouter>
            <div>
              <Route exact path="/" render={() => <Redirect to="/home" />} />
              <Switch>
                {
                  allRouter && allRouter.length > 0 && allRouter.map(item => <Route key={item.path} {...item} />)
                }
              </Switch>
            </div>
          </HashRouter>
        </div>
      </div>
    );
  }
}

export default App;
