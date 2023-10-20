import {LitElement,html,css} from 'lit-element';
import {genarlStyles } from './css/genarl-styles.js';
import {cardStyles } from './css/card-styles.js';
import {pokemon} from './pokemon';



export class PokeCards extends LitElement {
    static get styles() {
        return [genarlStyles, cardStyles];
    }

    
    static get properties() {
        return {
            title: { 
                type: {String},
                imgpokemon: {type: String},
          
              
             }
        };
    }
    constructor () {
        super();
        this.type = '001';
        // this.pokemon = pokemon;
    }



    render() {
        return html`
        <div class="card">
            
        <p>

        Búsqueda de Pokemon: <input type="search" name="busquedapokemon" placeholder="tipo de pokemon...">
    
        <input type="submit" value="Buscar">
    
      </p>
        <div class="container_pokemon">
                ${pokemon.map(inf => html`
                    <div class="card">
                    <h3>${inf.name.toUpperCase()}</h3>
                     <div class="pokemon_header">
                          </div>                         
                        <div class="pokemon_img">
                            <img src=${inf.img}/>
                            <div class="pokemon_abt">
                            <p>${inf.about}</p>
                            </div>
                            <div class="pokemon_sz">
                            <h2>${inf.size.height}</h2>
                            <h2>${inf.size.weight}</h2>
                            </div>
                            <div class="pokemon_rr">
                            <h2>${inf.rarity}</h2>
                            
                            



                            </div>                           
                        
                       

                       
                   
                    
                         
                    </div>
                `)}
        



        
        `;
    }}
    customElements.define('pokemon-cards', PokeCards);