
import PropTypes from 'prop-types';
import styles from "./ImageGallery.module.css";
import {ImageGalleryItem} from '../ImageGalleryItem/ImageGalleryItem';



export function ImageGallery({ searchImages, largeImageURL })  {
  return (
      <ul className={styles.gallery}>
          {searchImages.map(({ webformatURL, id, tags, largeImageURL }) => (
             <ImageGalleryItem
                  key={id}
                  webformatURL={webformatURL}
                  tags={tags}
                  largeImageURL={largeImageURL} 
              />
          ))}
      </ul>
    );
}
  
ImageGallery.propTypes = {
    searchImages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired
        })
    ),
    largeImageURL: PropTypes.func.isRequired,
};