import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div>
        <div>
          <input
            value={this.props.inputValue}
            onChange={this.props.changeInputValue}
          />
          <button onClick={this.props.addTodoItem}>提交</button>
        </div>
        <ul>
          {
            this.getTodoItem()
          }
        </ul>
      </div>
    )
  }

  handleClick() {

  }

  handleInputChange(ev) {
    console.log(ev.target.value);
  }

  getTodoItem() {
    return this.props.list.map((item, index) => {
      return (
        <li
          key={item}
          onClick={() => {
            return this.props.deleteTodoItem(index);
          }}
        >
          {item}
        </li>
      )
    })
  }

}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

// store的dispatch挂载到props上
const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(ev) {
      const action = {
        type: 'change_input_value',
        value: ev.target.value
      };
      dispatch(action);
    },
    addTodoItem() {
      const action = {
        type: 'add_todo_item'
      };
      dispatch(action);
    },
    deleteTodoItem(index) {
      const action = {
        type: 'delete_todo_item',
        index
      };
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
