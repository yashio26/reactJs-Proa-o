import React, { useState, useContext } from 'react';
import './Checkout.css';
//Context
import { ProductsContext } from '../../ProductsContext';
// Firebase
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
//React-Router-Dom
import { Link } from 'react-router-dom';

const informacionComprador = {
	name: '',
	phone: '',
	email: '',
	plataforma: '',
};

const Checkout = () => {
	const [informacion, setInformacion] = useState(informacionComprador);

    const { carrito, setCarrito, pagoFinal } = useContext(ProductsContext);
	
	const fecha = `${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}, ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;

	const [numeroOrden, setNumeroOrden] = useState('');

	const handleOnChange = (e) => {
		const { value, name } = e.target;
		setInformacion({ ...informacion, [name]: value });
	};
	const onSubmit = async (e) => {
		e.preventDefault();
		const docRef = await addDoc(collection(db, 'compra'), {
			comprador: informacion, productos: carrito, fecha: fecha, total: `$${pagoFinal}`,
		});
		carrito.forEach((carro) => {
			const nuevoStock = carro.stock - carro.cantidad;
			const stockRef = doc(db, 'tienda', carro.id);
			updateDoc(stockRef, {
				stock: nuevoStock
			})
		})
		setNumeroOrden(docRef.id);
		setInformacion(informacionComprador);
		setCarrito([]);
		localStorage.setItem('carrito', JSON.stringify([]));
	};

	return (
		<>
		<h1 className='Titulo'>Reserva</h1>
		<div className='DatosDeCompra'>
			{numeroOrden ? 
            <>
                <h2>¡Su reserva fue realizada con éxito!</h2>
                <p>Su número de orden es: {numeroOrden}. Todos los datos fueron enviados por correo.</p>
				<img src='https://firebasestorage.googleapis.com/v0/b/dbd-latino.appspot.com/o/dbd-game.gif?alt=media&token=af15ede5-92da-4dd6-815a-bba017f095b0' alt='Logo-Dead-By-Daylight'/>
				<Link className='Link' to={'/'}>
					<h2>Volver al inicio</h2>
				</Link>
            </> :
			<>
			<form onSubmit={onSubmit}>
				<div style={{display: 'flex'}}>
					<label>Nombre</label>
					<input
						required
						type='text'
						placeholder='Nombre'
						value={informacion.name}
						name='name'
						onChange={handleOnChange}
					/>
					<label>N° de celular</label>
					<input
						required
						type='number'
						placeholder='Telefono'
						value={informacion.phone}
						name='phone'
						onChange={handleOnChange}
					/>
				</div>
				<div style={{display: 'flex'}}>
					<label>Email</label>
					<input
						required
						type='email'
						placeholder='Email'
						value={informacion.email}
						name='email'
						onChange={handleOnChange}
					/>
					<label>Plataforma</label>
					<select required value={informacion.plataforma} name='plataforma' onChange={handleOnChange}>
						<option value='' disabled>Seleccione una plataforma...</option>
						<option value='Steam'>Steam</option>
						<option value='PlayStation'>PlayStation 4</option>
						<option value='Xbox'>Xbox One</option>
					</select>
				</div>
				<button>Enviar</button>
			</form>
			</>}
		</div>
		</>
	);
};

export default Checkout;