import React from 'react';
import './scss/app.scss';
import { GlobalHeader } from './components/GlobalHeader/GlobalHeader.js';
import { RelatedArticles } from './components/RelatedArticles/RelatedArticles.js';

function App() {
  return (
    <div className="App">
      <GlobalHeader />
      <RelatedArticles />
    </div>
  );
}

export default App;
