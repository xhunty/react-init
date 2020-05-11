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
import { sendMessageActionCreator, updateNewMessageText, updateNewPostTextActionCreator, addNewPostActionCreator } from './redux/actions';


const App: React.FC<State> = (props) => {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className='app-wrapper-content'>
        <Route path="/dialogs" render = {() => <Dialogs Messages={props.dialogPage.Messages} 
                                                        Dialogs={props.dialogPage.Dialogs} 
                                                        NewMessageText={props.dialogPage.NewMessageText}
                                                        SendMessage={() => {
                                                          props.dispatch(sendMessageActionCreator());
                                                        }}
                                                        UpdateText={(text:string)=>{
                                                          props.dispatch(updateNewMessageText(text));
                                                        }}/>}/>
        <Route path="/profile" render = {() => <Profile Posts = {props.profilePage.Posts}                                                         
                                                        NewPostText={props.profilePage.NewPostText}
                                                        UpdateText={(text:string)=>{
                                                          props.dispatch(updateNewPostTextActionCreator(text));
                                                        }}
                                                        PublishPost={()=>{
                                                          props.dispatch(addNewPostActionCreator());
                                                        }} />} />
        <Route path="/settings" component={Settings} />
        <Route path="/music" component={Music} />
        <Route path="/news" component={News} />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
