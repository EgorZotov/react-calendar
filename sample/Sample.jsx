import React, { Component } from 'react';
import { render } from 'react-dom';
import Calendar, {MonthView} from 'react-calendar';
import './Sample.less';

export default class Sample extends Component {
  state = {
    value: new Date(),
  };

  renderDay = ({ date }) => {
    const weekday = date.toLocaleDateString("ru-RU", {weekday: "short"}).toUpperCase();
    const day = date.toLocaleDateString("ru-RU", {day: "numeric"}).toUpperCase();
    return (
      <div style={{display: "flex", flexDirection: "column", color: "black", marginBottom: 10}}>
        {weekday}
      </div>
    );
  };

  onChange = value => this.setState({ value })

  render() {
    const { value } = this.state;

    return (
      <div className="Sample">
        <header>
          <h1>react-calendar sample page</h1>
        </header>
        <div className="Sample__container">
          <main className="Sample__container__content">
            <Calendar
              onChange={this.onChange}
              // showWeekNumbers
              value={value}
              tileContent = {this.renderDay}
            />
          </main>
        </div>
      </div>
    );
  }
}

render(<Sample />, document.getElementById('react-container'));
