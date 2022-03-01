import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className='Header'>
            <Link to='/' className='Link'>
				<h1>DBDNews</h1>
            </Link>
		</div>
	);
};

export default Header;
