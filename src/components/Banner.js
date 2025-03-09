import React from 'react';
import './../styles/Banner.css';
import Logo from '../assets/logo.png';

// eslint-disable-next-line import/no-anonymous-default-export
export default function Banner () {
  const TTITLE = "La maison de la jungle"
  return (
    <div className='lmj-banner'>
        <img src={Logo} alt='La maison jungle' className='imj-logo'/>
        <h1>{TTITLE}</h1>
    </div>
  );
}
