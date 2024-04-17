import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Selecionando a DIV que está no index.html pagina inicial
const root = ReactDOM.createRoot(document.getElementById('root'));

// Aqui está sendo chamado o componente App para ser exibido na pagina inicial
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

