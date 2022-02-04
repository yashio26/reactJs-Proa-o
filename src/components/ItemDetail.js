import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

const ItemDetail = ({detail}) => {
  return(
    <Card>
        <CardBody>
            <CardTitle tag='h5'>{detail.title}</CardTitle>
            <img src={detail.image} alt='user-img' width={200} />
            <CardText>{detail.category}</CardText>
        </CardBody>
    </Card>
  );
};

export default ItemDetail;