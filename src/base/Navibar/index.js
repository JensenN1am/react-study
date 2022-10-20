/*
 * @Author: jensenlin
 * @Date: 2022-10-19 21:59:17
 * @Description: 
 * 
 */
import React, { Component } from 'react'
import NavibarPropType from 'prop-types'

console.log(NavibarPropType);

export default class Navibar extends Component {

    // 类属性 验证
    static propTypes = {
        title: NavibarPropType.string,
        show: NavibarPropType.bool
    }
    // 默认属性
    static defaultProps = {
        show: true
    }
    render() {
        return (
            <div>
                navbar --- {this.props.show && <h2>{this.props.title}</h2>}
            </div>
        )
    }
}
