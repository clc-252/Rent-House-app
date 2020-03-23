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
        ],
        // 租房小组的数据
        groups:[],
        // 最新资讯的数据
        news:[]
    }
    // 在组件挂载完毕之后发送请求，获取轮播图的数据
    async componentDidMount() {
        // 调用获取轮播图数据
        this.getCarousel()
        // 调用获取租房小组的数据
        this.getGroups()
        // 调用获取最新资讯的数据
        this.getNews()
    }

    // 获取轮播图数据
    getCarousel=async()=>{
      const res=await axios.get('/home/swiper')
      this.setState({carouselList:res.data.body})
    }

    // 获取租房小组的数据
    getGroups=async()=>{
      const res=await axios.get('/home/groups')
      this.setState({groups:res.data.body})
    }
    
    // 获取最新资讯的数据
    getNews=async()=>{
      const res=await axios.get('/home/news')
      this.setState({news:res.data.body})
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

          {/* 租房小组开始 */}
          <div className={indexCss.index_groups}>
            {/* 标题 */}
            <div className={indexCss.index_groups_title}>
              <span>租房小组</span>
              <a href="#">更多</a>
            </div>
            {/* 内容 */}
            <div className={indexCss.index_groups_content}>
              {this.state.groups.map(v=>
                <div className={indexCss.group_item} key={v.id}>
                  <div className={indexCss.group_item_info}>
              <div className={indexCss.group_item_title}>{v.title}</div>
              <div className={indexCss.group_item_desc}>{v.desc}</div>
                  </div>
                  <div className={indexCss.group_item_img}>
                    <img src={baseURL+v.imgSrc} alt="" />
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* 租房小组结束 */}

          {/* 最新资讯开始 */}
          <div className={indexCss.index_news}>
            <div className={indexCss.index_news_title}>最新资讯</div>
            <div className={indexCss.index_news_content}>
              {this.state.news.map((v,i)=><div className={indexCss.news_item} key={i}>
                <div className={indexCss.news_item_img}>
                  <img src={baseURL+v.imgSrc} alt="" />
                </div>
                <div className={indexCss.news_item_info}>
                  <div className={indexCss.news_item_title}>{v.title}</div>
                  <div className={indexCss.news_item_desc}>
                    <span>{v.from}</span>
                    <span>{v.date}</span>
                  </div>
                </div>
              </div>)}
            </div>
          </div>
          {/* 最新资讯结束 */}
        </div>
        );
    }
}

export default index;