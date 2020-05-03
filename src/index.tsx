import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import store from './redux/redux-store'
import {  State } from './model/model';


const rerender = (state: any) => {
    ReactDOM.render(<App dialogPage={state.dialogs} profilePage={state.profile} dispatch={store.dispatch.bind(store)} />, document.getElementById('root'));
}
store.subscribe(()=>{
    rerender(store.getState());
})
rerender(store.getState());



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
