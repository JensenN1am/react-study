/*
 * @Author: jensenlin
 * @Date: 2022-09-30 22:58:06
 * @Description: css
 */

 import React, { Component } from 'react'
 import './04-index.css'
 
 export default class App extends Component {
     render() {
         return (
             <div>
                 {10+20}
                 {'jensen' + 'lin'}
                 <div className="haha">111</div>
                 <div style={{background: 'blue'}}>222</div>
             </div>
         )
     }
 }
 