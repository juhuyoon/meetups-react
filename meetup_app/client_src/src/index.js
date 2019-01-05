import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    //Browser Router used to handle dynamic requests in the browser
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root')); //where to insert the React into for the DOM at index.html
registerServiceWorker();
