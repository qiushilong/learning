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

  const handleClick=()=>{
    // store 通过 dispatch 一个 action 来改变 state
    store.dispatch({type:'incremented'})
  }

	return <div onClick={handleClick}>{JSON.stringify(data)}</div>;
};

export default Demo;