import './characters.scss';

import data from '../../helpers/data/character-data';
import util from '../../helpers/utils';

// initialized to hold characters data from axios retrieve function call
let characters = [];

// created to build cards to display characters and print them to DOM
const domStringBuilder = () => {
  let domString = '';
  characters.forEach((char) => {
    domString += `<div class="house-${char.house.toLowerCase()}">`;
    domString += '<div class="img-holder">';
    domString += `<img src=${char.imageUrl} alt="image of ${char.name}"/>`;
    domString += '</div>';
    domString += `<h2 class="char-name">${char.name}</h2>`;
    domString += '</div>';
  });
  util.printToDom('characters', domString);
};

// created to call axios retrieval function and build promises for responses once data is retrieved
// then promise created to assign data retrieved to empty array
// and pass that array into domStringBuilder function call
const getData = () => {
  data.getCharacterJs()
    .then((response) => {
      const charactersArray = response.data.characters;
      characters = charactersArray;
      domStringBuilder();
    })
    .catch((error) => {
      console.error(error);
    });
};

export default {
  getData,
};
