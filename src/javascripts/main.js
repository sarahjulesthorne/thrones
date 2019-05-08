// module initiates functionality on page load
import characters from './components/characters/characters';

import '../styles/main.scss';

const init = () => {
  characters.getData();
};
init();
