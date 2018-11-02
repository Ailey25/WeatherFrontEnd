import React from 'react';
import ReactDOM from 'react-dom';
import WeatherData from './WeatherData';
import WeatherDataList from './WeatherDataList';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <WeatherData />
        <WeatherDataList />
      </section>
    );
  }
}



export default App;
