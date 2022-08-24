import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import { Counter } from "./Counter";

const Demo = () => {
	return (
		<Provider store={store}>
			<Counter></Counter>
		</Provider>
	);
};

export default Demo;
