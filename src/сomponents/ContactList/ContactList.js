import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts-operations';
import selectors from '../../redux/contacts-selectors';
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
              <button
                type="button"
                onClick={() => this.props.onDeleteContact(id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    contactList: selectors.getVisibleContacts(state),
  };
};

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsOperations.deleteContact(id)),
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
