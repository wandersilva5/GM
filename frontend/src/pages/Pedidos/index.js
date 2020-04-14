import React from 'react';
import { 
    makeStyles, Typography, Paper, Grid,
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow
} from '@material-ui/core';

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

function createData(numPedido, nomeCliente, cidade, bairro, valorTotal, statusPedido, dataPedido) {
    return { numPedido, nomeCliente, cidade, bairro, valorTotal, statusPedido, dataPedido };
}

const rows = [
    createData('202004140001', 'Quantinhas da Fran', 'Nova Iguaçu', 'Centro', '200,00', 'Ativo','14/04/2020'),
    createData('202004140002', 'Farmarcia do Cosme', 'Nova Iguaçu', 'Ponto Chic', '350,00', 'Ativo','14/04/2020'),
    createData('202004140003', 'Farmarcia da Pose', 'Nova Iguaçu', 'Posse', '2.080,00', 'Ativo','14/04/2020'),
    createData('202004140004', 'Drogas +', 'Nova Iguaçu', 'Miguel Couto', '130,00', 'Ativo','14/04/2020'),
    createData('202004140005', 'Farmarcia Drogaria', 'Nova Iguaçu', 'Miguel Couto', '1200,00', 'Ativo','14/04/2020'),
];

export default function Profile() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography variant="body1" gutterBottom>
                            <h4>Listagem de Pedidos</h4>
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Número Pedido</TableCell>
                                    <TableCell align="right">Cliente</TableCell>
                                    <TableCell align="right">Cidade</TableCell>
                                    <TableCell align="right">Bairro</TableCell>
                                    <TableCell align="right">Valor Total</TableCell>
                                    <TableCell align="right">Status</TableCell>
                                    <TableCell align="right">Data Pedido</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">{row.numPedido}</TableCell>
                                    <TableCell align="right">{row.nomeCliente}</TableCell>
                                    <TableCell align="right">{row.cidade}</TableCell>
                                    <TableCell align="right">{row.bairro}</TableCell>
                                    <TableCell align="right">{row.valorTotal}</TableCell>
                                    <TableCell align="right">{row.statusPedido}</TableCell>
                                    <TableCell align="right">{row.dataPedido}</TableCell>
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