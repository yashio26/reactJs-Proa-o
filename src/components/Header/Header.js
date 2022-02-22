import React from 'react';
import './Header.css';
import img from '../../images/logoTienda.png';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className='Header'>
			<h3>Fake Store</h3>
            <Link to='/'>
                <img src={img} alt='Logo Fake Store' />
            </Link>
		</div>
	);
};

export default Header;
