import React, {memo} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Gallery from 'react-grid-gallery';
import styles from './styles';
import {IMAGES} from './images';
import VideoYoutube from 'components/VideoYoutube';

const useStyles = makeStyles(styles);

const GalleryAboutSection = memo(() => {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}> Écha un vistazo a nuestro establecimiento.</h2>
          <h5 className={classes.description}>
            Disponemos de una seleccion de vinos, quesos, jamones. También podrán encontrar pan diario,
            las típicas tortas de Alcázar, legumbres de primera calidad y una gama de productos complementarios.
          </h5>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <Gallery images={IMAGES} enableImageSelection={false}/>
        </GridItem>
        <GridItem xs={12} sm={12} md={8} className={classes.video}>
          <VideoYoutube youtubeId='scULzbb3vZI'/>
        </GridItem>
      </GridContainer>

    </div>
  );
});

GalleryAboutSection.displayName = 'GalleryAboutSection';

export default GalleryAboutSection;
