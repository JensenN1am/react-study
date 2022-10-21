/*
 * @Author: jensenlin
 * @Date: 2022-09-30 21:00:39
 * @Description: main index
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './base/13-非受控组件'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    // 严格模式
    <React.StrictMode> 
         <App/>
    </React.StrictMode>
)
