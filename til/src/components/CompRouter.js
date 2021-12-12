import React from 'react';
import TIL from '../routes/TIL';
import Blog from '../routes/Blog';
import App from '../app';

import {HashRouter as Router, Route, Routes} from "react-router-dom";

const CompRouter = () => {
	return (
		<Router>
			<Routes>
				<Route path = "/" component = {App}>
					<Route path = "/TIL" component = {TIL} />
					<Route path = "/blog" component = {Blog} />
				</Route>
			</Routes>
		</Router>
	);
}

export default CompRouter