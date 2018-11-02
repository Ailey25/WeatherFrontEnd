import React from "react";
import ReactDOM from "react-dom";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import {
  addWeatherDataToList,
} from '../actions';

class WeatherData extends React.Component {
  constructor(props) {
    super(props);

    // local state only for creating a WeatherData object for passing
    // complete WeatherDataObject is stored in redux store in an array
    this.state = {
      country: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.createWeatherDataObject = this.createWeatherDataObject.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('cur ' + event.currentTarget);
    console.log('targ ' + event.target);
    const country = this.state.country;
    const weatherObject = this.createWeatherDataObject(null, country);
    this.setState({country: ''});

    this.props.onAddWeather(weatherObject);
  }

  handleChange(event) {
    this.setState({
      country: event.target.value,
    });
  }

  createWeatherDataObject(id, country) {
    // if (id.length === 0) {
    //
    // } else {
    //
    // }

    return {
      country: country,
      temperature: '0 degrees',
      description: 'No snow this week!',
    };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input id="country"
              type="text"
              value={this.state.country}
              onChange={this.handleChange}>
        </input>
        <input type="submit">
        </input>
      </form>
    );
  }
}

// Setup to connect to redux store
const mapStateToProps = (state) => ({
    weatherDataList: state.weatherDataListReducer.weatherDataList,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onAddWeather: (weatherObject) =>
      dispatch(addWeatherDataToList(weatherObject))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherData);
