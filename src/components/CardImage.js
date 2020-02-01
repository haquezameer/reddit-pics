import React from 'react';

import Card from './Card';

const CardImage = ({imageSrc, title}) => (
    <Card style={{width: '300px', height: 300, margin: '20px 0'}}>
        <div style={{width: '100%', height: '60%', backgroundColor: 'black'}} />
        <div style={{width: '100%', height: '40%'}}>{title}</div>
    </Card>
);

export default CardImage;