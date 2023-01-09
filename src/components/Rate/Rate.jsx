import { Rate } from 'antd';
import React, { Component } from 'react';
import 'antd/dist/antd.min.css';

export default class Rating extends Component {
  render() {
    const { rateFilm, id } = this.props;
    return (
      <Rate
        defaultValue={localStorage.getItem(id)}
        count={10}
        onChange={rateFilm}
        style={{ transform: 'scale(0.9)' }}
      />
    );
  }
}
