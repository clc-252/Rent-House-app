import React from 'react'
import { TabBar } from 'antd-mobile';

import {Route} from 'react-router-dom';

// 首页
import Index from '../index'
// 找房
import Found from '../found'
// 资讯
import News from '../news'
// 我的
import My from '../my'
class Home extends React.Component {
  constructor(props) {
    super(props);
    // 如果当前的url为/home，让页面显示/home/index，即做路由重定向就可以了
    if(this.props.location.pathname==='/home'){
        this.props.history.push('/home/index')
    }
  }

  renderContent(pageText) {
    return (
      <div>
          <i className="iconfont icon-edit"></i>
          {pageText}
      </div>
    );
  }
// 修改判断条件
  render() {
      const {location,history}=this.props
    return (
      <div style={ { position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#21b97a"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="Home"
            icon={ <i className="iconfont icon-ind"></i> }
            selectedIcon={<i className="iconfont icon-ind"></i>}
            selected={location.pathname === '/home/index'}
            onPress={() => history.push('/home/index')}
            data-seed="logId"
          >
            <Route component={Index} path="/home/index"></Route>
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-findHouse"></i>}
            selectedIcon={<i className="iconfont icon-findHouse"></i>}
            title="找房"
            key="found"
            selected={location.pathname === '/home/found'}
            onPress={() => history.push('/home/found')}
            data-seed="logId1"
          >
            <Route component={Found} path="/home/found"></Route>
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-infom"></i>}
            selectedIcon={<i className="iconfont icon-infom"></i>}
            title="资讯"
            key="news"
            selected={location.pathname === '/home/news'}
            onPress={() => history.push('/home/news')}
          >
            <Route component={News} path="/home/news"></Route>
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-my"></i>}
            selectedIcon={<i className="iconfont icon-my"></i>}
            title="我的"
            key="my"
            selected={location.pathname === '/home/my'}
            onPress={() => history.push('/home/my')}
          >
            <Route component={My} path="/home/my"></Route>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default Home