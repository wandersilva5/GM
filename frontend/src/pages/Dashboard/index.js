import React from 'react';
import { makeStyles, Typography, Paper, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
    },
  }));

export default function Profile() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography variant="body1" gutterBottom>
                            <h4>Dashboard</h4>
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <Typography variant="body1" gutterBottom>
                            Card 1
                        </Typography>
                    </Paper>
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