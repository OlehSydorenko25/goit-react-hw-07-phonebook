/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import actions from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:3004';

const fetchContacts = () => dispatch => {
  // dispatch(actions.fetchContactsRequest());

  axios
    .get('/contacts')
    .then(({ data }) => {
      // console.log(data);
      return dispatch(actions.fetchContactsSuccsess(data));
    })
    .catch(error => dispatch(actions.fetchContactsError(error)));
};

const addContact = obj => dispatch => {
  // dispatch(actions.addContactsRequest());

  axios
    .post('/contacts', obj)
    .then(({ data }) => dispatch(actions.addContactsSuccsess(data)))
    .catch(error => dispatch(actions.addContactsError(error)));
};

const deleteContact = id => dispatch => {
  // dispatch(actions.deleteContactsRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(data => {
      // console.log(data);
      return dispatch(actions.deleteContactsSuccsess(id));
    })
    .catch(error => dispatch(actions.deleteContactsError(error)));
};

export default { fetchContacts, addContact, deleteContact };
