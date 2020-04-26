import React from 'react';
import { connect } from 'react-redux';

function City(props) {
    return (
        <React.Fragment>
            <h3>{props.weather ? props.weather.name : 'No City'}</h3>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => ({
    weather: state.weather.list,
});

export default connect(mapStateToProps)(City);