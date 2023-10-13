import { useState, forwardRef } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

import '../App.css'

// Components
import { FiSend } from 'react-icons/fi'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";


import { useForm } from '../hooks/useForm'
import MultiStepProgressBar from '../components/MultiStepProgressBar';


import { Container, Row, Col, Card, Button, CardFooter } from 'react-bootstrap';
import { questions } from '../Questions';
import MultiStepForm from '../components/MultiStepForm';
import { calcularPontuacao } from '../hooks/getAnswers';

import { useResultadoContext } from '../ResultadoProvider';

const dataAtual = new Date(); // Obtém a data atual
const dia = String(dataAtual.getDate()).padStart(2, '0'); // Obtém o dia com zero à esquerda se for menor que 10
const mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); // Obtém o mês (lembre-se que os meses começam do zero no JavaScript)
const ano = dataAtual.getFullYear();

function isNull(item) {
  return item == null;
}
const FormScreen = forwardRef(({ handleVerResultado }) => {

  const [resultado, setResultado] = useState({});



  const formComponents = questions?.length || 0;

  const { currentStep, changeStep, isFormPerfilPage, isLastStep, isFirstStep, responses, updateResponses, dados, novaSecaoRef } = useForm(formComponents);

  const { setNovoResultado } = useResultadoContext();




  const handlePontuacao = () => {
    const pontuacao = calcularPontuacao(responses);
    setResultado(pontuacao);
  };

  const handleFinalizar = async () => {
    const [nome, cpf, telefone, email] = dados.map(item => item.value)



    try {
      const requests = [
        axios.post(import.meta.env.VITE_REACT_APP_API_URL_SEND_MAIL, {
          "destinatario_email": email,
          "resultado": resultado,
          "nome": nome
        }),
        axios.post(import.meta.env.VITE_REACT_APP_API_URL_UPDATE_SHEET, {
          "dia": `${dia}/${mes}/${ano}`,
          "nome": nome,
          "cpf": cpf,
          "telefone": telefone,
          "email": email
        }),

      ];

      const responseReq = await Promise.all(requests);

      setNovoResultado(resultado);
      // Verifique as respostas para cada requisição, se necessário

      // Redirecione para a tela de resultado
      handleVerResultado();
    } catch (error) {
      console.error('Erro ao enviar requisições:', error);
    }

  };
  return (
    <>


      <div className="app align-self-center">
        <Container className='h-100'>
          <Row className='h-100 d-flex justify-content-evenly'>
            <Col className='align-self-center ' style={{ zIndex: 10 }}>
              <MultiStepProgressBar step={currentStep + 1} />
            </Col>
          </Row>
          <Row className='h-100 d-flex justify-content-evenly'>
            <Card className=" bg-dark ">

              <Card.Body >

                <MultiStepForm step={currentStep} list={questions}
                  responses={responses} updateResponses={updateResponses}
                  dados={dados} ref={novaSecaoRef}
                />
              </Card.Body>
              {isFirstStep ? (
                <Card.Footer className='d-flex justify-content-end'>
                  <Button className='btn mr-auto' onClick={() => { changeStep(currentStep + 1) }}
                  >
                    <span>Próximo</span>
                    <IoIosArrowForward />

                  </Button>
                </Card.Footer>
              ): (
                  <Card.Footer className='d-flex justify-content-between'>
                {!isFirstStep && (
                  <Button className='btn' onClick={() => { changeStep(currentStep - 1) }} >
                    <IoIosArrowBack />
                    <span>Voltar</span>
                  </Button>
                )}

                {!isFormPerfilPage ? (!isLastStep ? (
                  <Button className='btn mr-auto' onClick={() => { changeStep(currentStep + 1) }}
                  >
                    <span>Próximo</span>
                    <IoIosArrowForward />

                  </Button>
                ) : (

                  <>
                    <Button className='btn' onClick={() => {
                      handleFinalizar()
                    }}
                    >

                      <span>Finalizar</span>
                      <FiSend />
                    </Button>

                  </>

                )) : (<Button className='btn ml-auto' onClick={() => { handlePontuacao(); changeStep(currentStep + 1); }}
                >
                  <span>Próximo</span>
                  <IoIosArrowForward />

                </Button>)

                }

              </Card.Footer>
              )}


            
            </Card>
          </Row>
        </Container>
      </div>
    </>
  )
});

export default FormScreen
