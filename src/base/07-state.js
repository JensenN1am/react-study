/*
 * @Author: jensenlin
 * @Date: 2022-10-01 15:18:58
 * @Description:  
 * 只需更新组件的 state，然后根据新的 state 重新渲染用户界面（不要操作 DOM）。
 * 不要直接修改 State
 */

 import React, { Component } from 'react'
 
 export default class App extends Component {
     state = {
         isLike: false
     }
     render() {
         return (
             <div>
                 <button onClick={ ()=>{
                     this.setState({
                         isLike: !this.state.isLike
                     })
                 }}>{this.state.isLike? '取消' : '收藏'}</button>
             </div>
         )
     }
 }
 