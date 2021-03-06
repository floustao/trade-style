/**
 * Add simple slim progress bar + loader to improve UX when switching routes.
 */
import { useEffect, useMemo } from 'react';
import { Route } from 'react-router-dom';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

export default function FancyRoute(props) {
	// useMemo to prevent infinite progress when re-loading the same route
	useMemo(() => {
		nprogress.start();
	}, []);

	useEffect(() => {
		nprogress.done();
	}, []);

	return <Route {...props} />;
}
