const ADD_WEATHERDATA_TO_LIST = 'ADD_WEATHERDATA';

// Action Creators
export function addWeatherDataToList (weatherData) {
  return {
    type: ADD_WEATHERDATA_TO_LIST,
    weatherData
  }
}

export {
  ADD_WEATHERDATA_TO_LIST
};
