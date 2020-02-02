import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { IMyPostsProps } from './components/Profile/MyPosts/MyPosts';

const _posts:IMyPostsProps = {
    allposts : [{
      id:1,
      message:'message1 test app top',
      likes:12
    },{
      id:2,
      message:'message2',
      likes:123
    },{
      id:3,
      message:'message3',
      likes:1234
    },{
      id:4,
      message:'message4',
      likes:1235
    },{
      id:5,
      message:'message5',
      likes:6
    },{
      id:6,
      message:'message6',
      likes:1237
    },{
      id:7,
      message:'message7',
      likes:1238
    }],
    status:'test'
  }

ReactDOM.render(<App allposts={_posts.allposts} status="top" />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
