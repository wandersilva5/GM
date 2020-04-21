import React, { useEffect, useState } from 'react';

import api from '../../services/api';

const [materiais, setMateriais] = useState([]);

const userToken   = localStorage.getItem('userToken');

useEffect(()=>{
    api.get(`busca/${material}`, {
        headers:{
            Authorization: userToken
        }
    }).then(response => {
        setMateriais( response.data);
    });
}, [userToken]);

export const buscaMateriais = () => {
    if(materiais.length() < 0 ){
        return materiais
    }
};