import React, {memo} from 'react';
import {makeStyles} from '@material-ui/core/styles';

import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import styles from './styles';


const useStyles = makeStyles(styles);

const FormSection = memo(() => {
  const classes = useStyles();
  const generateFoxyForm = (d, t) => {
    let g = d.createElement(t),
        s = d.getElementsByTagName(t)[0];
    g.src = 'http://es.foxyform.com/js.php?id=339340&sec_hash=06278a8fc19&width=100%"';
    s.parentNode.insertBefore(g, s);
  };

  return (
    <GridContainer justify="center">
      <GridItem cs={12} sm={12} md={8}>
        <h2 className={classes.title}>Contáctanos</h2>
        <form id="form">
          <a id="foxyform_embed_link_339340" href="http://es.foxyform.com/"/>
          {generateFoxyForm(document, 'script')}
        </form>
      </GridItem>
    </GridContainer>
  );
});

FormSection.displayName = 'FormSection';

export default FormSection;
