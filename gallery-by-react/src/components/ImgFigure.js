import React, { Component } from 'react';
import prefix from '../common/js/prefix';

class ImgFigure extends Component {
  render() {
    let styleObj = {};
    // 如果props属性中指定了图片样式信息则使用
    if (this.props.arrange) {
      if (this.props.arrange.pos) {
        styleObj = this.props.arrange.pos;
      }
      if (this.props.arrange.rotate) {
        let prefixArr = prefix('transform');
        prefixArr.forEach(val => {
          styleObj[val] = `rotate(${this.props.arrange.rotate}deg)`;
        })
      }
    }

    return (
      <div className='img-figure' style={styleObj}>
        <img width='200' height='300' src={this.props.data.imgUrl} alt={this.props.data.title}/>
        <div>
          <h2 className='img-title'>{this.props.data.title}</h2>
        </div>
      </div>
    );
  }
}

export default ImgFigure;
