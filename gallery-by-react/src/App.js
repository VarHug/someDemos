import React, { Component } from 'react';
import imageDatas from './data/imagesData.json'; 
import ReactDom from 'react-dom';
import ImgFigure from './components/ImgFigure';

/**
 * 为数据数组中增加url地址属性
 * @param {Array} imageDatas
 */
function getImgUrl(imageDatas) {
  for (let i = 0, len = imageDatas.length; i < len; i++) {
    let imgData = imageDatas[i];
    imgData.imgUrl = require('./images/' + imgData.fileName);
  }
}

getImgUrl(imageDatas)

/**
 * 获取区间内的随机值
 * @param {number} low
 * @param {number} high
 */
function getRangeRandom(low, high) {
  return Math.ceil(Math.random() * (high - low) + low);
}

class App extends Component {
  constructor(props) {
    super(props);
    this.Constant= {
      // 中心图片位置
      centerPos: {
        left: 0,
        right: 0
      },
      // 水平区域取值范围
      hPosRange: {
        leftSecX: [0, 0],
        rightSecX: [0, 0],
        y: [0, 0]
      },
      // 垂直区域取值范围
      vPosRange: {
        x: [0, 0],
        topY: [0, 0]
      }
    };
    this.state = {
      imgsArrangeArr: [
        // {
        //   pos: {
        //     left: '0',
        //     top: '0'
        //   }
        // }
      ]
    }
  }

  /**
   * 布局每张图片位置
   *
   * @param {number} centerIndex // 居中的图片的index
   * @memberof App
   */
  rearrange(centerIndex) {
    let imgsArrangeArr = this.state.imgsArrangeArr;
    let Constant = this.Constant;
    let centerPos = Constant.centerPos;
    let hPosRange = Constant.hPosRange;
    let vPosRange = Constant.vPosRange;
    let hPosRangeLeftSecX = hPosRange.leftSecX;
    let hPosRangeRightSecx = hPosRange.rightSecX;
    let hPosRangeY = hPosRange.y;
    let vPosRangeTopY = vPosRange.topY;
    let vPosRangeX = vPosRange.x;
    let imgsArrangeTopArr = []; // 上测区域图片
    let topImgNum = Math.ceil(Math.random());
    let topImgSpliceIndex = 0;
    let imgsArrangeCenterArr = imgsArrangeArr.splice(centerIndex, 1); // 中心图片

    // 布局中心图片
    imgsArrangeCenterArr[0].pos = centerPos;

    // 取出要布局的上侧的图片的状态信息
    topImgSpliceIndex = Math.ceil(Math.random() * (imgsArrangeArr.length - topImgNum));
    imgsArrangeTopArr = imgsArrangeArr.splice(topImgSpliceIndex, topImgNum);

    // 布局位于上侧的图片
    imgsArrangeTopArr.forEach((val, index) => {
      val.pos = {
        top: getRangeRandom(vPosRangeTopY[0], vPosRangeTopY[1]),
        left: getRangeRandom(vPosRangeX[0], vPosRangeX[1])
      }
    });

    // 布局左右两侧的图片
    for (let i = 0, j = imgsArrangeArr.length, k = j / 2 | 0; i < j; i++) {
      let hPosRangeLORX = null;
      // 前半部分布局在左边， 右半部分布局在右边
      if (i < k) {
        hPosRangeLORX = hPosRangeLeftSecX;
      } else {
        hPosRangeLORX = hPosRangeRightSecx;
      }

      imgsArrangeArr[i].pos = {
        top: getRangeRandom(hPosRangeY[0], hPosRangeY[1]),
        left: getRangeRandom(hPosRangeLORX[0], hPosRangeLORX[1])
      }
    }

    if (imgsArrangeTopArr && imgsArrangeTopArr[0]) {
      imgsArrangeArr.splice(topImgSpliceIndex, 0, imgsArrangeTopArr[0]);
    }

    imgsArrangeArr.splice(centerIndex, 0, imgsArrangeCenterArr[0]);

    this.setState({
      imgsArrangeArr: imgsArrangeArr
    });
  }

  // 图片组件挂载
  componentDidMount() {
    // 舞台stage元素的相关数据
    let stageDom = ReactDom.findDOMNode(this.refs.stage),
      stageWidth = stageDom.scrollWidth,
      stageHeight = stageDom.scrollHeight,
      halfStageWidth = Math.ceil(stageWidth / 2),
      halfStageHeight = Math.ceil(stageHeight / 2);
    
    // imgFigure元素的相关数据
    let imgFigureDom = ReactDom.findDOMNode(this.refs.imgFigure0),
      imgFigureWidth = imgFigureDom.scrollWidth,
      imgFigureHeight = imgFigureDom.scrollHeight,
      halfImgFigureWidth = Math.ceil(imgFigureWidth / 2),
      halfImgFigureHeight = Math.ceil(imgFigureHeight / 2);
    
    this.Constant.centerPos = {
      left: halfStageWidth - halfImgFigureWidth,
      top: halfStageHeight - halfImgFigureHeight
    }

    this.Constant.hPosRange.leftSecX[0] = 0 - halfImgFigureWidth;
    this.Constant.hPosRange.leftSecX[1] = halfStageWidth - halfImgFigureWidth * 3;
    this.Constant.hPosRange.rightSecX[0] = halfStageWidth + halfImgFigureWidth;
    this.Constant.hPosRange.rightSecX[1] = stageWidth - halfImgFigureWidth;
    this.Constant.hPosRange.y[0] = 0 - halfImgFigureHeight;
    this.Constant.hPosRange.y[1] = stageHeight - halfImgFigureHeight;

    this.Constant.vPosRange.x[0] = halfStageWidth - imgFigureWidth;
    this.Constant.vPosRange.x[1] = halfStageWidth;
    this.Constant.vPosRange.topY[0] = 0 - halfImgFigureHeight;
    this.Constant.vPosRange.topY[1] = halfStageHeight - halfImgFigureHeight * 3;
    // debug:图片高度过高或者舞台区域过小，导致最低值大于最高值(均为负)
    if (this.Constant.vPosRange.topY[0] > this.Constant.vPosRange.topY[1]) {
      this.Constant.vPosRange.topY[0] = this.Constant.vPosRange.topY[1] - 40;
    }

    let imgsArrangeArr = this.state.imgsArrangeArr;
    for (let i = 0, len = imageDatas.length; i < len; i++) {
      if (!this.state.imgsArrangeArr[i]) {
        imgsArrangeArr[i] = {
          pos: {
            left: '0',
            top: '0'
          }
        }
      }
    }
    this.setState({
      imgsArrangeArr: imgsArrangeArr
    }, this.rearrange(0));
  }

  render() {
    let controllerUnits = [],
      imgFigures = [];

    imageDatas.forEach((val, index) => {
      imgFigures.push(<ImgFigure data = {val} key={index} arrange={this.state.imgsArrangeArr[index]} ref={'imgFigure' + index} />); // 当 ref 属性被用于一个自定义类组件时，ref 对象将接收该组件已挂载的实例作为它的 current
    });

    return (
      // 当 ref 属性被用于一个普通的 HTML 元素时，React.createRef() 将接收底层 DOM 元素作为它的 current 属性以创建 ref
      <div className = 'stage' ref='stage'>
        <div className = 'img-sec'>
          {imgFigures}
        </div>
        <div className = 'controller-nav'>
          {controllerUnits}
        </div>
      </div>
    );
  }
}

export default App;
