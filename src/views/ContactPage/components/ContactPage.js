import React, {memo, useEffect} from 'react';
import classNames from 'classnames';
import {makeStyles} from '@material-ui/core/styles';
import Header from 'components/Header/Header.js';
import Footer from 'components/Footer/Footer.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';

import styles from './styles';
import Parallax from 'components/Parallax/Parallax';
// import FormSection from './FormSection';
import ContactDataSection from './ContactDataSection';
import imageContact from 'assets/img/contac.jpg';
import {initGA, PageView} from 'utils/analytics';
import GridItem from '../../../components/Grid/GridItem';
import GridContainer from '../../../components/Grid/GridContainer';

const useStyles = makeStyles(styles);

const ContactPage = memo(props => {
  const classes = useStyles();
  const {...rest} = props;

  useEffect(() => {
    initGA();
    PageView();
  }, [])

  const generateFoxyForm = (d, t) => {
    let g = d.createElement(t),
      s = d.getElementsByTagName(t)[0];
    g.src = 'http://es.foxyform.com/js.php?id=339340&sec_hash=06278a8fc19&width=100%"';
    s.parentNode.insertBefore(g, s);
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
            <ContactDataSection/>
            <GridContainer justify="center">
              <GridItem cs={12} sm={12} md={8}>
                <h2 className={classes.title}>Contáctanos</h2>
                <form id="form">
                  <a id="foxyform_embed_link_339340" href="http://es.foxyform.com/"/>
                  {generateFoxyForm(document, 'script')}
                </form>
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
