import CardWidget from '../CardWidget/CardWidget';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav className='Navigation'>
			<ul>
				<Link to='/' className='Link'>
					Home
				</Link>
				<Link to='/category' className='Link'>
					Electronics
				</Link>
                <li><CardWidget /></li>
			</ul>
		</nav>
	);
};

export default NavBar;
