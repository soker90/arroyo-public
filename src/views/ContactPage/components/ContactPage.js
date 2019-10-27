import React, {memo} from 'react';
import classNames from 'classnames';
import {makeStyles} from '@material-ui/core/styles';
import Header from 'components/Header/Header.js';
import Footer from 'components/Footer/Footer.js';
import Parallax from 'components/Parallax/Parallax.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';

import styles from 'assets/jss/material-kit-react/views/components.js';
import IntroSection from './IntroSection';
import ArroyoMap from '../../../components/GoogleMaps/GoogleMaps';

const useStyles = makeStyles(styles);

// eslint-disable-next-line react/display-name
const ContactPage = memo(props => {
  const classes = useStyles();
  const {...rest} = props;
  return (
    <div>
      <Header
        brand="Cárnicas Arroyo"
        rightLinks={<HeaderLinks/>}
        fixed
        color="blue"
        {...rest}
      />
      <Parallax>
          <ArroyoMap/>
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

export default ContactPage;
