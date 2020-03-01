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
import { Store } from './model/model';


const App: React.FC<Store> = (props) => {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className='app-wrapper-content'>
        <Route path="/dialogs" render = {() => <Dialogs Messages={props.state.dialogPage.Messages} Dialogs={props.state.dialogPage.Dialogs} />}/>
        <Route path="/profile" render = {() => <Profile Posts = {props.state.profilePage.Posts} addPost={props.state.profilePage.addPost} NewPostText={props.state.profilePage.NewPostText}/>} />
        <Route path="/settings" component={Settings} />
        <Route path="/music" component={Music} />
        <Route path="/news" component={News} />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
