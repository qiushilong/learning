import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import LinkDemo from './component/LinkDemo';
// import OutletDemo from './component/OutletDemo.jsx';
// import NavigateDemo from './component/NavigateDemo.jsx';
// import NavLinkDemo from './component/NavLinkDemo.jsx';
// import UseHrefDemo from './hook/UseHrefDemo.jsx';
// import BaseUseDemo from './example/BaseUseDemo.jsx';
// import AuthDemo from './example/AuthDemo.jsx';
import LazyLoadingDemo from './example/LazyLoadingDemo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			{/* <LinkDemo /> */}
			{/* <OutletDemo /> */}
			{/* <NavigateDemo /> */}
			{/* <NavLinkDemo /> */}
			{/* <UseHrefDemo /> */}
			{/* <BaseUseDemo /> */}
			{/* <AuthDemo /> */}
			<LazyLoadingDemo />
		</BrowserRouter>
	</React.StrictMode>
);
