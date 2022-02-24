import React from 'react';
import './Item.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
/* import { CardActionArea } from '@mui/material'; */

export default function Item({ detail }) {
	return (
		<Card sx={{ minHeight: 600, maxWidth: 345 }}>
			<CardMedia
				component='img'
				height='400'
				image={detail.img}
				alt='product'
			/>
			<CardContent>
				<Typography gutterBottom variant='h6' component='div'>
					{detail.producto}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					Categoria: {detail.categoria}
				</Typography>
			</CardContent>
		</Card>
	);
}