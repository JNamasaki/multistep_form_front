import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { FaFlagCheckered } from "react-icons/fa";
import { Link } from 'react-router-dom';

const HomeScreen = ({handleComecar}) => {
  return (
    <div className='bg-dark text-white' style={{ width: '100%', margin: "0 auto", position:"relative" }}>
      <Card className='bg-dark text-white width_mobile' style={{ width: '100%', margin: "0 auto" }}>
        <Card.Header>
          Descubra Seu Futuro!
        </Card.Header>
        <Card.Body style={{ textAlign: "justify" }}>
          <Card.Text>
            O objetivo deste teste é ajudar você a identificar suas áreas de maior interesse e fornecer uma orientação valiosa sobre as carreiras que podem se alinhar com seus talentos e paixões.
          </Card.Text>

          <Card.Text>
            Desenvolvido com base na metodologia RIASEC, criada por John L. Holland, um renomado psicólogo e pesquisador de carreira, este teste tem sido amplamente utilizado ao longo dos anos para ajudar indivíduos a explorar e escolher carreiras que se alinhem com seus interesses naturais.
          </Card.Text>

          <Card.Text>
            Você responderá a uma série de perguntas sobre suas preferências e interesses em relação a várias atividades e situações.
          </Card.Text>

          <Card.Text>
            Cada pergunta será seguida por opções de resposta que variam de "Sim", “Neutro” e "Não". Com base nas suas respostas, o teste calculará sua pontuação em cada uma das seis categorias RIASEC: Realista (R), Investigativo (I), Artístico (A), Social (S), Empreendedor (E) e Convencional (C).
          </Card.Text>
          <Card.Text>
            Ao final do teste, você receberá uma pontuação em cada categoria RIASEC. O tipo de interesse predominante será aquele com a maior pontuação positiva. Além disso, você terá acesso a uma lista de áreas de atuação que correspondem aos seus interesses, o que pode ser um guia útil para explorar suas opções de carreira.
          </Card.Text>

          <Card.Text>
            Lembre-se de que este teste é apenas uma ferramenta para ajudar na reflexão sobre suas preferências e interesses. Os resultados não são definitivos, mas podem ser um ponto de partida valioso para suas investigações de carreira.
          </Card.Text>

          <Card.Text>
            Agora, vamos começar o teste e descobrir as áreas que podem ser mais gratificantes para você!
          </Card.Text>
        </Card.Body>

        <Card.Footer>
          
            <Button onClick={handleComecar} style={{ alignItems: "center" }}>
              <span>Começar Teste </span>

              <FaFlagCheckered />
            </Button>

        </Card.Footer>
      </Card>

    </div>
  )
}

export default HomeScreen