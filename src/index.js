import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/Store';
import './index.css';
import App from './hooks/App';

/*
React Redux <Provider />, makes the Redux store available to the rest of app


ReactDOM.render(
                <Provider store={store}>
                 <App />
                </Provider>,
                document.getElementById('root')
            );

*/

ReactDOM.render(
     <App />, document.getElementById('root')
);



           