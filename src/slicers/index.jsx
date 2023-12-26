import { combineReducers } from 'redux';
import dashbordSlice from './dashbordSlicer';

export default combineReducers({
  [dashbordSlice.name]: dashbordSlice.reducer,
});
