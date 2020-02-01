import React from 'react';

class ImageDetail extends React.Component {
    render() {
        const {currentlySelectedImage} = this.props;
        return (
            <div style={{
                display: 'flex',
                width: '80%',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                margin: '10px auto'
            }}>
                <img src={currentlySelectedImage.url} style={{width: '700px', height: '500px', objectFit: 'contain'}} />
                <h2>{currentlySelectedImage.title}</h2>
                <h3>Author: {currentlySelectedImage.author}</h3>
            </div>
        );
    }
}

export default ImageDetail;