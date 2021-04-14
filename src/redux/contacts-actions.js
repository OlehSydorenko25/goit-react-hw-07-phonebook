/* eslint-disable import/no-anonymous-default-export */
import { createAction } from '@reduxjs/toolkit';

// const fetchContactsRequest = createAction('contacts/fetchContactsRequest');
const fetchContactsSuccsess = createAction('contacts/fetchContactsSuccsess');
const fetchContactsError = createAction('contacts/fetchContactsError');

// const addContactsRequest = createAction('contacts/addContactsRequest');
const addContactsSuccsess = createAction('contacts/addContactsSuccsess');
const addContactsError = createAction('contacts/addContactsError');

// const deleteContactsRequest = createAction('contacts/deleteContactsRequest');
const deleteContactsSuccsess = createAction('contacts/deleteContactsSuccsess');
const deleteContactsError = createAction('contacts/deleteContactsError');

const filterContact = createAction('contact/filter');

export default {
  // fetchContactsRequest,
  fetchContactsSuccsess,
  fetchContactsError,
  // addContactsRequest,
  addContactsSuccsess,
  addContactsError,
  filterContact,
  // deleteContactsRequest,
  deleteContactsSuccsess,
  deleteContactsError,
};
