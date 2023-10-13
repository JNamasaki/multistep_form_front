import React,{useState} from 'react'
import { perfis } from '../Perfis';

const ResultadoComponent = (categoria,valor) => {
    const [categoriaSelecionada, setCategoriaSelecionada] = useState(categoria.categoria); // Defina a categoria desejada

    const encontrarPerfilPorCategoria = (cat) => {
        return perfis.find(perfil => perfil.categoria === cat);
    };


    const perfilSelecionado = encontrarPerfilPorCategoria(categoriaSelecionada);
  
    if (perfilSelecionado) {
      return (
        <div>
          <h1>{perfilSelecionado.perfil}: {categoria.pontuacao}%</h1>
          <p>{perfilSelecionado.descricao}</p>
          <h3>Profissões:</h3>
          <ul>
            {perfilSelecionado.profissoes.map((profissao, index) => (
              <li key={index}>{profissao}</li>
            ))}
          </ul>
        </div>
      );
    } else {
      return <div>Perfil não encontrado para a categoria {categoriaSelecionada}</div>;
    }


}

export default ResultadoComponent