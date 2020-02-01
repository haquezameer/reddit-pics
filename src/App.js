import React from 'react';

import CardImage from './components/CardImage';
import logo from './logo.svg';
import './App.css';

const ImageURLRegex = /(jpg|png)/g;

class App extends React.Component {
  state = {
    data: null
  };

  componentDidMount() {
    console.log('component did mount');
    fetch('https://www.reddit.com/r/pics/.json?jsonp=').then(res => res.json()).then(res => this.processImages(res.data));
  }

  processImages = (data) => {
    const processedImages = data.children.filter(item => ImageURLRegex.test(item.data.thumbnail));
    const imageList = processedImages.map(image => image.data);
    console.log('ImageList',imageList); 
    this.setState({data: imageList});
  }
  
  render() {
    const {data} = this.state;
    return (
      <div className="App">
        <div style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          flexWrap: 'wrap',
          justifyContent: 'space-around'
        }}>
          {data ? data.map(item => <CardImage title={item.title} />): 'Loading...'}
        </div>
      </div>
    );
  }
}

export default App;
