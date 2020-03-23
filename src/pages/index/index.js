import React, {
    Component
} from 'react';
// 引入轮播图
import { Carousel } from 'antd-mobile';

// 引入axios
import axios,{baseURL} from '../../utils/request'

// react中使用本地图片
import nav1 from '../../assets/images/nav-1.png'
import nav2 from '../../assets/images/nav-2.png'
import nav3 from '../../assets/images/nav-3.png'
import nav4 from '../../assets/images/nav-4.png'

// 引入局部样式
import indexCss from './index.module.scss'
class index extends Component {
    // 初始化数据
    state = {
        // 轮播图数组
        carouselList: [],
        // 轮播图默认高度
        imgHeight: 176,
        // 导航数据
        navs:[
            {id:0,text:'整租',imgSrc:nav1},
            {id:1,text:'合租',imgSrc:nav2},
            {id:2,text:'地图找房',imgSrc:nav3},
            {id:3,text:'去出租',imgSrc:nav4}
        ]
    }
    // 在组件挂载完毕之后发送请求，获取轮播图的数据
    async componentDidMount() {
        const res=await axios.get('/home/swiper')
        // console.log(res);
        this.setState({carouselList:res.data.body})
    }
    render() {
      return (
        <div className={indexCss.hk_index}>
          {/* 轮播图开始 */}
          <div className="index_carousel">
          {this.state.carouselList.length&&<Carousel autoplay infinite >
            {this.state.carouselList.map(val => (
              <a
                key={val}
                href="http://www.alipay.com"
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
              <img
                src={baseURL+val.imgSrc}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
              </a>
            ))}
          </Carousel>}
          </div>     
          {/* 轮播图结束 */}

          {/* 首页导航开始 */}
          <div className={indexCss.index_nav}>
            {this.state.navs.map(v=> <div className={indexCss.nav_item} key={v.id}>
              <img src={v.imgSrc} alt="" />
              <p>{v.text}</p>
            </div> )}
          </div>
          {/* 首页导航结束 */}
        </div>
        );
    }
}

export default index;