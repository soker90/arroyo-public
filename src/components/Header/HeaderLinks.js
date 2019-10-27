import React, {memo} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';
import {CloudDownload} from '@material-ui/icons';
import Button from 'components/CustomButtons/Button.js';

import styles from 'assets/jss/material-kit-react/components/headerLinksStyle.js';

const useStyles = makeStyles(styles);

// eslint-disable-next-line react/display-name
const HeaderLinks = memo(() => {
    const classes = useStyles();

    const _renderListItem = (name, link) =>
      <ListItem className={classes.listItem}>
        <Button
          href={link}
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <CloudDownload className={classes.icons}/> {name}
        </Button>
      </ListItem>;

    return (
      <List className={classes.list}>
        {_renderListItem('Inicio', '/')}
        {_renderListItem('Descúbrenos', '/descubrenos')}
        {_renderListItem('Contacto', '/contacto')}
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-twitter"
            title="Síguenos en twitter"
            placement={window.innerWidth > 959 ? 'top' : 'left'}
            classes={{tooltip: classes.tooltip}}
          >
            <Button
              href="https://twitter.com/CarnicasArroyo"
              target="_blank"
              color="transparent"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + ' fab fa-twitter'}/>
            </Button>
          </Tooltip>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-facebook"
            title="Síguenos en facebook"
            placement={window.innerWidth > 959 ? 'top' : 'left'}
            classes={{tooltip: classes.tooltip}}
          >
            <Button
              color="transparent"
              href="https://www.facebook.com/CarnicasArroyoCB/"
              target="_blank"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + ' fab fa-facebook'}/>
            </Button>
          </Tooltip>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-tooltip"
            title="Síguenos en instagram"
            placement={window.innerWidth > 959 ? 'top' : 'left'}
            classes={{tooltip: classes.tooltip}}
          >
            <Button
              color="transparent"
              href="https://www.instagram.com/carnicasarroyo/"
              target="_blank"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + ' fab fa-instagram'}/>
            </Button>
          </Tooltip>
        </ListItem>
      </List>
    )
  })
;

export default HeaderLinks;
