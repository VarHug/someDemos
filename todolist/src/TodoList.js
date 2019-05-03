import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem/TodoItem';
import Animation from './Animation/Animation';
import axios from 'axios';
import './style.css';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  // 当组件即将被挂载到页面的时刻自动执行
  componentWillMount() {
    console.log('TodoList componentWillMount');
  }

  render() {
    console.log('render');
    return (
      <Fragment>
        <div>
          <label htmlFor='insertArea'>输入内容</label>
          {/*下面是一个注释框*/}
          <input
            id='insertArea'
            className='input'
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            ref={(input) => {this.input = input}}
          />
          <button onClick={this.handleButtonClick}>提交</button>
        </div>
        {
          // 下面是todolist的列表
          // 点击响应的元素，即可实现删除
        }
        <ul ref={(ul) => {this.ul = ul}}>
          {this.getTodoItem()}
        </ul>
        <h1>动画效果示例</h1>
        <Animation></Animation>
      </Fragment>
    )
  }

  // 组件被挂载到页面之后自动执行
  componentDidMount() {
    // 一般在此处发送Ajax
    console.log('TodoList componentDidMount');
    axios.get('/api/todolist').then((res) => {
      console.log('res');
    }).catch(() => {
      console.log('error');
    })
  }

  // 组件被更新之前，会被自动执行
  shouldComponentUpdate() {
    console.log('TodoList shouldComponentUpdate');
    return true;
  }

  // 组件被更新之前，会被自动执行
  // 如果shouldComponentUpdate返回false则不执行
  componentWillUpdate() {
    console.log('TodoList componentWillUpdate');
  }

  // 组件更新之后，会被自动执行
  componentDidUpdate() {
    console.log('TodoList componentDidUpdate');
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <Fragment key={index}>
          {/*<li
            key={index}
            onClick={this.handleItemDelete.bind(this, index)}
            dangerouslySetInnerHTML={{__html: item}}
          >
          </li>*/}
          <TodoItem
            content={item}
            index={index}
            deleteItem={this.handleItemDelete}
            ref={(todoItem) => {this.todoItem = todoItem}}
          />
        </Fragment>
      )
    })
  }

  handleInputChange(ev) {
    // this.setState({
    //   inputValue: ev.target.value
    // });
    console.log(`this.input is`);
    console.log(this.input);
    const value = ev.target.value;
    this.setState(() => ({
      inputValue: value
    }));
  }

  handleButtonClick() {
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // });
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }), () => {
      console.log(this.ul.querySelectorAll('div').length);
      this.todoItem.todoItemConsole();
    });
  }

  handleItemDelete(index) {
    // const list = [...this.state.list];
    // list.splice(index, 1);
    // this.setState({
    //   list: list
    // });
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return {
        list
      }
    });
  }
}

export default TodoList;
