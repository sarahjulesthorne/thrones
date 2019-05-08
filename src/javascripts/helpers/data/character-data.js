// module used axios to retrieve JSON data from the charaacters.json file in db directory
// will use throughout application
import axios from 'axios';

const getCharacterJs = () => axios.get('../db/characters.json');

export default { getCharacterJs };
