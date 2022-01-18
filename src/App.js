import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Grid from './Components/Grid/Grid.js';
import CharacterPage from './Components/CharacterPage/CharacterPage';
import Header from './Components/Header/Header';
import Fellowship from './Components/Fellowship/Fellowship';
import imageLinks from './assets/imageLinks';
import './App.css';

class App extends Component  {
  constructor() {
    super();
    this.state = {
      characters: [],
      team: [],
      selectedPlayer: '',
      errorMessage: '',
      playerCount: 9,
      msg: 'You have 9 more slots in your Fellowship.'
    }
  }


  fetchData = async () => {
    const key = process.env.REACT_APP_API_KEY;
    try {
      const response = await fetch('https://the-one-api.dev/v2/character', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': key
        }
      })
      const responseJson = await response.json();
      const playerNames = ['Frodo Baggins', 'Samwise Gamgee', 'Peregrin Took', 'Meriadoc Brandybuck', 'Gandalf', 'Aragorn II Elessar', 'Legolas', 'Gimli', 'Bilbo Baggins', 'Boromir', 'Galadriel', 'Arwen', 'Gollum', 'Elrond', 'Éowyn', 'Radagast', 'Éomer', 'Celeborn', 'Faramir', 'Treebeard', 'Denethor II', 'Beorn', 'Bard', 'Théoden', 'Thorin II Oakenshield', 'Thranduil', 'Haldir (Lorien)'];
      const filteredCharacters = playerNames.map(player => 
        responseJson.docs.filter(character => character.name === player)
      )
      this.setState({characters: filteredCharacters})
      this.createPlayers();
    } catch(err) { 
      console.log(err)
    }
  }
  
  createPlayers = () => {
    this.setState({ characters: this.state.characters.map(character => {
      let player = character;
      player.stats = { intelligence: 0, hitPoints: 0, survivalSkills: 0 }
      player.image = this.getImage(character[0].name)
      return player;
    }) })
  }

  addPlayer = (player) => {
    !this.state.team.includes(player) && this.state.team.length < 9 ? this.setState({ team: [ ...this.state.team, player], counter: this.state.playerCount--, msg: `You have ${this.state.playerCount} more slots in your Fellowship.` }) : this.setState({msg: 'Your Fellowship is unable to accept them right now. Try another player.'})
    if(this.state.playerCount < 1) {
      this.setState({msg: 'Your Fellowship is full!'})
    }
  }

  removePlayer = (player) => {
    const filteredPlayers = this.state.team.filter(character => character !== player)
    this.setState({ team: [ ...filteredPlayers ] }) 
  }

  findPlayer = (name) => {
    const foundPlayer = this.state.characters.find(character => character[0].name === name);
    this.setState({selectedPlayer: foundPlayer});
  }

  getImage = (name) => {
    const url = imageLinks[name];
    return url;
  }

  componentDidMount = () => {
    this.fetchData();
  }

  render = () => {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <Grid characters={this.state.characters} findPlayer={this.findPlayer} addPlayer={this.addPlayer} removePlayer={this.removePlayer} counter={this.state.playerCount} msg={this.state.msg}></Grid>
            }
          />
          <Route path="/:name" element={<CharacterPage player={this.state.selectedPlayer} image={this.state.selectedPlayer.image} addPlayer={this.addPlayer} />}></Route>
          <Route path="/fellowship" element={<Fellowship team={this.state.team} findPlayer={this.findPlayer} removePlayer={this.removePlayer} />}></Route>
        </Routes>
        <footer className="footer">
            Created by Delilah Rose 🧝‍♀️
        </footer>
      </div>
    )
  }
}


export default App;
