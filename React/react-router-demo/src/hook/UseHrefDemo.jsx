import React from 'react';
import { useHref, useLocation } from 'react-router';

const UseHrefDemo = () => {
	const href = useHref('/login');
	const location = useLocation();

	console.log(href);
	console.log(location);

	return <>useHref</>;
};

export default UseHrefDemo;
