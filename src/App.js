import React from 'react';
//Components
import Header from './componets/Header';
import Home from './componets/Home';

//Styles
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  );
}

export default App;
