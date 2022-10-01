/*
 * @Author: jensenlin
 * @Date: 2022-10-01 14:51:12
 * @Description: React 事件的命名采用小驼峰式（camelCase），而不是纯小写。    
 */

 import React, { Component } from 'react'
 
 export default class App extends Component {

    handleClick2 = () => {
        console.log('点击2',this); //箭头函数this永远指向外部实例
    }

    handleClick3() {
        console.log('点击3',this); //undefined ,需要通过bind修正this的指向
    }

    handleClick4 = (name) => {
        console.log('点击4'+name,this); //箭头函数this永远指向外部实例
    }

     render() {
         return (
             <div>
                 <button onClick={() => {
                     console.log('点击1',this);
                 }}>点击1</button>

                {/* 推荐 这种不可以传参 */}
                 <button onClick={this.handleClick2}>点击2</button>

                 <button onClick={this.handleClick3.bind(this)}>点击3</button>
                 {/*推荐 这种可以传参 */}
                 <button onClick={ () => {this.handleClick4('jensen')}}>点击4</button>
             </div>
         )
     }
 }
 