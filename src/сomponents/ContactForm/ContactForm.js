import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactOperations from '../../redux/contacts-operations';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

import styles from './ContactForm.module.css';

class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  };

  state = {
    name: '',
    number: '',
  };

  nameInputId = uuidv4();
  numberInputId = uuidv4();

  handleChange = e => {
    const value = e.currentTarget.name;

    this.setState({
      [value]: e.currentTarget.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.props);
    // Проверка на Одинаковие слова разного регистра
    this.props.phonebook.contacts.find(
      ({ name, number }) =>
        name.toLowerCase() === this.state.name.toLowerCase() ||
        number === this.state.number,
    )
      ? alert('This contact is already in contacts')
      : this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label htmlFor={this.nameInputId}>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
          />
        </label>

        <label htmlFor={this.numberInputId}>
          Number
          <input
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            id={this.numberInputId}
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

// const mapStateToProps = state => {
//   return { state: state };
// };
const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  onSubmit: value => dispatch(contactOperations.addContact(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
