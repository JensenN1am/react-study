/*
 * @Author: jensenlin
 * @Date: 2022-10-19 21:55:43
 * @Description: 
 * state 和 props 主要的区别在于 props 是不可变的，
 * 而 state 可以根据与用户交互来改变。
 */

 import React, { Component } from 'react'
 import NaviBar from './Navibar'
 
 export default class App extends Component {
     render() {
         return (
             <div>
                 <NaviBar title="首页" show={false}/>
                 <NaviBar title="发现"/>
                 <NaviBar title="我的"/>
             </div>
         )
     }
 }
 