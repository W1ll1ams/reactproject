import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: '100%',
  },
  image: {
    width: 256,
    height: 256,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function ComplexGrid(props) {
  const classes = useStyles();

  return props.data.map(e =>
    <div className={classes.root}>
      <Paper id="hello" className={classes.paper}>
        <Grid id="txt" container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
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
            </Grid>
          </Grid>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={require(`../${e.imagen}`)} />
            </ButtonBase>
          </Grid>
        </Grid>
      </Paper>
      <br />
    </div>
  );
}