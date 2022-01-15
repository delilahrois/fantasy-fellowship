import React, { Component } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Grid from './Components/Grid/Grid.js';
import CharacterPage from './Components/CharacterPage/CharacterPage';
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
          'Authorization': 'Bearer sNVXztaU5nXNFJjGiLRW' n
        }
      })
      const responseJson = await response.json();
      const playerNames = ['Frodo Baggins', 'Samwise Gamgee', 'Peregrin Took', 'Meriadoc Brandybuck', 'Gandalf', 'Aragorn II Elessar', 'Legolas', 'Gimli', 'Bilbo Baggins', 'Boromir', 'Galadriel', 'Arwen', 'Gollum', 'Elrond', 'Éowyn', 'Radagast', 'Éomer', 'Celeborn', 'Faramir', 'Treebeard', 'Denethor II', 'Beorn', 'Bard', 'Gríma Wormtongue', 'Théoden', 'Thorin II Oakenshield', 'Thranduil', 'Haldir (Lorien)'];
      const filteredCharacters = playerNames.map(player => 
        responseJson.docs.filter(character => character.name === player)
      )
      this.setState({characters: filteredCharacters})
      this.createPlayers();
      console.log(this.state.characters)
    } catch(err) {
      console.log(err)
    }
  }

  createPlayers = () => {
    this.setState({ characters: this.state.characters.map(character => {
      let player = character;
      player.stats = { intelligence: 0, hitPoints: 0, survivalSkills: 0 }
      return player;
    }) })
  }


  componentDidMount = () => {
    this.fetchData();
  }

  render = () => {
    return (
      <div>
        <Link to="/"><header>Fantasy Fellowship</header></Link>
        <Routes>
          <Route path="/" element={
            <Grid characters={this.state.characters} handleClick={this.handleClick}></Grid>
            }
          />
          <Route path="/:name" element={<CharacterPage />}></Route>
        </Routes>
        <footer>

        </footer>
      </div>
    )
  }
}


export default App;
