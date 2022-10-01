/*
 * @Author: jensenlin
 * @Date: 2022-10-01 15:03:13
 * @Description: 
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
 