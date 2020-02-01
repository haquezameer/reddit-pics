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
                <img src={currentlySelectedImage.url} style={{width: '700px', maxWidth: '90%', height: '500px', objectFit: 'contain'}} />
                <h2>{currentlySelectedImage.title}</h2>
                <h3>Author: {currentlySelectedImage.author}</h3>
                <h3>Score: {currentlySelectedImage.score}</h3>
                <a target="_blank" href={`https://www.reddit.com${currentlySelectedImage.permalink}`}>View on Reddit</a>
            </div>
        );
    }
}

export default ImageDetail;