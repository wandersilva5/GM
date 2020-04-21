import React, { useState, useEffect } from 'react';
import { Link } from  'react-router-dom';
import { 
    makeStyles, Typography, Paper, Grid, 
    Card, CardActionArea, CardActions, CardContent, Button
} from '@material-ui/core';

import MoveToInbox from '@material-ui/icons/MoveToInbox';

import api from '../../services/api';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
    },
    iconBox: {
        marginLeft:-10,
        marginTop:-10,
        height: 80,
        width: 80,
    },
  }));

 

export default function Profile() {
    const classes = useStyles();
    const [ pedidos, setPedidos ] = useState('');

    const userToken   = localStorage.getItem('userToken');

    useEffect(() => {
        api.get('pedidos', {
            headers:{
                Authorization: userToken
            }
        }).then(response => {
            setPedidos(response.data.length);
        });
        
    }, [userToken]);

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h4>Dashboard</h4>
                </Grid>
                <Grid item xs={3}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {pedidos} Pedidos 
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" component={Link} to="pedidos">
                            Ver Mais...
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <Typography variant="body1" gutterBottom>
                            Card 2
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <Typography variant="body1" gutterBottom>
                            Card 3
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <Typography variant="body1" gutterBottom>
                            Card 4
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={8}>
                    <Paper className={classes.paper}>
                        <Typography variant="body1" gutterBottom>
                            Card 5
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <Typography variant="body1" gutterBottom>
                            Card 6
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );   
}