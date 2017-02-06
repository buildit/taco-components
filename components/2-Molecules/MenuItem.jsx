import React, { Component } from 'react';
import PlaceholderImage from '../1-Atoms/PlaceholderImage';
import QuantityPicker from '../1-Atoms/QuantityPicker';

const MenuItem = ({ name, price, quantity = 0 }) => (
    <div className="menu-item">
      <img src="../assets/images/image-1.png" className="menu-image"/>
      <div className="info">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
      </div>
      <QuantityPicker quantity={6} />
    </div>
);

export default MenuItem;
