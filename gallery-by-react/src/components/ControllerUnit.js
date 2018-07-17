import React, { Component } from 'react';

class controllerUnit extends Component {
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
    let controllerUnitClassName = 'controller-unit';
    if (this.props.arrange.isCenter) {
      controllerUnitClassName += ' is-center icon-undo';

      if (this.props.arrange.isInverse) {
        controllerUnitClassName += ' is-inverse';
      }
    }


    return(
      <span className={controllerUnitClassName} onClick={this.handleClick}></span>
    );
  }
}

export default controllerUnit;
