import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

const emitNotification = () => {
    setInterval(() => {
        window.dispatchEvent(
            new CustomEvent(`emitCart`, {
                detail: localStorage.getItem('storage')
            })
        )
        window.dispatchEvent(
            new CustomEvent(`emitToken`, {
                detail: localStorage.getItem('accessToken')
            })
        )
    }, 0)
}
emitNotification()

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();