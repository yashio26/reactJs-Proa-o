import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

import './CardComponent.css';

const CardComponent = ({ name, description, img }) => (
	<div className='container'>
		<Card>
			<CardBody>
				<CardTitle tag='h5'>{name}</CardTitle>
				<img src={img} alt='user-img' width={200} />
				<CardText>{description}</CardText>
			</CardBody>
		</Card>
	</div>
);

export default CardComponent;