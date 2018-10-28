import React from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux'
import WeatherDataList from './WeatherDataList';
import {
  addWeatherDataToList,
} from '../actions';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onClickAddWeather();
  }

  render() {
    return (
      <section>
        <div>
          <button onClick={this.handleChange}>+</button>
        </div>
        <WeatherDataList />
      </section>
    );
  }
}

// Setup to connect to redux store
const mapStateToProps = (state) => ({
    weatherDataList: state.weatherDataListReducer.weatherDataList,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onClickAddWeather: () =>
      dispatch(addWeatherDataToList({country: 'Canada'}))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
