import storiesStore from './stories'
import productsStore from './products' 

import { database } from '../firebase/firebase'
import { child, get, ref } from 'firebase/database';

export default {
  modules: {
    stories: storiesStore,
    products: productsStore
  }
}
hola soy kevin aron tapia cruz