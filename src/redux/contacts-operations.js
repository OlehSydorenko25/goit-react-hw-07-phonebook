/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import actions from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:3004';

const fetchContacts = () => dispatch => {
  axios
    .get('/contacts')
    .then(({ data }) => {
      return dispatch(actions.fetchContactsSuccsess(data));
    })
    .catch(error => dispatch(actions.fetchContactsError(error)));
};

const addContact = obj => dispatch => {
  axios
    .post('/contacts', obj)
    .then(({ data }) => dispatch(actions.addContactsSuccsess(data)))
    .catch(error => dispatch(actions.addContactsError(error)));
};

const deleteContact = id => dispatch => {
  axios
    .delete(`/contacts/${id}`)
    .then(() => {
      return dispatch(actions.deleteContactsSuccsess(id));
    })
    .catch(error => dispatch(actions.deleteContactsError(error)));
};

export default { fetchContacts, addContact, deleteContact };
