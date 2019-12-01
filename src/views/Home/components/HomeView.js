import React, {memo, useEffect} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Header from 'components/Header/Header.js';
import Footer from 'components/Footer/Footer.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';

import Parallax from 'components/Parallax/Parallax.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';

import styles from 'assets/jss/material-kit-react/views/components.js';
import IntroSection from './IntroSection';
import PreviewGallerySection from './PreviewGallerySection';
import MapSection from './MapSection';
import imageHome from 'assets/img/home.jpg'
import {initGA, PageView} from 'utils/analytics';

const useStyles = makeStyles(styles);

const HomeView = memo(props => {
  const classes = useStyles();
  const {...rest} = props;

  useEffect(() => {
    initGA();
    PageView();
  }, [])

  return (
    <div>
      <Header
        brand="Cárnicas Arroyo"
        rightLinks={<HeaderLinks/>}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: 'blue',
        }}
        {...rest}
      />
      <Parallax image={imageHome}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Cárnicas Arroyo</h1>
                <h3 className={classes.subtitle}>
                  Tu carnicería en Alcázar de San Juan
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <IntroSection/>
        <PreviewGallerySection history={props.history}/>
        <MapSection />
        { /*<SectionBasics/>
        <SectionNavbars/>
        <SectionTabs/>
        <SectionPills/>
        <SectionNotifications/>
        <SectionTypography/>
        <SectionJavascript/>
        <SectionCarousel/>
        <SectionCompletedExamples/>
        <SectionLogin/>
        <GridItem md={12} className={classes.textCenter}>
          <Link to={'/login-page'} className={classes.link}>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
          </Link>
        </GridItem>
        <SectionExamples/>
        <SectionDownload/> */}
      </div>
      <Footer/>
    </div>
  );
});

HomeView.propTypes = {
  history: PropTypes.func.isRequired,
};

HomeView.displayName = 'HomeView';

export default HomeView;
