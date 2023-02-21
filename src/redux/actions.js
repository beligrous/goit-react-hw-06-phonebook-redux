import {
  ADD_CONTACT,
  ADD_FILTER,
  ADD_NAME,
  ADD_NUMBER,
  DEL_CONTACT,
} from './types';

export const addContact = contact => {
  return { type: ADD_CONTACT, contact };
};

export const delContact = id => {
  return { type: DEL_CONTACT, id };
};

export const addFilter = query => {
  return { type: ADD_FILTER, query };
};

export const addName = name => {
  return { type: ADD_NAME, name };
};

export const addNumber = number => {
  return { type: ADD_NUMBER, number };
};
