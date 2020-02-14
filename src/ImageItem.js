import React, { Component } from 'react';

export default class ImageItem extends Component {
  
    render() {
        const Item = this.props.pokemonData;
        
    return ( 
         <div class="itemCard">
            <img src={Item.url_image} height="200" width="200" alt=""></img>
            <h3>{Item.pokemon}</h3>
            <p>{Item.attack}</p>
            <p>{Item.defense}</p>

        </div>

        );
    }}