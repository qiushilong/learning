import React, { useState } from 'react';
import { Link, Routes, Route, Navigate } from 'react-router-dom';

const NavigateDemo = () => {
	const [flag, setFlag] = useState(false);
	return (
		<>
			<Link to="/register">register</Link>&nbsp;
			<button onClick={() => setFlag(true)}>setFlag:true</button>
			{flag && <Navigate to="/login">login</Navigate>}
			<br />
			<Routes>
				<Route path="register" element={<>register</>}></Route>
				<Route path="login" element={<>login</>}></Route>
			</Routes>
		</>
	);
};

const NavigateDemo2 = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<NavigateDemo></NavigateDemo>}></Route>
				<Route path="register" element={<>register</>}></Route>
				<Route path="login" element={<>login</>}></Route>
			</Routes>
		</>
	);
};

export default NavigateDemo2;
