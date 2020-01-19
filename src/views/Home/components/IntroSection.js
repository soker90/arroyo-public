import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import ButcherIcon from 'components/Icons/ButcherIcon';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import SmartphoneIcon from '@material-ui/icons/Smartphone';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function IntroSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}> Carnicería tradicional y embutidos de elaboración propia. </h2>
          <h5 className={classes.description}>
            Disponemos de una seleccion de vinos, quesos, jamones. También podrán encontrar pan diario,
            las típicas tortas de Alcázar, legumbres de primera calidad y una gama de productos complementarios.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Embutidos de elaboración propia"
              description="Chorizos, salchichas, hamburguesas, chistorra, chorizos de pollo..."
              icon={ButcherIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Servicio a domicilio"
              description="Reparto gratuito a domicilio en Alcázar de San Juan y Alameda de Cervera."
              icon={LocalShippingIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Haz tu pedido por teléfono o Whatsapp"
              description={`Llámanos o escríbenos un Whatsapp al 926546979 para hacer tu pedido.`}
              icon={SmartphoneIcon}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
