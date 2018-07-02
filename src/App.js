import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import BodyParagraph from './BodyParagraph';
import HammerAd from './HammerAd'
import MountainAd from './MountainAd';
import IndyOrcs from './IndyOrcs';
import AuthorEtTitle from './AuthorEtTitle'
import ComShare from './ComShare'


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
    <aside className="large-4 medium-12 columns">
      <HammerAd/>
    </aside>

    <div className="small-12 columns other-articles">
      <h2>From around the Realm</h2>
      <div className="small-6 medium-3 columns other-article">
        <IndyOrcs/>
      </div>
      <div className="small-6 medium-3 columns other-article">
        <MountainAd/>
      </div>
      <div className="small-6 medium-3 columns other-article">
        <a href="#">
          <img src="http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg" alt="gold" />
          <p>Mine 20% more gold with One Weird Trick</p>
        </a> 
      </div>
      <div className="small-6 medium-3 columns other-article">
        <a href="#">
          <img src="http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg" alt="hobbit" />
          <p>Surprise for Indiana Hobbits born before 1999</p>
        </a> 
      </div>
    </div>
  </main>

  <footer className="expanded row">
    <h6>&copy; 2017 Erebor Industries</h6>
    <h6 className="float-right">All rights reserved</h6>
  </footer>
</div>
  
    );
  }
}

export default App;
