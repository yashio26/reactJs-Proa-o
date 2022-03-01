import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Item({ detail }) {
	return (
		<Card sx={{ minHeight: 400, maxWidth: 345, backgroundColor: 'rgba(41, 41, 41, 0.808)' }}>
			<CardMedia
				component='img'
				height='400'
				image={detail.img}
				alt='product'
			/>
			<CardContent sx={{color: 'skyblue'}}>
				<Typography gutterBottom variant='h6' component='div'>
					{detail.producto}
				</Typography>
				<Typography variant='body2' color='skyblue'>
					Categoria: {detail.categoria}
				</Typography>
			</CardContent>
		</Card>
	);
}