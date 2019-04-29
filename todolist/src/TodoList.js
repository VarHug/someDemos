import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem/TodoItem';
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

  render() {
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
          />
          <button onClick={this.handleButtonClick}>提交</button>
        </div>
        {
          // 下面是todolist的列表
          // 点击响应的元素，即可实现删除
        }
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    )
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
          />
        </Fragment>
      )
    })
  }

  handleInputChange(ev) {
    // this.setState({
    //   inputValue: ev.target.value
    // });
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
    }));
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
