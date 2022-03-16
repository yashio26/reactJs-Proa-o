import React from 'react';
import './Error404.css';
//React-Router-Dom
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div className='Error404'>
        <h1>Esta página no existe</h1>
        <img src='https://firebasestorage.googleapis.com/v0/b/dbd-latino.appspot.com/o/dbd-game.gif?alt=media&token=af15ede5-92da-4dd6-815a-bba017f095b0' alt='Logo-Dead-By-Daylight'/>
        <Link to='/' className='Link'>
            <h1>Ir al inicio</h1>
        </Link>
    </div>
  )
}

export default Error404;