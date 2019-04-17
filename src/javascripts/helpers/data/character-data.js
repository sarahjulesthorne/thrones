import axios from 'axios';

const getCharacterJs = () => axios.get('../db/characters.json');

export default { getCharacterJs };
