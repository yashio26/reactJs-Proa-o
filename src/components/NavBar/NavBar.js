import React, {useContext} from 'react';
import './NavBar.css';
import CardWidget from '../CardWidget/CardWidget';
//React-Router-Dom
import { Link } from 'react-router-dom';
//Context
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
				<Link to='/categoria/celulas' className='Link'>
					Celulas
				</Link>
				<Link to={'/sobre-nosotros'} className='Link'>
					Sobre nosotros
				</Link>
				{carrito.length !== 0 ? 
				<Link to='/carrito' className='Link'>
					<CardWidget />
				</Link> : null}
			</ul>
		</nav>
	);
};

export default NavBar;
