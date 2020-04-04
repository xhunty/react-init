import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import store from './redux/state'
import {  State } from './model/model';


const rerender = (state: State) => {
    ReactDOM.render(<App dialogPage={state.dialogPage} profilePage={state.profilePage} />, document.getElementById('root'));
}
store.subscribe(rerender);
rerender(store.state);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
