import React, { Component } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Grid from './Components/Grid/Grid.js';
import './App.css';

class App extends Component  {
  constructor() {
    super();
    this.state = {
      characters: [],
      team: []
    }
  }


  fetchData = async () => {
    try {
      const response = await fetch('https://the-one-api.dev/v2/character', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer sNVXztaU5nXNFJjGiLRW'
        }
      })
      const responseJson = await response.json();
      const playerNames = ['Frodo Baggins', 'Samwise Gamgee', 'Peregrin Took', 'Meriadoc Brandybuck', 'Gandalf', 'Aragorn II Elessar', 'Legolas', 'Gimli', 'Bilbo Baggins', 'Boromir', 'Galadriel', 'Arwen', 'Gollum', 'Elrond', 'Éowyn', 'Radagast', 'Éomer', 'Celeborn', 'Faramir', 'Treebeard', 'Denethor II', 'Beorn', 'Bard', 'Gríma Wormtongue', 'Théoden', 'Thorin II Oakenshield', 'Thranduil', 'Haldir (Lorien)'];
      const filteredCharacters = playerNames.map(player => 
        responseJson.docs.filter(character => character.name === player)
      )
      this.setState({characters: filteredCharacters})
      console.log(this.state.characters)
    } catch(err) {
      console.log(err)
    }
  }


componentDidMount = () => {
  this.fetchData();
}
  render = () => {
    return (
      <div>
       <header>Fantasy Fellowship</header>
      <Grid characters={this.state.characters}></Grid>
      </div>
    )
  }
}


export default App;
