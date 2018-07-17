import React, { Component } from 'react';
import prefix from '../common/js/prefix';

class ImgFigure extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.stopPropagation();
    e.preventDefault();
    if (this.props.arrange.isCenter) {
      this.props.inverse();
    } else {
      this.props.center();
    }
  }

  render() {
    let styleObj = {};
    // 如果props属性中指定了图片样式信息则使用
    if (this.props.arrange) {
      if (this.props.arrange.pos) {
        styleObj = Object.assign(styleObj, this.props.arrange.pos);
      }
      if (this.props.arrange.rotate) {
        let prefixArr = prefix('transform');
        prefixArr.forEach(val => {
          // let tempObj = {};
          // tempObj[val] = `rotate(${this.props.arrange.rotate}deg)`;
          // styleObj = Object.assign(styleObj, tempObj);
          styleObj[val] = `rotate(${this.props.arrange.rotate}deg)`;
        })
      }
    }

    let imgFigureClassName = 'img-figure';
    imgFigureClassName += this.props.arrange.isInverse ? ' is-inverse' : '';

    if (this.props.arrange.isCenter) {
      styleObj.zIndex = 11;
    }

    return (
      <div className={imgFigureClassName} style={styleObj} onClick={this.handleClick}>
        <div className='img-front'>
          <div className='img-wrapper'>
            <img width='200' height='300' src={this.props.data.imgUrl} alt={this.props.data.title}/>
          </div>
          <h2 className='img-title'>{this.props.data.title}</h2>
        </div>
        <div className='img-back'>
          <p>{this.props.data.desc}</p>
        </div>
      </div>
    );
  }
}

export default ImgFigure;
