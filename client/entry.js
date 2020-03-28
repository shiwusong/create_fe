import React from 'react';
import ReactDOM from 'react-dom';
import Page1 from './pages';
import Demo from './pages/demo';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import 'antd-mobile/dist/antd-mobile.css';

const { appName } = require('../config');
ReactDOM.render(
	<React.StrictMode>
		<Router>
			<div>
				<Switch>
					<Route path={`/${appName}/app`}>
						<div>app</div>
					</Route>
					<Route path={`/${appName}/demo`}>
						<Demo />
					</Route>
					<Route path={`/${appName}`}>
						<Page1 />
					</Route>
					<Route path="/">
						<Page1 />
					</Route>
				</Switch>
			</div>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
