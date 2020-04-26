import React from 'react';
import { connect } from 'react-redux';

function DateDisplay(props) {
    return (
        <React.Fragment>
            <tr>
                <td>Date</td>
                {props.weather ? props.weather.forecast.map((v, i) => {
                    return (<td key={i}>{v.Date}</td>)
                }) : null}
            </tr>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => ({
    weather: state.weather.list
});

export default connect(mapStateToProps)(DateDisplay);