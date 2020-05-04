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
import { State } from './model/model';
import { connect } from 'react-redux';
import { ReducerType } from './redux/redux-store';


const App: React.FC<ReturnType<typeof mapStateToProps>> = (props) => {
  debugger;
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className='app-wrapper-content'>
        <Route path="/dialogs" render = {() => <Dialogs Messages={props.dialogs.Messages} 
                                                        Dialogs={props.dialogs.Dialogs} 
                                                        NewMessageText={props.dialogs.NewMessageText} 
                                                        dispatch = {props.dialogs.dispatch} />}/>
        <Route path="/profile" render = {() => <Profile dispatch={props.profile.dispatch} 
                                                        Posts = {props.profile.Posts}                                                         
                                                        NewPostText={props.profile.NewPostText}/>} />
        <Route path="/settings" component={Settings} />
        <Route path="/music" component={Music} />
        <Route path="/news" component={News} />
      </div>
    </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state:ReducerType) => state

export default connect(mapStateToProps)(App);
