import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
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
    textField: {
        marginLeft: theme.spacing(5),
        marginRight: theme.spacing(5),
    },
    button: {
        margin: theme.spacing(3),
    },
    nav:{
        justifyContent: "flex-end",
    },
  }));

export default function ComplexGrid(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper id="cr" className={classes.paper}>
        <Grid container spacing={2}>
            <Grid item>
                <Typography id="txt" gutterBottom variant="subtitle1">
                    <h1>Creación de películas.</h1>
                </Typography>
            </Grid>
            <Grid container spacing={2}>
                <TextField
                    id="outlined-name"
                    label="Nombre"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    name="nombre"
                />
            </Grid>
            <Grid container spacing={2}>
                <TextField
                    id="outlined-name"
                    label="Descripción"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    fullWidth="true"
                    name="desc"
                />
            </Grid>
            <Grid container spacing={2}>
                <TextField
                    id="outlined-name"
                    label="Director"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    name="dir"
                />
            </Grid>
            <Grid container spacing={2}>
                <TextField
                    id="outlined-name"
                    label="Producción"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    name="prod"
                />
            </Grid>
            <Grid container spacing={2}>
                <TextField
                    id="outlined-name"
                    label="Duración"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    name="dur"
                />
            </Grid>
            <Grid container spacing={2} className= {classes.nav}>
                <Button variant="contained" color="primary" className={classes.button} onClick={props.accion}>
                    Crear
                </Button>
            </Grid>
        </Grid>
      </Paper>
    </div>
  );
}