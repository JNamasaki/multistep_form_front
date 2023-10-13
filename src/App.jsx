import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import { ResultadoProvider } from './ResultadoProvider';
import FormScreen from './screens/FormScreen'
import HomeScreen from './screens/HomeScreen'
import ResultadoScreen from './screens/ResultadoScreen';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { mostraComponente } from './hooks/useForm';


function App() {

  const { telaAtual, handleComecar, handleVerResultado, inputRef} = mostraComponente();
  return (
  
      <ResultadoProvider>
        <HeaderComponent />
        {telaAtual === 'HomeScreen' && <HomeScreen handleComecar={handleComecar} />}
        {telaAtual === 'FormScreen' && <FormScreen handleVerResultado={handleVerResultado}/>}
        {telaAtual === 'ResultadoScreen' && <ResultadoScreen />}
        <FooterComponent />
      </ResultadoProvider>
  

  );
}

export default App
