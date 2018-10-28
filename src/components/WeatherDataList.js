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
          <text>{weatherData.country}</text>
        </li>
      );
    });
    return weatherObj;
  }

  render() {
    if (this.props.weatherDataList === undefined ||
        this.props.weatherDataList.length === 0) {
      return (<text>No weather data</text>);
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
