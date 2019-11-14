import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: '60%',
  },
  image: {
    width: 356,
    height: 400,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: 356,
    maxHeight: 400,
    minWidth: 356,
    minHeight: 400,
  },
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  nav:{
    justifyContent: "center",
  },
}));

export default function ComplexGrid(props) {
  const classes = useStyles();

  return props.data.map(e =>
    <div className={classes.root} key={e._id}>
      <Paper id="hello" className={classes.paper}>
      <Grid container className= {classes.nav}>
        <ButtonBase id="imagen" className={classes.image}>
          <img className={classes.img} alt="complex" src={e.imagen} />
        </ButtonBase>
      </Grid>
        <Grid id="txt" container spacing={2}>
              <Grid container item className= {classes.nav}>
                <Typography gutterBottom variant="h4">
                {e.titulo}
                </Typography>
                <Typography variant="body2" gutterBottom>
                {e.description}
                </Typography>
                <Typography variant="body2">
                <b>Director:</b> {e.director} <br />
                <b>Producción:</b> {e.produccion} <br />
                <b>Duración:</b> {e.duracion}
                </Typography>
              </Grid>
              <Grid container item spacing={2} className= {classes.nav}>
                  <Button variant="contained" color="primary" className={classes.button} onClick={props.regresar}>
                      Regresar
                  </Button>
              </Grid>
        </Grid>
      </Paper>
      <br />
    </div>
  );
}