import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css'


export const ImageGalleryItem = ({ webformatURL, tags, largeImageURL}) => {
    return (
        <li className={css.ImageGalleryItem} >
            <img src={webformatURL} alt={tags} id={largeImageURL} className={css.ImageGalleryItemImage} />
        </li>)
}

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    onToggle: PropTypes.func.isRequired
};