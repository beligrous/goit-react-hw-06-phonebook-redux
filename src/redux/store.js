import { createStore } from 'redux';
import {
  ADD_CONTACT,
  ADD_FILTER,
  ADD_NAME,
  ADD_NUMBER,
  DEL_CONTACT,
} from './types';

const initialStore = {
  contacts: [],
  filter: '',
  name: '',
  number: '',
};

const reducer = (store = initialStore, action) => {
  let newContacts;
  switch (action.type) {
    case ADD_CONTACT:
      newContacts = [...store.contacts, action.contact];
      return { ...store, contacts: newContacts };
      break;
    case DEL_CONTACT:
      newContacts = store.contacts.filter(item => item.id !== action.id);
      return { ...store, contacts: newContacts };
      break;
    case ADD_FILTER:
      return { ...store, filter: action.filter };
      break;
    case ADD_NAME:
      return { ...store, name: action.name };
      break;
    case ADD_NUMBER:
      return { ...store, number: action.number };
    default:
      return store;
  }
};

const store = createStore(reducer);

export default store;
