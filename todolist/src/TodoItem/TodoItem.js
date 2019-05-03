import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.todoItemConsole = this.todoItemConsole.bind(this);
  }

  render() {
    const { content } = this.props;
    return (
      <div onClick={this.handleClick}>
        {content}
      </div>
    )
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 性能优化
    if (nextProps.content !== this.props.content) {
      return true;
    } else {
      return false;
    }
  }

  // 当一个组件从父组件接受了参数（前置条件）
  // 只要父组件的render函数重新执行了，子组件的这个生命周期函数就会被执行
  // 如果这个组件第一次存在于父组件中，不会执行
  // 如果这个组件之前已经存在于父组件中，才会执行
  componentWillReceiveProps() {
    console.log('TodoItem componentWillReceiveProps');
  }

  // 当这个组件即将被从页面中剔除的时候，会被执行
  componentWillUnmount() {
    console.log('TodoItem componentWillUnmount');
  }

  handleClick() {
    const { deleteItem, index } = this.props;
    deleteItem(index);
  }

  todoItemConsole() {
    console.log('this is from TodoItem compontent');
  }
}

TodoItem.propTypes = {
  content: PropTypes.string.isRequired,
  deleteItem: PropTypes.func,
  index: PropTypes.number
}

TodoItem.defaultProps = {
  content: ''
}

export default TodoItem;
