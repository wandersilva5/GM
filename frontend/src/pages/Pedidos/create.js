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
    
}));

export default function PedidoNew() {
    const [ numPedido, setNumPedido ] = useState('');
    const [ clientes, setClientes ] = useState([]);
    const [ cliente_id, setClienteId ] = useState('');
    const [ materiais, setMateriais ] = useState([]);
    const [ qtd, setQtd ] = useState([]);
    const [ valTotal, setValTotal ] = useState([]);

    const classes = useStyles();

    const userToken   = localStorage.getItem('userToken');

    useEffect(() => {
        api.get('clientes', {
            headers:{
                Authorization: userToken
            }
        }).then(response => {
            setClientes(response.data);
        });
        
        api.get('materiais', {
            headers:{
                Authorization: userToken
            }
        }).then(response => {
            setMateriais(response.data);
        });
    }, [userToken]);


    async function handlePedido(e){
        e.preventDefault();

        await api.post('pedidos', {
            numPedido,
            clientes,
            materiais,
            qtd,
            valTotal,
        }).catch(error =>{
            console.log(error)
        });
        

    }


    return (
        <div className={classes.root}>
            <Container component="main">
                <h4>Novo Pedidos</h4>
                <form onSubmit={handlePedido} >
                    <div>
                        <TextField 
                            className="col-4"
                            style={{ 'marginRight':'16px'}}
                            width="100"
                            margin="normal"
                            required
                            label="Numero do Pedido"
                            value={numPedido}
                            onChange={e => setNumPedido(e.target.value)}
                        />

                        <TextField 
                            className="col-7"
                            margin="normal"
                            select
                            label="Cliente"
                            SelectProps={{
                                native: true,
                            }}
                            value={cliente_id}
                            onChange={e => setClienteId(e.target.value)}
                        >
                            <option value=""></option>
                            {clientes.map((option) => (
                                <option key={option.id} value={option.id}>
                                {option.nomeFantasia}
                                </option>
                            ))}
                        </TextField>
                    </div>
                    <div>
                        <TextField 
                            className="col-6"
                            style={{ 'marginRight':'16px'}}
                            margin="normal"
                            label="Material"
                            value={materiais}
                            onChange={e => setMateriais(e.target.value)}
                        />
                        <TextField 
                            className="col-2"
                            style={{ 'marginRight':'16px'}}
                            margin="normal"
                            label="Quantidade"
                            value={qtd}
                            onChange={e => setQtd(e.target.value)}
                        />
                        <TextField 
                            className="col-2"
                            style={{ 'marginRight':'16px'}}
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
                        <TableHead style={{ "backgroundColor": "#CCC5" }} >
                                <TableRow>
                                    <TableCell>Listas dos Materiais</TableCell>
                                    <TableCell align="right">Quantidade</TableCell>
                                    <TableCell align="right">Valor</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow key={ 'id' }>
                                    <TableCell component="th" scope="row"> Desodorante cc xpto </TableCell>
                                    <TableCell align="right">30</TableCell>
                                    <TableCell align="right">R$ 9,00</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell rowSpan={3} />
                                    <TableCell align="right" colSpan={1}>Subtotal</TableCell>
                                    <TableCell align="right">R$ 9,00</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <div>
                        <Button 
                            style={{ 'marginRight':'8px'}}
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