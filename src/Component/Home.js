import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Button } from './components';
import { Link } from 'react-router-dom';
import { citiesAction, citiesnullAction } from '../Action/weatherAction';

function Home(props) {
  const [form, setForm] = useState({ city: '', error: null });

  const handleChange = event => {
    event.persist();
    setForm(form => ({ ...form, [event.target.name]: event.target.value }));
  }

  useEffect(() => {
    props.citiesnullAction();
  }, []);

  const data = {
    "States": {
      "IL": {
        "currentdate": "04/05/2019",
        "time": "02:59 PM",
        "cities": [{
          "name": "Chicago",
          "forecast": [{
            "Date": "04/05/2019",
            "Time": "2.59pm",
            "temprature": 47,
            "feels": 40
          },
          {
            "Date": "04/06/2019",
            "Time": "2.59pm",
            "temprature": 57,
            "feels": 55
          },
          {
            "Date": "04/07/2019",
            "Time": "2.59pm",
            "temprature": 45,
            "feels": 44
          },
          {
            "Date": "04/08/2019",
            "Time": "2.59pm",
            "temprature": 61,
            "feels": 50
          },
          {
            "Date": "04/09/2019",
            "Time": "2.59pm",
            "temprature": 68,
            "feels": 65
          }
          ]
        },
        {
          "name": "Naperville",
          "forecast": [{
            "Date": "04/05/2019",
            "Time": "2.59pm",
            "temprature": 47,
            "feels": 40
          },
          {
            "Date": "04/06/2019",
            "Time": "2.59pm",
            "temprature": 59,
            "feels": 54
          },
          {
            "Date": "04/07/2019",
            "Time": "2.59pm",
            "temprature": 47,
            "feels": 46
          },
          {
            "Date": "04/08/2019",
            "Time": "2.59pm",
            "temprature": 63,
            "feels": 62
          },
          {
            "Date": "04/09/2019",
            "Time": "2.59pm",
            "temprature": 70,
            "feels": 68
          }
          ]
        }
        ]
      },
      "NY": {
        "currentdate": "04/05/2019",
        "time": "02:59 PM",
        "cities": [{
          "name": "New York",
          "forecast": [{
            "Date": "04/05/2019",
            "Time": "2.59pm",
            "temprature": 57,
            "feels": 50
          },
          {
            "Date": "04/06/2019",
            "Time": "2.59pm",
            "temprature": 67,
            "feels": 65
          },
          {
            "Date": "04/07/2019",
            "Time": "2.59pm",
            "temprature": 55,
            "feels": 54
          },
          {
            "Date": "04/08/2019",
            "Time": "2.59pm",
            "temprature": 71,
            "feels": 60
          },
          {
            "Date": "04/09/2019",
            "Time": "2.59pm",
            "temprature": 78,
            "feels": 75
          }
          ]
        },
        {
          "name": "Buffalo",
          "forecast": [{
            "Date": "04/05/2019",
            "Time": "2.59pm",
            "temprature": 58,
            "feels": 40
          },
          {
            "Date": "04/06/2019",
            "Time": "2.59pm",
            "temprature": 68,
            "feels": 64
          },
          {
            "Date": "04/07/2019",
            "Time": "2.59pm",
            "temprature": 57,
            "feels": 46
          },
          {
            "Date": "04/08/2019",
            "Time": "2.59pm",
            "temprature": 63,
            "feels": 62
          },
          {
            "Date": "04/09/2019",
            "Time": "2.59pm",
            "temprature": 40,
            "feels": 48
          }
          ]
        }
        ]
      },
      "CA": {
        "currentdate": "04/05/2019",
        "time": "02:59 PM",
        "cities": [{
          "name": "Los Angeles",
          "forecast": [{
            "Date": "04/05/2019",
            "Time": "2.59pm",
            "temprature": 67,
            "feels": 50
          },
          {
            "Date": "04/06/2019",
            "Time": "2.59pm",
            "temprature": 77,
            "feels": 65
          },
          {
            "Date": "04/07/2019",
            "Time": "2.59pm",
            "temprature": 65,
            "feels": 54
          },
          {
            "Date": "04/08/2019",
            "Time": "2.59pm",
            "temprature": 71,
            "feels": 60
          },
          {
            "Date": "04/09/2019",
            "Time": "2.59pm",
            "temprature": 78,
            "feels": 75
          }
          ]
        },
        {
          "name": "San francisco",
          "forecast": [{
            "Date": "04/05/2019",
            "Time": "2.59pm",
            "temprature": 68,
            "feels": 50
          },
          {
            "Date": "04/06/2019",
            "Time": "2.59pm",
            "temprature": 78,
            "feels": 64
          },
          {
            "Date": "04/07/2019",
            "Time": "2.59pm",
            "temprature": 67,
            "feels": 66
          },
          {
            "Date": "04/08/2019",
            "Time": "2.59pm",
            "temprature": 73,
            "feels": 72
          },
          {
            "Date": "04/09/2019",
            "Time": "2.59pm",
            "temprature": 70,
            "feels": 68
          }
          ]
        }
        ]
      }
    }
  };

  const handleSubmit = () => {
    const map = new Map();
    let city = form.city.toLowerCase();
    for (let i = 0; i < Object.values(data.States).length; i++) {
      Object.values(data.States)[i].cities.map(v => {
        map.set(v.name.toLowerCase(), v);
      });
    }

    if (map.get(city)) {
      props.citiesAction(map.get(city));
      setForm(form => ({ ...form, error: false }));
    } else {
      setForm(form => ({ ...form, error: true }));
      props.citiesnullAction();
    }
  }

  return (
    <React.Fragment>
      <label>Enter City </label>
      <input type='text' name='city' value={form.city} onChange={handleChange} />
      {props.weather.item ? <Link to='/weather'><Button name='5 Day Weather' /></Link> : <Button click={handleSubmit} name='Submit' />}<br></br>
      <span style={{ color: 'red' }}>{form.error ? 'No City Found' : null}</span>
    </React.Fragment>
  )
}

const mapSatetToProps = state => ({
  weather: state.weather,
});

const mapDispatchToProps = dispatch => ({
  citiesAction: list => dispatch(citiesAction(list)),
  citiesnullAction: list => dispatch(citiesnullAction(list)),
});

export default connect(mapSatetToProps, mapDispatchToProps)(Home);