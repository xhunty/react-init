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
import { IPostProps } from './components/Profile/MyPosts/Post/Post';
import { IMessageProps } from './components/Dialogs/Message/Message';
import { IDialogItemProps } from './components/Dialogs/DialogItem/DialogItem';

export interface IAppProps{
  posts: IPostProps[],
  messages:IMessageProps[],
  dialogs:IDialogItemProps[]
}

const App: React.FC<IAppProps> = (props) => {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className='app-wrapper-content'>
        <Route path="/dialogs" render = {() => <Dialogs messaes={props.messages} dialogs={props.dialogs} />}/>
        <Route path="/profile" render = {() => <Profile allposts = {props.posts} status="app" />} />
        <Route path="/settings" component={Settings} />
        <Route path="/music" component={Music} />
        <Route path="/news" component={News} />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
