import { combineReducers } from 'redux';
import { ADD_WEATHERDATA_TO_LIST } from './actions';

// Initial States
const initialState = {
  weatherDataList: [],
}

// Reducers
function weatherDataListReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_WEATHERDATA_TO_LIST:
      return {
        weatherDataList: [...state.weatherDataList, action.weatherData]
      };
    default:
      return state;
  }
}

// Combine reducers
const rootReducer = combineReducers({
  weatherDataListReducer,
});

export default rootReducer;
