import './App.css';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MyCv from './components/MyCv/MyCv';
import Porfolio from './components/Porfolio/Porfolio';
import SideSection from './components/SideSection/SideSection';
import Contact from './components/Contact/Contact';
import MyOffer from './components/MyOffer/MyOffer';
import Media from './components/Media/Media';
  
const useStyles = makeStyles({
  root: {
    backgroundColor: 'white',
    color: 'black'
  },
  noPadding: {
    paddingLeft: '0px !important',
    paddingRight: '0px !important',
    color: 'white'
  },
});

function App() {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.root}
      spacing={2}>
      <Grid item sm={3} xs={12}>
          <SideSection />
      </Grid>
      <Grid item sm={9} xs={12}>
        <Switch>
          <Route path="/cv" exact component={MyCv} />
          <Route path="/media" exact component={Media} />
          <Route path="/offer" exact component={MyOffer} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/" exact component={Porfolio} />
        </Switch>
      </Grid>
    </Grid>
  );
}

export default App;
