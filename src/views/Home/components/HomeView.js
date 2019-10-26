import React, {memo} from 'react';
import classNames from 'classnames';
import {makeStyles} from '@material-ui/core/styles';
import Header from 'components/Header/Header.js';
import Footer from 'components/Footer/Footer.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';

import Parallax from 'components/Parallax/Parallax.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';

import styles from 'assets/jss/material-kit-react/views/components.js';
import IntroSection from './IntroSection';

const useStyles = makeStyles(styles);
const imageHome = require('assets/img/home.jpg');

// eslint-disable-next-line react/display-name
const HomeView = memo(props => {
  const classes = useStyles();
  const {...rest} = props;
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
                  Tu carnicería de confianza
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <IntroSection/>
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

export default HomeView;
