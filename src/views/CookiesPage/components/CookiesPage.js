import React, {memo, useEffect} from 'react';
import classNames from 'classnames';
import {makeStyles} from '@material-ui/core/styles';
import Header from 'components/Header/Header.js';
import Footer from 'components/Footer/Footer.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';

import styles from './styles';
import Parallax from 'components/Parallax/Parallax';
import imageContact from 'assets/img/contac.jpg';
import {initGA, PageView} from 'utils/analytics';
import GridItem from '../../../components/Grid/GridItem';
import GridContainer from '../../../components/Grid/GridContainer';

const useStyles = makeStyles(styles);

const CookiesPage = memo(props => {
  const classes = useStyles();
  const {...rest} = props;

  useEffect(() => {
    initGA();
    PageView();

    loadScript('https://consent.cookiebot.com/bb512369-b7b6-4b80-bc25-e3be2dba160e/cd.js')
  }, []);

  const loadScript = function (src) {
    let tag = document.createElement('script');
    tag.async = false;
    tag.src = src;
    document.getElementsByClassName('cookieContainer')[0].appendChild(tag);
  };

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

      <Parallax small filter image={imageContact}/>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.section}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem cs={12} sm={12} md={8}>
                <h2 className={classes.title}>Política de cookies</h2>
                <div className='cookieContainer'></div>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
});

CookiesPage.displayName = 'CookiesPage';

export default CookiesPage;
