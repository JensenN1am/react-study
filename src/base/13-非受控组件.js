/*
 * @Author: jensenlin
 * @Date: 2022-10-21 21:37:13
 * @Descripttion: 
 * 对于受控组件，我们需要为每个状态更新(例如this.state.username)编写一个事件处理程序(例如this.setState(）)。
 */

import React, { Component } from 'react'

export default class App extends Component {
    usernameRef = React.createRef()
    render() {
        return (
            <div>
                {/* input标签它实际也是一个DOM元素，那么我们可以用获取DOM元素信息的方式来获取表单元素的值,也就是使用ref 
                    在输入框输入内容后，点击提交按钮，我们可以通过this.inputRef成功拿到input的DOM属性信息，包括用户输入的值，这样我们就不需要像受控组件一样，单独的为每个表单元素维护一个状态
                */}
                <input name="username" defaultValue="jensen" ref={this.usernameRef} ></input>
                <button onClick={()=>{
                    console.log(this.usernameRef.current.value);
                    
                }}>提交</button>
            </div>
        )
    }
}
