import { css } from "lit-element";

export const genarlStyles = css`
//   .container {
//     margin-left: auto;
//     margin-right: auto;
//     padding-right: 15px;
//     padding-left: 15px;
//     padding-top: 20px;
//     width: 300px;
//   }

//   .grid-column-12 {
//     display: grid;
//     grid-template-columns: auto auto auto auto auto auto auto auto auto auto auto auto;
//     column-gap: 15px;
//   }

  .grid-column-8 {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow: hidden;
    justify-content:center;
    border:2px solid red;
    border-style: 
    border-radius:20px;
    margin:20px;
    padding:10px;
  }

  .grid-column-6 {
    display: grid;
    grid-template-columns: auto auto auto auto auto auto;
    column-gap: 15px;
  }

  .grid-column-4 {
    display: grid;
    grid-template-columns: auto auto auto auto;
    column-gap: 15px;
  }

  .grid-column-2 {
    display: grid;
    grid-template-columns: auto auto auto;
    column-gap: 15px;
  }

  .grid-column-1 {
    display: grid;
    grid-template-columns: auto;
    column-gap: 15px;
  }
//   .container_pokemon {
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr;
//     column-gap: 15px;

//   }
//   .container_poke {
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr;
//     column-gap: 15px;

//   }
`;
