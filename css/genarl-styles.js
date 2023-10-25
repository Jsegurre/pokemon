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
    margin:5px;
    padding:10px;
    text-align:right;
    background-image: url('https://i.blogs.es/2e39a5/anniversaryposter2019/840_560.jpeg');
    background-attachment: fixed;
    background-size:cover;
  }
  .grid-column-7 {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow: hidden;
    justify-content:center;
    border:2px solid red;
    border-style: 
    border-radius:20px;
    margin:5px;
    padding:10px;
    text-align:right;
    background-image: url('https://i.blogs.es/2e39a5/anniversaryposter2019/840_560.jpeg');
    background-attachment: fixed;
    background-size:cover;
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
