import React, { useState, useEffect } from 'react';
import store from '../store';

const ReduxDemo = () => {
	const [data, setData] = useState(store.getState());

	useEffect(() => {
		// 订阅 store，store 更新时会调用 dataChange
		store.subscribe(dataChange);
	});

	const dataChange = () => {
		setData(store.getState);
	};

	const hangleChange = (e) => {
		const action = {
			type: 'change_input_value',
			value: e.target.value,
		};
		store.dispatch(action);
	};

	return (
		<>
			<h1>{data?.inputValue}</h1>
			<div>
				<input type="text" onChange={hangleChange} />
			</div>
			<ul>
				{data?.list?.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</>
	);
};

export default ReduxDemo;
