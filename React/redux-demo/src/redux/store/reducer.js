const defaultState = {
	inputValue: '123',
	list: [1, 2, 3],
};

// 创建 reducer
const reducer = (state = defaultState, action) => {
	if (action.type === 'change_input_value') {
		// 返回的对象需要是新的对象
		const newState = JSON.parse(JSON.stringify(state));
		newState.inputValue = action.value;
		return newState;
	}
	return state;
};

export default reducer;

