import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import pokeData from './data.js'
import ImageList from './ImageList.js'
import request from 'superagent';
import SearchOptions from './SearchOptions.js'


export default class App extends Component {
  
state = {
  pokeApi: [],
}

// append 
async componentDidMount() {
  const pokeApiData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex`);

  const pokeApi = this.state.pokeApi;
  this.setState({ pokeApi: pokeApiData.body.results })
  
  console.log(pokeApiData.body.results);
};


  render() {
    return (
      <>
      <Header 
     title="Pokedex!"   />
      <SearchOptions />

      <ImageList pokemonData = {this.state.pokeApi} />

 

 </>
  );
}}


