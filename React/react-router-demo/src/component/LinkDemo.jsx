import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

const LinkDemo = () => {
	return (
		<>
			<Link to="/register">register</Link>&nbsp;
			<Link to="/login">login</Link>
			<br />
			<Routes>
				<Route path="register" element={<>register</>}></Route>
				<Route path="login" element={<>login</>}></Route>
			</Routes>
		</>
	);
};

export default LinkDemo;
