import React, { Component } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Grid from './Components/Grid/Grid.js';
import CharacterPage from './Components/CharacterPage/CharacterPage';
import Header from './Components/Header/Header';
import './App.css';

class App extends Component  {
  constructor() {
    super();
    this.state = {
      characters: [],
      team: [],
      selectedPlayer: ''
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

  addPlayer = (player) => {
    !this.state.team.includes(player) && this.state.team.length < 9 ? this.setState({ team: [ ...this.state.team, player] }) : console.log(player)
  }

  findPlayer = (name) => {
    const foundPlayer = this.state.characters.find(character => character[0].name === name)
    console.log(foundPlayer)
    this.setState({selectedPlayer: foundPlayer})
  }


  componentDidMount = () => {
    this.fetchData();
  }

  render = () => {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={
            <Grid characters={this.state.characters} addPlayer={this.addPlayer} findPlayer={this.findPlayer}></Grid>
            }
          />
          <Route path="/:name" element={<CharacterPage player={this.state.selectedPlayer} addPlayer={this.addPlayer}/>}></Route>
        </Routes>
        <footer>
            Created by Delilah Rose 🧝‍♀️
        </footer>
      </div>
    )
  }
}


export default App;
