import React, {memo, useEffect} from 'react';
import classNames from 'classnames';
import {makeStyles} from '@material-ui/core/styles';
import Header from 'components/Header/Header.js';
import Footer from 'components/Footer/Footer.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import Parallax from 'components/Parallax/Parallax.js';
import GalleryAboutSection from './GalleyAboutSection';
import imageAbout from 'assets/img/aboutUs.jpg';

import styles from 'assets/jss/material-kit-react/views/components.js';
import {initGA, PageView} from 'utils/analytics';

const useStyles = makeStyles(styles);

const AboutUsPage = memo((props) => {
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
          height: 200,
          color: 'blue',
        }}
        {...rest}
      />
      <Parallax small filter image={imageAbout}/>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <GalleryAboutSection/>
      </div>
      <Footer/>
    </div>
  );
});

AboutUsPage.displayName = 'AboutUsPage';

export default AboutUsPage;
