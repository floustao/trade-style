import React from 'react';
import { Switch } from 'react-router-dom';

import FancyRoute from './FancyRoute';
import Controller from '../Controller';
import About from '../About';
import Faq from '../Faq';

export default function Routes() {
	return (
		<Switch>
			{ROUTES.map((route) => (
				<FancyRoute key={route.key} {...route} />
			))}
		</Switch>
	);
}

const ROUTES = [
	{
		path: '/',
		key: 'Controller',
		exact: true,
		component: Controller,
	},
	{
		path: '/about',
		key: 'ABOUT_PAGE',
		component: About,
	},
	{
		path: '/faq',
		key: 'FAQ_PAGE',
		component: Faq,
	},
];
