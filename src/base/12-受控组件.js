/*
 * @Author: jensenlin
 * @Date: 2022-10-20 23:14:18
 * @Description: 
    在HTML的表单元素中，它们通常自己维护一套state，并随着用户的输入自己进行UI上的更新，这种行为是不被我们程序所管控的。而如果将React里的state属性和表单元素的值建立依赖关系，再通过onChange事件与setState()结合更新state属性，就能达到控制用户输入过程中表单发生的操作。被React以这种方式控制取值的表单输入元素就叫做受控组件。

    绝大部分时候推荐使用受控组件来实现表单，因为在受控组件中，表单数据由React组件负责处理；当然如果选择非受控组件的话，表单数据就由DOM本身处理
 */

import React, { Component } from 'react'

export default class App extends Component {

    state = {
        username: "jensen"
    }

    render() {
        return (
            <div>
                {/* 但是这时候你会发现input的内容是只读的，因为value会被我们的this.state.username所控制，当用户输入新的内容时，this.state.username并不会自动更新，这样的话input内的内容也就不会变了,我们可以用一个onChange事件来监听输入内容的改变并使用setState更新 */}
                <input name="username" value={this.state.username} onChange={(e)=>{
                    console.log("onChange");
                    this.setState({
                        username: e.target.value
                    })
                }}></input>
                <button onClick={()=>{
                    console.log(this.state.username);
                    
                }}>提交</button>
            </div>
        )
    }
}

 