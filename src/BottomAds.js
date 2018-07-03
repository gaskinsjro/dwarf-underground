import HammerAd from './HammerAd'
import MountainAd from './MountainAd';
import IndyOrcs from './IndyOrcs';
import Hobbit99 from './Hobbit99';
import GoldMineAd from './GoldMineAd';
import React, { Component } from 'react'

class BottomAds extends React.Component{
    var clickBaitArray = [];


    render(){
        return(
            <div>
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
      <GoldMineAd/>
      <Hobbit99/>
    </div>
    </div>
        )
    }
}

    export default BottomAds