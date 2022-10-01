/*
 * @Author: jensenlin
 * @Date: 2022-10-01 15:36:47
 * @Description: todolist案例
 */

import React, { Component } from "react";

export default class App extends Component {
  myRef = React.createRef();
  state = {
    list: ["111", "222", "333"],
  };
  handleAdd = () => {
    //  不要直接修改state,可能造成不可预期的问题
    // this.state.list.push(this.myRef.current.value)

    // 浅复制，会影响原来的对象
    // let newlist = this.state.list

    // 深复制，不会影响原对象
    let newlist = [...this.state.list];
    newlist.push(this.myRef.current.value);
    this.setState({
      list: newlist,
    });
  };
  handleDel = (index) => {
    // slice() 什么都不传就是深复制返回
    let newlist = this.state.list.slice();
    newlist.splice(index, 1);
    console.log(index);
    this.setState({
      list: newlist,
    });
  };
  render() {
    return (
      <div>
        <input ref={this.myRef} />
        <button onClick={this.handleAdd}>add</button>

        <ul>
          {this.state.list.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => this.handleDel(index)}>del</button>
            </li>
          ))}
        </ul>

        {/* {this.state.list.length === 0 ? <div>暂无代办事项~</div> : null} */}
        {this.state.list.length === 0 && <div>暂无代办事项~</div>}
      </div>
    );
  }
}
