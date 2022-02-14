import React from 'react';
import './Item.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
/* import { CardActionArea } from '@mui/material'; */

export default function Item({ data }) {
	return (
		<Card sx={{ minHeight: 600, maxWidth: 345 }}>
			<CardMedia
				component='img'
				height='400'
				image={data.image}
				alt='product'
			/>
			<CardContent>
				<Typography gutterBottom variant='h6' component='div'>
					{data.title}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					Category: {data.category}
				</Typography>
			</CardContent>
		</Card>
	);
}