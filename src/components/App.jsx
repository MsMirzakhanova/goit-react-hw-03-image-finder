import React, { Component } from 'react';
import { Loader } from "./Loader/Loader";
import styles from "./app.module.css";
import { fetchImages } from './fetchimages';
import { Searchbar } from './Searchbar/Searchbar';
import {Modal} from './Modal/Modal';
import {ImageGallery} from './ImageGallery/ImageGallery';



export class App extends Component {
  state = {
    searchImages: [],
    imgName: '',
    page: 1,
    error: null,
    largeImageURL: '',
    showModal: false

  };

  componentDidUpdate(_, prevState) {
        const { page, imgName } = this.state;
        if (prevState.page !== page || prevState.imgName !== imgName) {
            this.setState({ loading: true });
            fetchImages(imgName, page)
            .then(data =>
                this.setState(({searchImages}) => {
                    return {
                        searchImages: [...searchImages, ...data.hits]
                    }
                }))
            .catch(error => {
                this.setState({ error })
            })
            .finally(() => this.setState({ loading: false }))
        }
    }


  handleFormSubmit = imgName => {
         if (this.state.imgName !== imgName) {
            this.setState({ imgName, page: 1, searchImages: [] });
        }
  };
  
  toggleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal
    }))
  }
    onImgClick = img => {
        this.setState({ largeImageURL: img });
        this.toggleModal();
    };
  render() {
    const { searchImages, error, loading, largeImageURL, showModal} = this.state;
    const isSearchImages = Boolean(searchImages.length);
    return (
    <div className={styles.app}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {loading && <Loader />}
        {error && <p>Restart page or modify the request</p>}
        {isSearchImages && <ImageGallery searchImages={searchImages} onImgClick={this.onImgClick} />}
        {showModal && <Modal largeImageURL={largeImageURL} />}
    </div>
 ) 
}
};