import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import  {
    makeStyles, Button, TextField, Container,
    TableContainer, Paper, Table, TableHead, TableRow, TableBody, TableCell
} from '@material-ui/core';

import api from '../../services/api';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    // paper: {
    //   padding: theme.spacing(2),
    //   textAlign: 'left',
    //   color: theme.palette.text.secondary,
    // },
}));

export default function PedidoNew() {
    const [ numPedido, setNumPedido ] = useState('');
    const [ cliente, setCliente ] = useState('');
    const [ materiais, setMateriais ] = useState([]);
    const [ qtd, setQtd ] = useState([]);
    const [ valTotal, setValTotal ] = useState([]);

    const classes = useStyles();

    const userToken   = localStorage.getItem('userToken');

    useEffect(()=>{
        api.get('pedidos', {
            headers:{
                Authorization: userToken
            }
        }).then(response => {
            // setNumPedido(response.data);
        });
    },[userToken]);

    async function handlePedido(e){
        e.preventDefault();

    }

    return (
        <div className={classes.root}>
            <Container component="main">
                <h4>Novo Pedidos</h4>
                <form onSubmit={handlePedido} >
                    <div>
                        <TextField 
                            className="col-7"
                            style={{ 'marginRight':'8px'}}
                            width="100"
                            margin="normal"
                            required
                            label="Numero do Pedido"
                            value={numPedido}
                            onChange={e => setNumPedido(e.target.value)}
                        />

                        <TextField 
                            className="col-4"
                            margin="normal"
                            required
                            label="CLiente"
                            value={cliente}
                            onChange={e => setCliente(e.target.value)}
                        />
                    </div>
                    <div>
                        <TextField 
                            className="col-6"
                            style={{ 'marginRight':'8px'}}
                            margin="normal"
                            label="Material"
                            value={materiais}
                            onChange={e => setMateriais(e.target.value)}
                        />
                        <TextField 
                            className="col-2"
                            style={{ 'marginRight':'8px'}}
                            margin="normal"
                            label="Quantidade"
                            value={qtd}
                            onChange={e => setQtd(e.target.value)}
                        />
                        <TextField 
                            className="col-2"
                            style={{ 'marginRight':'8px'}}
                            disabled
                            margin="normal"
                            label="Valor"
                        />
                        <Button 
                            variant="contained"
                            color="default"
                            className="mb-3 mb-md-4 mt-4">
                            Inserir
                        </Button>
                    </div>
                    <TableContainer component={Paper}>
                        <Table>
                        <TableHead>
                                <TableRow>
                                    <TableCell>Listas dos Materiais</TableCell>
                                    <TableCell align="right">Quantidade</TableCell>
                                    <TableCell align="right">Valor</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {/* {pedidos.map((pedido) => ( */}
                                <TableRow key={ 'id' }>
                                    <TableCell component="th" scope="row"> Desodorante cc xpto </TableCell>
                                    <TableCell align="right">30</TableCell>
                                    <TableCell align="right">R$ 9,00</TableCell>
                                    {/* <TableCell align="right">Total</TableCell> */}
                                </TableRow>
                            {/* ))} */}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <div>
                        <Button 
                            type="submit"
                            variant="contained"
                            color="primary"
                            className="mb-3 mb-md-4 mt-4">
                            Salvar
                        </Button>
                        <Button 
                            variant="contained"
                            color="secondary"
                            className="mb-3 mb-md-4 mt-4">
                            Voltar
                        </Button>
                    </div>
                </form>
            </Container>
        </div>
    );  
}