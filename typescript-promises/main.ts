import { takeAChance } from './take-a-chance.js';

takeAChance('Tristan')
  .then((message) => console.log(message))
  .catch((error) => console.error(error.message));
