import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts-operations';
import styles from './ContactList.module.css';

class ContactList extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      // <h3>qwe</h3>
      <ul className={styles.contactList}>
        {this.props.contactList.map(({ id, name, number }) => {
          return (
            <li key={id} className={styles.contact}>
              <span>{name}: </span>
              <span>{number}</span>
              <button onClick={() => this.props.onDeleteContact(id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

const getVisibleContacts = (arrContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return arrContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = state => {
  const { contacts, filter } = state.phonebook;
  const visidleContacts = getVisibleContacts(contacts, filter);
  return { contactList: visidleContacts };
  // return { contactList: contacts };
};

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsOperations.deleteContact(id)),
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
