import { createStore } from 'redux';
import taskReducers from './redux/reducers/taskReducers';

const store = createStore(
  taskReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;