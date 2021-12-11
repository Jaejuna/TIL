import React from 'react';
import TIL from '../routes/TIL';
import Blog from '../routes/Blog';

import {HashRouter as Router, Route, Switch} from "react-router-dom";

const CompRouter = () => {
	return (
		<Router>
			<Switch>
				<Route path = "/" component = {App}>
					<Route path = "/TIL" component = {App} />
					<Route path = "/blog" component = {App} />
				</Route>
			</Switch>
		</Router>
	);
}

export default CompRouter