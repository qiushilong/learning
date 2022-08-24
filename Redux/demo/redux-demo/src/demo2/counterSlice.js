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
