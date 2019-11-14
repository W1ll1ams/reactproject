import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';


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
    height: 300,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: 256,
    maxHeight: 300,
    minWidth: 256,
    minHeight: 300,
  },
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function ComplexGrid(props) {
  const classes = useStyles();

  return props.data.map(e =>
    <div className={classes.root} key={e._id}>
      <Paper id="hello" className={classes.paper}>
        <Grid id="txt" container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
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
                <div>
                  <Fab onClick={() => props.mod(e._id)} id="edit" aria-label="edit" className={classes.fab}>
                    <EditIcon />
                  </Fab>
                  <Fab onClick={() => props.del(e._id)} id="del" aria-label="delete" className={classes.fab}>
                    <DeleteIcon />
                  </Fab>
                </div>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                <Fab onClick={() => props.ver(e._id)} variant="extended" aria-label="delete" className={classes.fab}>
                  <NavigationIcon className={classes.extendedIcon} />
                  Ver
                </Fab>
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <ButtonBase id="imagen" className={classes.image}>
              <img className={classes.img} alt="complex" src={e.imagen} />
            </ButtonBase>
          </Grid>
        </Grid>
      </Paper>
      <br />
    </div>
  );
}