import React from 'react';

// 引入路由
import {HashRouter as Router,Route,Redirect} from 'react-router-dom';

import Home from './pages/home'
// 地图找房
import MapFound from './pages/mapFound'
// 城市选择
import CitySelect from './pages/citySelect'

function App() {
  return (
    <div className="App">
      {/* <Tabbar></Tabbar> */}
      <Router>
          <Route component={Home} path="/home"></Route>
          <Route path="/" exact>
            <Redirect to="/home"></Redirect>
          </Route>
          <Route component={MapFound} path="/mapFound" exact></Route>
          <Route component={CitySelect} path="/citySelect" exact></Route>
      </Router>
    </div>
  );
}

export default App;
