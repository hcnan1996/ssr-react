import React from 'react';
import ReactDom from 'react-dom';
import Home from '../containers/home';

// 在服务端渲染和客户端首次渲染完全一致的情况下，才能使用hydrate替换render
ReactDom.hydrate(<Home />, document.getElementById('root'))