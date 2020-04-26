import React from 'react';
import DateDisplay from './dateDisplay';
import City from './city';
import Temperature from './temperature';

export default function Weather() {
  return (
    <React.Fragment>
      <City />
      <table>
        <tbody>
          <DateDisplay />
          <Temperature />
        </tbody>
      </table>
    </React.Fragment>
  )
}
