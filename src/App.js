import React from 'react';
import { GlobalStyle } from './globalStyle';

function App() {
  return (
    <>
    <GlobalStyle />
    <div>
      <h1>Nagłówek H1</h1>
      <p>To jest przykładowy paragraf.</p>
      <ul>
        <li>Element listy 1</li>
        <li>Element listy 2</li>
      </ul>
      <button>Testowy Przycisk</button>
    </div>
    </>
  );
}

export default App;
