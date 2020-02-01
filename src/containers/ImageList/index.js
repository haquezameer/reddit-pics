import React from 'react';
import { Link } from 'react-router-dom';

import ImageCard from '../../components/ImageCard';

class ImageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allImages: [],
            filterTitle: '',
            filteredImages: []
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.data) {
            return {
                allImages: props.data
            }
        }
        return null;
    }

    handleFilterChange = (e) => {
        this.setState({
            filterTitle: e.target.value
        }, () => {
            this.filterByTitle();
        });
    }

    filterByTitle = () => {
        const { filterTitle } = this.state;
        const { allImages } = this.state;
        const filteredImages = allImages.filter(item => item.title.toLowerCase().includes(filterTitle.toLowerCase()));
        this.setState({ filteredImages });
    }

    renderImageList() {
        const { allImages, filteredImages, filterTitle } = this.state;
        const { setCurrentlySelectedImage } = this.props;
        const dataList = filterTitle ? filteredImages : allImages;
        const isDataListEmpty = dataList.length === 0;

        if (isDataListEmpty) {
            return <div>Sorry! Nothing to show</div>
        }

        return (
            <div style={{
                display: 'flex',
                height: '100%',
                width: '100%',
                flexWrap: 'wrap',
                justifyContent: 'space-around'
            }}>
                {dataList.map(item =>
                    <Link to="/image/detail" onClick={() => setCurrentlySelectedImage(item)}>
                        <ImageCard imageSrc={item.thumbnail} title={item.title} />
                    </Link>
                )}
            </div>
        );
    }

    render() {
        const { filterTitle } = this.state;
        return (
            <>
                <div>
                    <input style={{
                        marginTop: 10
                    }} type="text" onChange={this.handleFilterChange} value={filterTitle} />
                </div>
                {this.renderImageList()}
            </>
        );
    }
}

export default ImageList;  