import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import action from './contacts-actions';

const contacts = createReducer([], {
  [action.fetchContactsSuccsess]: (_, { payload }) => payload,
  [action.addContactsSuccsess]: (state, { payload }) =>
    state.find(
      ({ name, number }) => name === payload.name || number === payload.number,
    )
      ? alert('This contact is already in contacts')
      : [...state, payload],
  [action.deleteContactsSuccsess]: (state, { payload }) => {
    return state.filter(({ id }) => id !== payload);
  },
});

const filter = createReducer('', {
  [action.filterContact]: (_, { payload }) => payload,
});

export default combineReducers({ contacts, filter });
