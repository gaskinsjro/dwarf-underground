import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import BodyParagraph from './BodyParagraph';
import AuthorEtTitle from './AuthorEtTitle'
import ComShare from './ComShare'
import Footer from './Footer'
import BottomAds from './BottomAds'


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {/*Took the BodyParagraph*/}
      
  <main className="expanded row">
    <div className="large-8 medium-12 columns article">
      <AuthorEtTitle/>
      <BodyParagraph/>
      <ComShare/>
    </div>
    <BottomAds/>
  </main>

  <Footer/>
</div>
  
    );
  }
}

export default App;
