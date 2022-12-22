import React, { Component } from 'react';
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import PropTypes from 'prop-types';


const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {


render() {
        const {largeImageURL} = this.props;
    return createPortal (
 <div className={styles.overlay}>
  <div className={styles.modal}>
    <img src={largeImageURL} alt={largeImageURL} />
  </div>
</div> , modalRoot      
    );
}
}

// Modal.propTypes = {
//   modalClose: PropTypes.func.isRequired,
//   largeImageURL: PropTypes.string.isRequired,
// };