import React from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// nodejs library that concatenates classes
import classNames from 'classnames';
// material-ui core components
import {List, ListItem} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

import styles from 'assets/jss/material-kit-react/components/footerStyle.js';
import {isWidthUp} from '@material-ui/core/withWidth';

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const {whiteFont} = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });

  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/"
                className={classes.block}
              >
                Inicio
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/descubrenos"
                className={classes.block}
              >
                Descúbrenos
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/contacto"
                className={classes.block}
              >
                Contacto
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          <a href='/politica-de-cookies'>Política de cookies </a>{' '}
          &copy; {1900 + new Date().getYear()} Cárnicas Arroyo C.B.
        </div>
        {(isWidthUp('sm', props.width)) &&
        <div className={classes.block}>
          C/Arroyo Mina, 35 Local.
          Alcázar de San Juan<br/>
          Tel: <a href='tel:926546979'>926 54 69 79</a>
        </div>}
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
  width: PropTypes.number,
};
