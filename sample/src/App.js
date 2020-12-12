import React from 'react';
import './scss/app.scss';
import { GlobalHeader } from './components/GlobalHeader/GlobalHeader.js';
import { GlobalFooter } from './components/GlobalFooter/GlobalFooter.js';
import { RelatedArticles } from './components/RelatedArticles/RelatedArticles.js';

function App() {
  return (
    <div className="App">
      <GlobalHeader />
      <RelatedArticles />
      <GlobalFooter />
    </div>
  );
}

export default App;
