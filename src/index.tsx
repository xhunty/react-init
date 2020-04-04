import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import store from './redux/state'
import { Store } from './model/model';

ReactDOM.render(<App state = {store.state} />, document.getElementById('root'));

export const rerender = (store: Store) => {
    ReactDOM.render(<App state = {store.state} />, document.getElementById('root'));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
