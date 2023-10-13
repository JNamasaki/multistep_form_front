import { useState, useRef } from "react";

export function useForm(steps){
    const [currentStep,setCurrentStep] = useState(0);
    const [responses, setResponses] = useState([]);
    const novaSecaoRef = useRef(null);
    const [dados,setDados] = useState([]);
    
    function changeStep(i,e){
        if(e) e.preventDefault();

        if(i < 0 || i >= steps) return;
        
        setCurrentStep(i);

        window.scrollTo({ top: 0, behavior: 'smooth' });
        
    }

    function updateResponses(value, categoria, id) {

        const perguntaJaRespondida = responses.some(resposta => resposta.id === id);

        if (perguntaJaRespondida) {
          // Atualiza a resposta existente
          const novasRespostas = responses.map(resposta =>
            resposta.id === id
              ? {
                value: value,
                categoria: categoria,
                id: id
            }
              : resposta
          );
          if(categoria == "Dados") setDados(novasRespostas);
          setResponses(novasRespostas);
        } else {
          // Adiciona a resposta à lista de respostas
          if(categoria == "Dados") setDados([...dados, {
            value: value,
            categoria: categoria,
            id: id
        }]);
          setResponses([...responses, {
            value: value,
            categoria: categoria,
            id: id
        }]
        );
        }
        console.log(responses)
  
    }



    return{
        currentStep,
        
        changeStep,
        isFormPerfilPage: ((currentStep+1) === (steps-1)) ? true : false,
        isLastStep: ((currentStep+1) === (steps)) ? true : false,
        isFirstStep: currentStep === 0 ? true : false,
        responses,
        updateResponses,
        dados,
        novaSecaoRef
    };
}

export function mostraComponente(componente) {
  const [telaAtual, setTelaAtual] = useState('HomeScreen');
  const inputRef = useRef(null);

  const handleComecar = () => {
    setTelaAtual('FormScreen');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const handleVerResultado = () => {
    setTelaAtual('ResultadoScreen');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return{
    telaAtual,
    handleComecar,
    handleVerResultado,
    inputRef
  }
}