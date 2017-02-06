import React from 'react';

const TacoCrumbs = ({ viewName }) => (
  <div className="header">
    <div className="back-button">back</div>
    <div className="header-text">{ viewName }</div>
    <div className="cart-button">cart</div>

</div>
)

export default TacoCrumbs;
