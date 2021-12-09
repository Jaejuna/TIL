import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';

import './index.css';
import App from './App';

ReactDOM.render(
	<Router history = {browserHistory}>
		<Route path = "/" component = {App}>
			<Route path = "/TIL" component = {App}>
			<Route path = "/blog" component = {App}>
		</Route>
	</Router>
    <App />,
  document.getElementById('root')
);

