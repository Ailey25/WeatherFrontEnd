import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import WeatherData from './WeatherData';

class WatherDataList extends React.Component {
  constructor(props) {
    super(props);

    this.displayList = this.displayList.bind(this);
  }

  displayList() {
    const weatherObj = this.props.weatherDataList.map((weatherData, index) => {
      return (
        <li key={index + 1}>
          <div>
            <label>{weatherData.country}</label>
            <div>
              <label>Temperature: {weatherData.temperature}</label>
            </div>
            <div>
              <label>{weatherData.description}</label>
            </div>
          </div>
        </li>
      );
    });
    return weatherObj;
  }

  render() {
    if (this.props.weatherDataList === undefined ||
        this.props.weatherDataList.length === 0) {
      return (<label>No weather data</label>);
    } else {
      return (
        <ol>
          {this.displayList()}
        </ol>
      )
    }
  }
}

// Setup to connect to redux store
const mapStateToProps = (state) => ({
  weatherDataList: state.weatherDataListReducer.weatherDataList,
});

export default connect(mapStateToProps)(WatherDataList);
