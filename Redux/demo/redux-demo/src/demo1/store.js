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
