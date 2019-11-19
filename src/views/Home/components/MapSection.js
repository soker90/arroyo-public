import React, {memo} from 'react';
// @material-ui/core components
import {makeStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';

// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';

import styles from 'assets/jss/material-kit-react/views/landingPageSections/productStyle.js';
import mailImage from 'assets/img/mail.png';
// import {isWidthUp} from '@material-ui/core/withWidth';

const useStyles = makeStyles(styles);

const MapSection = memo(() => {
  const classes = useStyles();

  /* const optionsGrid  =
    (isWidthUp('sm', props.width)) ?
      {xs: 12} : {xs: 6};
*/

  return (
    <div className={classes.section}>
      <h3 className={classes.subtitle}>Encuéntranos en</h3>
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={10} sm={12}>
              <iframe width="60%" height="auto" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
                      src="https://maps.google.es/maps?ie=UTF8&amp;q=C%C3%A1rnicas+Arroyo&amp;fb=1&amp;gl=es&amp;hq=carnicas+arroyo&amp;hnear=0xd69aee4af0d7f0f:0x2899244e40b7f09b,Alc%C3%A1zar,+Ciudad+Real&amp;cid=937855447493708146&amp;ll=39.389748,-3.203652&amp;spn=0.006295,0.006295&amp;t=m&amp;output=embed"/>
            </GridItem>
            <GridItem xs={2} sm={12}>
              <h4 className={classes.textCenter}>
                Cárnicas Arroyo C.B.<br/>
                C/Arroyo Mina, 35 Local<br/>
                Alcázar de San Juan<br/><br/>
                Teléfono: <a href='tel:926546979'>926 54 69 79</a><br/>
                Correo electrónico:
                <img src={mailImage}/>
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
});

MapSection.propTypes = {
  width: PropTypes.number.isRequired,
};

MapSection.displayName = 'MapSection';

export default MapSection;
