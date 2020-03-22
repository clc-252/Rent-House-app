import React, {
    Component
} from 'react';
// 引入轮播图
import { Carousel } from 'antd-mobile';

// 引入axios
import axios,{baseURL} from '../../utils/request'
class index extends Component {
    // 初始化数据
    state = {
        // 轮播图数组
        carouselList: [],
        // 轮播图默认高度
        imgHeight: 176,
    }
    // 在组件挂载完毕之后发送请求，获取轮播图的数据
    async componentDidMount() {
        const res=await axios.get('/home/swiper')
        // console.log(res);
        this.setState({carouselList:res.data.body})
    }
    render() {
        return (
            <div>
                {/* 轮播图开始 */}
                <div className="index_carousel">
                {this.state.carouselList.length&&<Carousel
          autoplay
          infinite
        >
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
            </div>
        );
    }
}

export default index;