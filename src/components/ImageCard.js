import React from 'react';

import Card from './Card';

const ImageCard = ({imageSrc, title}) => (
    <Card style={{width: '300px', height: 300, margin: '20px 0'}}>
        <img src={imageSrc} style={{width: '100%', height: '60%', backgroundColor: 'black', objectFit: 'contain' }} />
        <div style={{width: '100%', height: '40%'}}>{title}</div>
    </Card>
);

export default ImageCard;