import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Settings from './components/Settings/Settings'
import {Route, BrowserRouter} from 'react-router-dom'
import Music from './components/Music/Music';
import News from './components/News/News';

import ProfileContainer from './components/Profile/ProfileContainer'
import DialogContainer from './components/Dialogs/DialogsContainer';

const App: React.FC = () => {

  return (    
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className='app-wrapper-content'>
        <Route path="/dialogs" render = {() => <DialogContainer />}/>
        {<Route path="/profile" render = {() => <ProfileContainer />} />}
        <Route path="/settings" component={Settings} />
        <Route path="/music" component={Music} />
        <Route path="/news" component={News} />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
