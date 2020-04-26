import React from 'react';
import { connect } from 'react-redux';

function Temperature(props) {
  return (
    <React.Fragment>
      <tr>
        <td>Temperature</td>
        {props.weather ? props.weather.forecast.map((v, i) => {
          return (<td key={i}>{v.temprature}</td>)
        }) : null}
      </tr>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => ({
  weather: state.weather.list
});

export default connect(mapStateToProps)(Temperature);