import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import ImageList from './containers/ImageList';
import ImageDetail from './containers/ImageDetail';

import HTTP from './utils/http';

import './App.css';

const ImageURLRegex = /(jpg|png)/g;

class App extends React.Component {
  state = {
    data: null,
    currentlySelectedImage: {}
  };

  componentDidMount() {
    HTTP.get('https://www.reddit.com/r/pics/.json?jsonp=').then(res => this.processImages(res.data));
  }

  processImages = (data) => {
    const processedImages = data.children.filter(item => ImageURLRegex.test(item.data.thumbnail));
    const imageList = processedImages.map(image => image.data);
    this.setState({ data: imageList });
  }

  setCurrentlySelectedImage = (image) => {
    this.setState({
      currentlySelectedImage: image
    });
  }

  render() {
    const { data, currentlySelectedImage } = this.state;
    return (
      <div className="App">
        <Router>
          <>
            <Switch>
              <Route exact path="/">
                {data ? <ImageList data={data} setCurrentlySelectedImage={this.setCurrentlySelectedImage} /> : <div>Loading...</div>}
              </Route>
              <Route>
                <ImageDetail currentlySelectedImage={currentlySelectedImage} />
              </Route>
            </Switch>
          </>
        </Router>
      </div>
    );
  }
}

export default App;
