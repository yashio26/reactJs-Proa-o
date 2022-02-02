import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import "./Item.css";


const Item = ({ data }) => (
	<div className='container'>
		<Card>
			<CardBody>
				<CardTitle tag='h5'>{data.title}</CardTitle>
				<img src={data.image} alt='user-img' width={200} />
				<CardText>{data.category}</CardText>
			</CardBody>
		</Card>
	</div>
);

export default Item;