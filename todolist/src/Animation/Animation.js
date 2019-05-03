import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './animation.css'

class Animation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
      list: []
    }
    this.handleToggoleClick = this.handleToggoleClick.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  render() {
    return (
      <div>
        <CSSTransition
          in={this.state.isShow}
          timeout={1000}
          classNames='fade'
          onEntered={(el) => {el.style.color = 'blue'}}
          appear={true}
        >
          <div>hello</div>
        </CSSTransition>
        <button onClick={this.handleToggoleClick}>toggole</button>
        <br/>
        <TransitionGroup>
          {
            this.state.list.map((item, index) => {
              return (
                <CSSTransition
                  timeout={1000}
                  classNames='fade'
                  onEntered={(el) => {el.style.color = 'blue'}}
                  appear={true}
                  key={index}
                >
                  <div>{item}</div>
                </CSSTransition>
              )
            })
          }
        </TransitionGroup>
        <button onClick={this.handleAddItem}>Add</button>
      </div>
    )
  }

  handleToggoleClick() {
    this.setState(() => ({
      isShow: this.state.isShow ? false : true
    }))
  }

  handleAddItem() {
    this.setState((prevState) => {
      return {
        list: [...prevState.list, 'item']
      }
    })
  }
}

export default Animation;
