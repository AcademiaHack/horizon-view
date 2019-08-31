import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/sass/materialize.scss'
import './assets/styles/index.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render( 
    <Router >
    <App / >
    </Router>, document.getElementById('root'));