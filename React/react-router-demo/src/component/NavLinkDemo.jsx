import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';

const LinkDemo = () => {
	return (
		<>
			<NavLink
				to="/register"
				style={({ isActive }) => ({
					color: isActive ? 'red' : 'black',
				})}
			>
				register
			</NavLink>
			&nbsp;
			<NavLink to="/login">login</NavLink>
			<br />
			<Routes>
				<Route path="register" element={<>register</>}></Route>
				<Route path="login" element={<>login</>}></Route>
			</Routes>
		</>
	);
};

export default LinkDemo;
