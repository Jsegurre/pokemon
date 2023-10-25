import { LitElement, html, css } from "lit-element";
import { genarlStyles } from "./css/genarl-styles.js";
import { cardStyles } from "./css/card-styles.js";
import { pokemon } from "./pokemon";
export class PokeCards extends LitElement {
  static styles = [genarlStyles, cardStyles];
  static properties = {
    pokemonData: { type: Array },
    
    selectedPokemon: { type: String },
  };
  constructor() {
    super();
    this.pokemonData = pokemon;
    this.selectedPokemon = "";
  }
  pokemonSelect(e) {
    this.selectedPokemon = e.target.value;
  }

  sortPokemonAZ() {
    this.pokemonData = this.pokemonData.sort((a, b) => { //filtro para ordenar A-Z
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
    this.requestUpdate();
    console.log("RequestUpdate");
  }
  sortPokemonAtZ() {
    this.pokemonData = this.pokemonData.sort((a, b) => { //filtro para ordenar Z-A
      if (a.name > b.name) return -1;
      if (a.name < b.name) return 1;
      return 0;
    });
    this.requestUpdate();
    console.log("RequestUpdate");
  }

  filterPokemonByName(e) { //Creacion del filtro Pokemon
    const searchText = e.target.value.toLowerCase(); // Convertir el texto de búsqueda a minúsculas para que buque por igual 
    this.pokemonData = pokemon.filter(pokemon => pokemon.name.toLowerCase().includes(searchText));
    this.requestUpdate();
    console.log(this.pokemonData);
  }
  
  
  
  render() {
    return html`
      <div class="grid-column-8">
        <p class="txt">Escoge tu Pokémon Favorito:</p>
        <select class="ine" @change="${this.pokemonSelect}">
          <option value="">Selecciona uno</option>
          ${this.pokemonData.map(
            (pokemon) => html`
              <option value="${pokemon.name}">${pokemon.name}</option>    
              
            `



          )}
        </select>
        <button class="inp" @click="${this.sortPokemonAZ}">Ordenar A-Z</button>
        <button class="inp" @click="${this.sortPokemonAtZ}">Ordenar Z-A</button>
        

        <input class="inpe" type="text" name="buscador" id="buscador" placeholder="Busca Tu Pokemon Favorito..." @input=${this.filterPokemonByName}/>

        
        
      </div>
      <div class="details">
  ${
    this.selectedPokemon
      ? html`
          ${this.pokemonData
            .filter((pokemon) => pokemon.name === this.selectedPokemon)
            .map(
              (pokemon) => html`
        <div class="grid-column-7">
        <div class="cards">
          <h3>${pokemon.name}</h3>
          
          <div class="pokemon_header"></div>
          <div class="pokemon_img">
            <img src="${pokemon.img}" />        
            </div>
            <p class="txts"> TYPE: ${pokemon[
              `quick-move`
            ][0].type.toUpperCase()}</p>
           
          </div>



          <div class="cardt">
          <p >${pokemon.about.toUpperCase()}</p>
          </div
          </div>
      
        `
            )}
        `
      : html`
          <div class="grid-column-8">
            ${this.pokemonData.map(
              (pokemon) => html`
                <div class="card">
                  <h3>${pokemon.name.toUpperCase()}</h3>
                    
                  <div class="pokemon_header"></div>
                  <div class="pokemon_img">
                    <img src="${pokemon.img}" />
                  </div>
                </div>
              `
            )}
          </div>
        `
  }
</div>
</div>
    `;
  }
}
customElements.define("pokemon-cards", PokeCards);
