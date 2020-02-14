import React, { Component } from 'react';
import ImageItem from './ImageItem.js';

export default class ImageList extends Component {
    render() {
        const pokeDeck = this.props.pokemonData
        console.log(pokeDeck);
        return (

        
        <div>

            {pokeDeck.map((object) => {
            return <ImageItem pokemonData={object}/> 

        })}
        </div>

        );
    }}
        




        
            