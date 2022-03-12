import React, { useState, useContext } from 'react';
import { ProductsContext } from '../../ProductsContext';

// Firebase
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';

/* import MessageSuccess from '../../components/MessageSuccess/MessageSuccess'; */

import TextField from '@mui/material/TextField';

const informacionComprador = {
	name: '',
	phone: '',
	email: '',
};

const Checkout = () => {
	const [informacion, setInformacion] = useState(informacionComprador);

    const { carrito, setCarrito, pagoFinal } = useContext(ProductsContext)
	
/* 	const date = new Date(); */
	const fecha = `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}, ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`

	// Este estado está destinado a guardar el id de la compra
	const [numeroOrden, setNumeroOrden] = useState('');

	const handleOnChange = (e) => {
		const { value, name } = e.target;
		setInformacion({ ...informacion, [name]: value });
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		console.log(informacion, "carrito: ", carrito);
		const docRef = await addDoc(collection(db, 'buyer'), {
			buyer: informacion, items: carrito, fecha: fecha, total: `$${pagoFinal}`,
		});
		console.log('Document written with ID: ', docRef.id);
		setNumeroOrden(docRef.id);
		setInformacion(informacionComprador);
		setCarrito([]);
	};

	return (
		<div>
			<h1>Ultimo paso:</h1>
			<form className='FormContainer' onSubmit={onSubmit}>
				<TextField
					placeholder='Nombre'
					style={{ margin: 10, width: 400 }}
					value={informacion.name}
					name='name'
					onChange={handleOnChange}
				/>
				<TextField
					placeholder='Telefono'
					style={{ margin: 10, width: 400 }}
					value={informacion.phone}
					name='phone'
					onChange={handleOnChange}
				/>
				<TextField
					placeholder='Email'
					style={{ margin: 10, width: 400 }}
					value={informacion.email}
					name='email'
					onChange={handleOnChange}
				/>
				<button>Enviar</button>
			</form>
			{numeroOrden && 
            <div>
                <h2>¡Su compra fue realizada con éxito!</h2>
                <p>Su número de orden es: {numeroOrden}. Todos los datos fueron enviados por correo.</p>
            </div>}
		</div>
	);
};

export default Checkout;