/*
 * @Author: jensenlin
 * @Date: 2022-10-01 15:03:13
 * @Description: 
 * Ref 转发是一项将 ref 自动地通过组件传递到其一子组件的技巧
 * React 支持一种非常特殊的属性 Ref ，你可以用来绑定到 render() 输出的任何组件上。
 *   管理焦点，文本选择或媒体播放。
     触发强制动画。
     集成第三方 DOM 库。
 */

 import React, { Component } from 'react'
 
 export default class App extends Component {

     myRef = React.createRef()

     render() {
         return (
             <div>
                {/* <input ref = "input1" />  */}
                <input ref={this.myRef} />

                {/* <button onClick={ ()=>{
                    console.log(this.refs.input1.value);            
                }}>提交</button> */}

                <button onClick={ ()=>{
                    console.log(this.myRef.current.value);            
                }}>提交</button>
             </div>
         )
     }
 }
 