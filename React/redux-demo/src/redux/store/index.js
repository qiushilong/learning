import { createStore } from 'redux';
import reducer from './reducer';

// 创建 store
const store = createStore(reducer, window?.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
