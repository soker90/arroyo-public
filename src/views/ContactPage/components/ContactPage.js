import React, {memo} from 'react';
import classNames from 'classnames';
import {makeStyles} from '@material-ui/core/styles';
import Header from 'components/Header/Header.js';
import Footer from 'components/Footer/Footer.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';

import styles from 'assets/jss/material-kit-react/views/components.js';
import IntroSection from './IntroSection';
import ArroyoMap from 'components/GoogleMaps/ArroyoMap';

const useStyles = makeStyles(styles);

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

      <ArroyoMap />
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

ContactPage.displayName = 'ContactPage';

export default ContactPage;
