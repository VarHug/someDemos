import React, { Component } from 'react';
import 'antd/dist/antd.css';
import TodoListUI from './TodoListUI/TodoListUI';
import store from '../store/index';
import * as actionCreators from '../store/actionCreators';

// const data = [
//   'Racing car sprays burning fuel into crowd.',
//   'Japanese princess to wed commoner.',
//   'Australian walks 100km after outback crash.',
//   'Man charged over missing wedding girl.',
//   'Los Angeles battles huge wildfires.',
// ];

class AntdTodoList extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  render() {
    return (
      <TodoListUI
        inputValue = {this.state.inputValue}
        list={this.state.list}
        handleInputChange = {this.handleInputChange}
        handleButtonClick = {this.handleButtonClick}
        handleItemDelete = {this.handleItemDelete}
      />
    )
  }

  componentDidMount() {
    // 模拟Ajax异步请求
    setTimeout(() => {
      const data = ['hello', 'world'];
      const action = actionCreators.initListAction(data);
      store.dispatch(action);
    }, 100);
  }

  handleInputChange(ev) {
    const action = actionCreators.getChangeInputValueAction(ev.target.value);
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  handleButtonClick() {
    const action = actionCreators.getAddTodoItemAction()
    store.dispatch(action);
  }

  handleItemDelete(index) {
    const action = actionCreators.getDeleteTodoItemAction(index)
    store.dispatch(action);
  }
}

export default AntdTodoList;
