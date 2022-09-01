import * as React from 'react';
import {
	Routes,
	Route,
	Link,
	useNavigate,
	useLocation,
	Navigate,
	Outlet,
} from 'react-router-dom';

const fakeAuthProvider = {
	isAuthenticated: false,
	signin(callback) {
		fakeAuthProvider.isAuthenticated = true;
		setTimeout(callback, 100); // fake async
	},
	signout(callback) {
		fakeAuthProvider.isAuthenticated = false;
		setTimeout(callback, 100);
	},
};

export default function App() {
	return (
		<AuthProvider>
			<h1>Auth Example</h1>

			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<PublicPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route
						path="/protected"
						element={
							<RequireAuth>
								<ProtectedPage />
							</RequireAuth>
						}
					/>
				</Route>
			</Routes>
		</AuthProvider>
	);
}

function Layout() {
	return (
		<div>
			<AuthStatus />

			<ul>
				<li>
					<Link to="/">Public Page</Link>
				</li>
				<li>
					<Link to="/protected">Protected Page</Link>
				</li>
			</ul>

			<Outlet />
		</div>
	);
}

let AuthContext = React.createContext(null);

function AuthProvider({ children }) {
	let [user, setUser] = React.useState(null);

	let signin = (newUser, callback) => {
		return fakeAuthProvider.signin(() => {
			setUser(newUser);
			callback();
		});
	};

	let signout = (callback) => {
		return fakeAuthProvider.signout(() => {
			setUser(null);
			callback();
		});
	};

	let value = { user, signin, signout };

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
	return React.useContext(AuthContext);
}

function AuthStatus() {
	let auth = useAuth();
	let navigate = useNavigate();

	if (!auth.user) {
		return <p>You are not logged in.</p>;
	}

	return (
		<p>
			Welcome {auth.user}!{' '}
			<button
				onClick={() => {
					auth.signout(() => navigate('/'));
				}}
			>
				Sign out
			</button>
		</p>
	);
}

function RequireAuth({ children }) {
	let auth = useAuth();
	let location = useLocation();

	if (!auth.user) {
		return <Navigate to="/login" state={{ from: location }} replace />;
	}

	return children;
}

function LoginPage() {
	let navigate = useNavigate();
	let location = useLocation();
	let auth = useAuth();

	let from = location.state?.from?.pathname || '/';

	function handleSubmit(event) {
		event.preventDefault();

		let formData = new FormData(event.currentTarget);
		let username = formData.get('username');

		auth.signin(username, () => {
			navigate(from, { replace: true });
		});
	}

	return (
		<div>
			<p>You must log in to view the page at {from}</p>

			<form onSubmit={handleSubmit}>
				<label>
					Username: <input name="username" type="text" />
				</label>{' '}
				<button type="submit">Login</button>
			</form>
		</div>
	);
}

function PublicPage() {
	return <h3>Public</h3>;
}

function ProtectedPage() {
	return <h3>Protected</h3>;
}
