import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {format} from 'date-fns';

import api from '../../services/api';

import { 
    makeStyles, Paper, Grid,
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button
} from '@material-ui/core';

import ControlPoint from '@material-ui/icons/ControlPoint';


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

export default function Pedidos() {
    const classes = useStyles();
    const [ pedidos, setPedidos ] = useState([]);
    
    const userToken   = localStorage.getItem('userToken');

    useEffect(()=>{
        api.get('pedidos', {
            headers:{
                Authorization: userToken
            }
        }).then(response => {
            setPedidos(response.data);
        });
    },[userToken]);

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h4>Listagem de Pedidos</h4>
                </Grid>
                <Grid item xs={12}>
                    <Button 
                        startIcon={<ControlPoint />}
                        color="inherit"
                        component={Link} 
                        to="/pedidos/new"
                    >
                        Novo Pedido
                    </Button>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Número Pedido</TableCell>
                                    <TableCell align="right">Cliente</TableCell>
                                    <TableCell align="right">Cidade</TableCell>
                                    <TableCell align="right">Bairro</TableCell>
                                    <TableCell align="right">Status</TableCell>
                                    <TableCell align="right">Data Pedido</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {pedidos.map((pedido) => (
                                <TableRow key={ pedido.id }>
                                    <TableCell component="th" scope="row">{pedido.numPedido }</TableCell>
                                    <TableCell align="right">{ pedido.clientes.nomeFantasia }</TableCell>
                                    <TableCell align="right">{ pedido.clientes.cidade }</TableCell>
                                    <TableCell align="right">{ pedido.clientes.bairro }</TableCell>
                                    <TableCell align="right">{ pedido.status.status }</TableCell>
                                    <TableCell align="right">{ format(new Date(pedido.created_at), 'dd/mm/yyy hh:mm')}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </div>
    );   
}