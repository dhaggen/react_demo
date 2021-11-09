import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import * as serviceWorker from './helpers/serviceWorker';
import 'url-search-params-polyfill';
import "@babel/polyfill";
import {Kateterablation} from "./components/Sections/Kateterablation";
var pckg = require('./../package.json');

require('es6-promise').polyfill();

ReactDOM.render(<Kateterablation version={pckg.version} name={pckg.name}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

module.hot.accept();