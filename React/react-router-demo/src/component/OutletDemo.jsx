import React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';

function Dashboard() {
	return (
		<div>
			<h1>Dashboard</h1>
			<Link to="messages">messages</Link>&nbsp;&nbsp;
			<Link to="/tasks">tasks</Link>&nbsp;&nbsp;
			<Link to="/">/</Link>&nbsp;&nbsp;
			<br />
			<Outlet />
		</div>
	);
}

function App() {
	return (
		<Routes>
			<Route path="/" element={<Dashboard />}>
				<Route path="messages" element={<DashboardMessages />} />
				<Route path="tasks" element={<DashboardTasks />} />
			</Route>
		</Routes>
	);
}

function DashboardMessages() {
	return <>DashboardMessages</>;
}

function DashboardTasks() {
	return <>DashboardTasks</>;
}

export default App;
