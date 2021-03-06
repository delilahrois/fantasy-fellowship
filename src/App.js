import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Grid from './Components/Grid/Grid.js';
import CharacterPage from './Components/CharacterPage/CharacterPage';
import Header from './Components/Header/Header';
import Fellowship from './Components/Fellowship/Fellowship';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import imageLinks from './assets/imageLinks';
import './App.css';

class App extends Component  {
  constructor() {
    super();
    this.state = {
      characters: [],
      team: [],
      selectedPlayer: '',
      playerCount: 9,
      msg: ''
    }
  }


  fetchData = async () => {
    const key = process.env.REACT_APP_API_KEY;
    try {
      const response = await fetch('https://the-one-api.dev/v2/character', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer' + ' ' + key
        }
      })
      const responseJson = await response.json();
      console.log(responseJson)
      const playerNames = ['Frodo Baggins', 'Samwise Gamgee', 'Peregrin Took', 'Meriadoc Brandybuck', 'Gandalf', 'Aragorn II Elessar', 'Legolas', 'Gimli', 'Bilbo Baggins', 'Boromir', 'Galadriel', 'Arwen', 'Gollum', 'Elrond', 'Éowyn', 'Radagast', 'Éomer', 'Celeborn', 'Faramir', 'Treebeard', 'Denethor II', 'Beorn', 'Bard', 'Théoden', 'Thorin II Oakenshield', 'Thranduil', 'Haldir (Lorien)'];
      const filteredCharacters = responseJson.docs.filter((character) => playerNames.includes(character.name));
      this.setState({characters: filteredCharacters}, this.createPlayers);
    } catch(err) { 
      return (
        <ErrorPage />
      )
    }
  }
  
  createPlayers = () => {
    this.setState({ characters: this.state.characters.map(character => {
      let player = character;
      player.stats = { intelligence: 0, hitPoints: 0, survivalSkills: 0 };
      player.image = this.getImage(character.name);
      return player;
    }) })
  }

  addPlayer = (player) => {

    if(this.state.playerCount < 1) {
      this.setState({msg: 'Your Fellowship is full!'})
      setTimeout(() => {this.setState({msg: ''})}, 2000)
    }

    if(!this.state.team.includes(player) && this.state.team.length < 9) {
      this.setState({team: [...this.state.team, player], counter: this.state.playerCount--})
    } else {
      this.removePlayer(player)
    }
    
  }

  removePlayer = (player) => {
    const filteredPlayers = this.state.team.filter(character => character !== player)
    this.setState({ team: [ ...filteredPlayers ], playerCount: this.state.playerCount + 1}) 
  }

  findPlayer = (name) => {
    const foundPlayer = this.state.characters.find(character => character.name.includes(name));
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
        <Header playerCount={this.state.playerCount}/>
        <Routes>
          <Route path="*" element={<ErrorPage/>}></Route>
          <Route path="/" element={
            <Grid key={Date.now()} characters={this.state.characters} findPlayer={this.findPlayer} addPlayer={this.addPlayer} msg={this.state.msg}selectedPlayers={this.state.team}></Grid>
            }
          />
          <Route path="/:name" element={<CharacterPage player={this.state.selectedPlayer} addPlayer={this.addPlayer} findPlayer={this.findPlayer} characters={this.state.characters}/>}></Route>
          <Route path="/fellowship" element={<Fellowship key={Date.now()} team={this.state.team} findPlayer={this.findPlayer} removePlayer={this.removePlayer} />}></Route>
        </Routes>
        <footer className="footer">
            <p className="footer-text">Created by Delilah Rose 🧝‍♀️</p>
        </footer>
      </div>
    )
  }
}

App.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object),
  team: PropTypes.arrayOf(PropTypes.object),
  selectedPlayer: PropTypes.object,
  errorMessage: PropTypes.string,
  playerCount: PropTypes.number,
  msg: PropTypes.string
}


export default App
