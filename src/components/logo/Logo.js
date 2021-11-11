import React from 'react';

import './logo.css'
import LogoImage from '../../resources/img/default_logo.jpeg';

export default function Logo() {
  return (
    <div className="logo">
      <img src={LogoImage} alt="logo" width="150px" />
    </div>
  )
}