import React from 'react';
// import Tabbar from './demo/Tabbar'
// 引入路由
import {HashRouter as Router,Route,Link} from 'react-router-dom';

import Home from './pages/home'
import Found from './pages/found'
import News from './pages/news'
import My from './pages/my'
function App() {
  return (
    <div className="App">
      {/* <Tabbar></Tabbar> */}
      <Router>
        <nav>
          <Link to="/">首页</Link>
          <Link to="/found">找房</Link>
          <Link to="/news">资讯</Link>
          <Link to="/my">我的</Link>
        </nav>
        <section>
          <Route exact component={Home} path="/"></Route>
          <Route exact component={Found} path="/found"></Route>
          <Route exact component={News} path="/news"></Route>
          <Route exact component={My} path="/my"></Route>
        </section>
      </Router>
    </div>
  );
}

export default App;
