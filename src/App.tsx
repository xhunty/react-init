import React from 'react';

import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Settings from './components/Settings/Settings'
import {Route, BrowserRouter} from 'react-router-dom'
import Music from './components/Music/Music';
import News from './components/News/News';
import { IMyPostsProps } from './components/Profile/MyPosts/MyPosts';

const App: React.FC<IMyPostsProps> = (props) => {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className='app-wrapper-content'>
        <Route path="/dialogs" component={Dialogs}/>
        <Route path="/profile" render = {() => <Profile allposts = {props.allposts} status="app" />} />
        <Route path="/settings" component={Settings} />
        <Route path="/music" component={Music} />
        <Route path="/news" component={News} />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
