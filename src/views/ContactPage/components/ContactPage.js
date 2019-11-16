import React, {memo} from 'react';
import classNames from 'classnames';
import {makeStyles} from '@material-ui/core/styles';
import Header from 'components/Header/Header.js';
import Footer from 'components/Footer/Footer.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';

import styles from './styles';
import Parallax from 'components/Parallax/Parallax';
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';
import FormSection from './FormSection';
import ContactDataSection from './ContactDataSection';

const useStyles = makeStyles(styles);
const imageContact =  require('assets/img/contac.jpg');

const ContactPage = memo(props => {
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
              <GridItem xs={6} sm={12} md={6}>
                <ContactDataSection />
              </GridItem>
              <GridItem xs={6} sm={12} md={6}>
                <FormSection />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
});

ContactPage.displayName = 'ContactPage';

export default ContactPage;
