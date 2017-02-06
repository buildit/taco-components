import React from 'react';
import { browserHistory } from 'react-router';

const TacoCrumbs = ({ viewName }) => (
  <div className="taco-crumbs">
    <span className="back-icon" onClick={browserHistory.goBack}><img src="../assets/images/back-button.png" /></span>
    <span className="action">{ viewName }</span>
    <span className="cart-icon"><Link to="/cart"><img src="../assets/images/cart-icon.png" /></Link></span>
  </div>
)

export default TacoCrumbs;
