import React, { Component } from 'react';
import { Link } from 'react-router';
import AppPage from '../4-Templates/AppPage';

class History extends Component {
  render() {
    return AppPage('History', (<div>hey your recent orders</div>));
  }
};

export default History;
