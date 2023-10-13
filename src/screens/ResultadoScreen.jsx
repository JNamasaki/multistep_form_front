import React from 'react'
import { Button, Card } from 'react-bootstrap'

import { useResultadoContext } from '../ResultadoProvider';

import { perfis } from '../Perfis';

import MultiPerfilComponent from '../components/MultiPerfilComponent'

const ResultadoScreen = () => {
    const { resultado } = useResultadoContext();

    const encontrarPerfilPorCategoria = (categoria) => {
        return perfis.find(perfil => perfil.categoria === categoria);
    };

    const perfilSelecionado = encontrarPerfilPorCategoria(resultado[0].categoria);

   

    return (
        <div>
            <Card className='bg-dark text-white'>
                <Card.Header>
                  <h2>Seu perfil principal é: </h2> <h1>{perfilSelecionado.perfil}</h1>
                </Card.Header>
                <Card.Body>
                    <MultiPerfilComponent resultado={resultado}/>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ResultadoScreen