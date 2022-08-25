import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import Counter from "./Counter";
import Counter2 from "./Counter2";

const Demo = () => {
	return (
		<Provider store={store}>
			<Counter />
			<Counter2 />
		</Provider>
	);
};

export default Demo;
