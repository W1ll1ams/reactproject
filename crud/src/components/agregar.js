import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  nav:{
    justifyContent: "flex-end",
  },
}));

export default function FloatingActionButtons(props) {
  const classes = useStyles();

  return (
    <Grid container className= {classes.nav}>
      <Fab onClick={props.accion} color="primary" aria-label="add" className={classes.fab}>
        <AddIcon />
      </Fab>
    </Grid>
  );
}