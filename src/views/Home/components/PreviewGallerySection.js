import React, {memo} from 'react';
// @material-ui/core components
import {makeStyles} from '@material-ui/core/styles';

// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';

import styles from 'assets/jss/material-kit-react/views/landingPageSections/productStyle.js';
import {IMAGES} from './images';
import Gallery from 'react-grid-gallery';
import PropTypes from 'prop-types';
import {Event} from 'utils/analytics';

const useStyles = makeStyles(styles);

const PreviewGallerySection = memo(({history}) => {
  const classes = useStyles();

  const handleClick = () => {
    Event('CLICK', 'Pulsa en vista precvia de imagenes en Inicio', 'HOME_IMAGES');
    history.push('/descubrenos');
  };

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h3 className={classes.subtitle}> Galería de imagenes</h3>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <Gallery images={IMAGES} enableImageSelection={false}
                   onClickThumbnail={handleClick}/>
        </GridItem>
      </GridContainer>
    </div>
  );
});

PreviewGallerySection.propTypes = {
  history: PropTypes.func.isRequired,
};

PreviewGallerySection.displayName = 'PreviewGallerySection';

export default PreviewGallerySection;
