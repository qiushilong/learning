# Redux

redux 是 javascript 应用的一个可预测的 state 容器。

redux 很小（2kb，包括依赖项），但是有庞大的生态圈和插件可用。

## redux 基本使用

store.js

```js
import { createStore } from "redux";

// 制定 reducer
function counterReducer(state = { value: 0 }, action) {
	switch (action.type) {
		case "incremented":
			return { value: state.value + 1 };
		case "decremented":
			return { value: state.value - 1 };
		default:
			return state;
	}
}

// 根据 reducer 创建 store
const store = createStore(
	counterReducer,
	// 使用 redux devtool 时，需要带上第二个参数（不使用可用去掉）
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
```

demo.jsx

```jsx
import React, { useState, useEffect } from "react";
import store from "./store";

const Demo = () => {
	// 使用 store.getState() 获取到 state
	const [data, setData] = useState(store.getState());

	useEffect(() => {
		// 订阅 state 更新事件，及时更新 UI
		store.subscribe(() => {
			setData(store.getState());
		});
	});

	const handleClick = () => {
		// store 通过 dispatch 一个 action 来改变 state
		store.dispatch({ type: "incremented" });
	};

	return <div onClick={handleClick}>{JSON.stringify(data)}</div>;
};

export default Demo;
```

## redux-toolkit 基本使用

counterSlice.js（切片）

```js
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
	name: "counter",
	initialState: {
		value: 0,
	},
	reducers: {
		incremented: (state) => {
			state.value += 1;
		},
		decremented: (state) => {
			state.value -= 1;
		},
	},
});

export const { incremented, decremented } = counterSlice.actions;
```

store.js

```js
import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";

const store = configureStore({
	reducer: counterSlice.reducer,
});

export default store;
```

demo.jsx

```jsx
import React, { useState, useEffect } from "react";
import store from "./store";
import { incremented, decremented } from "./counterSlice";

const Demo = () => {
	// 使用 store.getState() 获取到 state
	const [data, setData] = useState(store.getState());

	useEffect(() => {
		// 订阅 state 更新事件，及时更新 UI
		store.subscribe(() => {
			setData(store.getState());
		});
	});

	const handleClick = () => {
		// store 通过 dispatch 切片导出函数的返回结果作为 action
		store.dispatch(incremented());
	};

	return <div onClick={handleClick}>{JSON.stringify(data)}</div>;
};

export default Demo;
```

# Redux 流

![](./img/redux%20flow.png)
