/*
 * @Author: jensenlin
 * @Date: 2022-10-01 19:54:07
 * @Description: 
 * State 的更新可能是异步的
 * State 的更新会被合并
 * 数据是向下流动的
 */
import React, { Component } from 'react'

export default class App extends Component {
    state = {
        count: 1
    }

    handleAdd1 = ()=>{
        // 异步逻辑中 setState异步更新数据和真是dom
        // 同步逻辑中 setState同步更新数据和真是dom
        this.setState({
            count: this.state.count+1
        })
        this.setState({
            count: this.state.count+1
        })
        this.setState({
            count: this.state.count+1
        })

       
    }
    handleAdd2 = ()=>{
        this.setState({
            count: this.state.count+1
        },()=>{
            this.setState({
                count: this.state.count+1
            },()=>{
                this.setState({
                    count: this.state.count+1
                })
            })
        })
     
    }
    render() {
        return (
            <div>
                {this.state.count}
                <button onClick={this.handleAdd1}>add1</button>
                <button onClick={this.handleAdd2}>add2</button>
            </div>
        )
    }
}
