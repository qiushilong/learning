import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";

export function Counter() {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<div>
			<div>
				<button onClick={() => dispatch(increment())}>+</button>
				{count}
				<button onClick={() => dispatch(decrement())}>-</button>
			</div>
		</div>
	);
}
