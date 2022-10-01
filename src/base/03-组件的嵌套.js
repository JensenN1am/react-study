/*
 * @Author: jensenlin
 * @Date: 2022-09-30 22:38:19
 * @Description: 
 */

 import React, { Component } from 'react'
 
 class NaviBar extends Component {
     render() {
         return (
             <div>
                 我是导航栏
             </div>
         )
     }
 }

 function FooterBar() {
     return (
        <div>
            我是底部
        </div>
     )
 }
 
 export default class App extends Component {
     render() {
         return (
             <div>
                <NaviBar></NaviBar>
                <FooterBar></FooterBar>
             </div>
         )
     }
 }
 