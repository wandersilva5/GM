import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';

import  Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/logo-ws-system.png';

export default function Logon() {
    const [ id, setId ] = useState('');
    const [ password, setPassword ] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try {
            const response = await api.post('sessions', { id });
            
            alert(`Seja bem vinda ${response.data.name}`);

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            history.push('/profile');
        } catch (error) {
            alert("Falha no Login, tente novamente.");
            
        }
    }

    return (
        <div>
            <Container component="main" maxWidth="xs">
                <div className="mt-3 mt-md-5">
                    <div className="text-center">
                        <img src={logoImg} alt="Logo WS System"/>
                        <Typography 
                            className="mt-3 font-weight-normal" 
                            component="h1" 
                            variant="h6">
                            Sistema de Gerencimento de Estoque
                        </Typography>
                        <form onSubmit={handleLogin}>
                            <div className="mt-4">
                                <TextField 
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="Login"
                                    value={id}
                                    onChange={e => setId(e.target.value)}
                                />

                                <TextField 
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="Senha"
                                    type="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                                <Button 
                                    type="submit"
                                    variant="contained"
                                    fullWidth
                                    color="primary"
                                    size="large"
                                    className="mb-3 mb-md-4 mt-4"

                                >Entrar</Button>
                            </div>
                        </form>
                    </div>
                </div>
                <Link className="back-link" to="/register">
                    <FiLogIn size={16} color="#E02041"  />
                     Não tenho cadastro
                </Link>
            </Container>

            {/* <img src={heroesImg} alt="Heroes" /> */}
        </div>
    );
}