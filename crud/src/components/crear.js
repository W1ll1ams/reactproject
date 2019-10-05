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
        <form noValidate autoComplete = "off">
            <Paper id="cr" className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <Typography id="txt" gutterBottom variant="h4">
                        {props.cm[1]} de películas.
                        </Typography>
                    </Grid>
                    <Grid container spacing={2}>
                        <TextField
                            id="outlined-name"
                            label="Nombre"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            name="titulo"
                            onChange={props.change('titulo')}
                            defaultValue = {props.pelicula.titulo}
                        />
                    </Grid>
                    <Grid container spacing={2}>
                        <TextField
                            id="outlined-name"
                            label="Descripción"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            fullWidth
                            name="description"
                            onChange={props.change('description')}
                            defaultValue = {props.pelicula.description}
                        />
                    </Grid>
                    <Grid container spacing={2}>
                        <TextField
                            id="outlined-name"
                            label="Director"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            name="director"
                            onChange={props.change('director')}
                            defaultValue = {props.pelicula.director}
                        />
                    </Grid>
                    <Grid container spacing={2}>
                        <TextField
                            id="outlined-name"
                            label="Producción"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            name="produccion"
                            onChange={props.change('produccion')}
                            defaultValue = {props.pelicula.produccion}
                        />
                    </Grid>
                    <Grid container spacing={2}>
                        <TextField
                            id="outlined-name"
                            label="Duración"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            name="duracion"
                            onChange={props.change('duracion')}
                            defaultValue = {props.pelicula.duracion}
                        />
                    </Grid>
                    <Grid container spacing={2}>
                        <TextField
                            id="outlined-name"
                            label="URL Imagen"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            name="imagen"
                            onChange={props.change('imagen')}
                            defaultValue = {props.pelicula.imagen}
                        />
                    </Grid>
                    <Grid container spacing={2} className= {classes.nav}>
                        <Button variant="contained" color="primary" className={classes.button} onClick={props.accion}>
                            {props.cm[0]}
                        </Button>
                    </Grid>
                    <Grid container spacing={2} className= {classes.nav}>
                        <Button variant="contained" color="primary" className={classes.button} onClick={props.cancelar}>
                            Cancelar
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </form>
    </div>
  );
}