import * as React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';

export default function App() {
	return (
		<div>
			<h1>Basic Example</h1>

			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="dashboard" element={<Dashboard />} />
					<Route path="*" element={<NoMatch />} />
				</Route>
			</Routes>
		</div>
	);
}

function Layout() {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/dashboard">Dashboard</Link>
					</li>
					<li>
						<Link to="/nothing-here">Nothing Here</Link>
					</li>
				</ul>
			</nav>
			<hr />
			<Outlet />
		</div>
	);
}

function Home() {
	return (
		<div>
			<h2>Home</h2>
		</div>
	);
}

function About() {
	return (
		<div>
			<h2>About</h2>
		</div>
	);
}

function Dashboard() {
	return (
		<div>
			<h2>Dashboard</h2>
		</div>
	);
}

function NoMatch() {
	return (
		<div>
			<h2>Nothing to see here!</h2>
			<p>
				<Link to="/">Go to the home page</Link>
			</p>
		</div>
	);
}
