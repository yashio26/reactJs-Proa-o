import React, {useContext} from 'react';
import CardWidget from '../CardWidget/CardWidget';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../../ProductsContext';

const NavBar = () => {

	const {carrito} = useContext(ProductsContext)

	return (
		<nav className='Navigation'>
			<ul>
				<Link to='/' className='Link'>
					Inicio
				</Link>
				<Link to='/categoria/personajes' className='Link'>
					Personajes
				</Link>
				<Link to='/categoria/skins' className='Link'>
					Skins
				</Link>
				{carrito.length !== 0 ? 
				<Link to='/cart' className='Link'>
					<CardWidget />
				</Link> : null}
			</ul>
		</nav>
	);
};

export default NavBar;
