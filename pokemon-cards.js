import { LitElement, html, css } from "lit-element";
import { genarlStyles } from "./css/genarl-styles.js";
import { cardStyles } from "./css/card-styles.js";
import { pokemon } from "./pokemon";

export class PokeCards extends LitElement {
  static get styles() {
    return [genarlStyles, cardStyles];
  }

  static get properties() {
    return {
      title: {
        type: { String },
        imgpokemon: { type: String },
        params: { type: Object },
      },
    };
  }
  constructor() {
    super();
    this.type = "001";
    // this.pokemon = pokemon;
    this.params = {
      name: ``,
    };
  }

  render() {
    return html`
         <div>
            <p>
                    Pokemon favorito:
                
                    <select>
                    ${pokemon.map(
                      (name) => html`
                        <option>${name.name.toUpperCase()}</option>
                      `
                    )}
                    </select>
                   


                    <input type="submit" value="Enviar" />  
                  </p>
                
                  </div>
            <div class="grid-column-8"> 
          
          ${pokemon.map(
            (inf) => html`
              <div class="card">


                <h3>${inf.name.toUpperCase()}</h3>
                <h2>${inf.num.toUpperCase()}</h2>
                <div class="pokemon_header"></div>
                <div class="pokemon_img">
                <img src=${inf.img} />
                 

                    
          
            

                 
                  


                  </div>
                </div>
              </div>
            `
          )}
        </div>
      </div>
    `;
  }
}
customElements.define("pokemon-cards", PokeCards);
