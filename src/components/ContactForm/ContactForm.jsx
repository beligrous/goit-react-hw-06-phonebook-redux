// import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Button, Input } from './contact-form.styled';
import { addName, addNumber } from 'redux/actions';

function ContactForm({ onSubmit }) {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');
  const name = useSelector(store => store.name);
  const number = useSelector(store => store.number);
  const dispatch = useDispatch();

  const addingName = e => {
    const action = addName(e.target.value);
    dispatch(action);
  };

  const addingNumber = e => {
    const action = addNumber(e.target.value);
    dispatch(action);
  };

  const handleSubmitContact = e => {
    e.preventDefault();
    onSubmit({ name, number });
    reset();
  };

  const reset = () => {
    const actionName = addName('');
    dispatch(actionName);
    const actionNumber = addNumber('');
    dispatch(actionNumber);
  };

  return (
    <Form onSubmit={handleSubmitContact}>
      <label>
        Name
        <Input
          type="text"
          onChange={addingName}
          value={name}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <Input
          onChange={addingNumber}
          value={number}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
