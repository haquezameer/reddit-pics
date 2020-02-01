import React from 'react';

import ImageList from './containers/ImageList';

import './App.css';

const ImageURLRegex = /(jpg|png)/g;

class App extends React.Component {
  state = {
    data: null,
  };

  componentDidMount() {
    fetch('https://www.reddit.com/r/pics/.json?jsonp=').then(res => res.json()).then(res => this.processImages(res.data));
  }

  processImages = (data) => {
    const processedImages = data.children.filter(item => ImageURLRegex.test(item.data.thumbnail));
    const imageList = processedImages.map(image => image.data);
    this.setState({data: imageList});
  }
  
  render() {
    const {data} = this.state;
    return (
      <div className="App">
        {data ? <ImageList data={data} /> : <div>Loading...</div>}
      </div>
    );
  }
}

export default App;
