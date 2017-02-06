import React, { Component } from 'react';
import PlaceholderImage from '../1-Atoms/PlaceholderImage';
import QuantityPicker from '../1-Atoms/QuantityPicker';

const MenuItem = ({ name, price, quantity = 0, styles = {} }) => (
    <div className={styles['menu-item'] || 'menu-item'}>
      <PlaceholderImage width={160} height={160} />
      <div className={styles['info'] || 'info'}>
          <span className={styles['name'] || 'name'}>{name}</span>
          <span className={styles['price'] || 'price'}>{price}</span>
      </div>
      <QuantityPicker quantity={6} />
    </div>
);

export default MenuItem;
