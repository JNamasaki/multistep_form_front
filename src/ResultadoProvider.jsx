import React, { createContext, useContext, useState } from 'react';

const ResultadoContext = createContext();

export const useResultadoContext = () => {
  return useContext(ResultadoContext);
};

export const ResultadoProvider = ({ children }) => {
  const [resultado, setResultado] = useState(null);

  const setNovoResultado = novoResultado => {
    setResultado(novoResultado);
  };

  return (
    <ResultadoContext.Provider value={{ resultado, setNovoResultado }}>
      {children}
    </ResultadoContext.Provider>
  );
};
