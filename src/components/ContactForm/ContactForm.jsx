import { useState } from 'react';
import PropTypes from 'prop-types';
import { RiUserAddLine } from 'react-icons/ri';
import { IoMdPersonAdd } from 'react-icons/io';
import { BsFillTelephoneFill } from 'react-icons/bs';
import css from './ContactForm.module.css';

function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    clearForm();
  };

  const clearForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <div className={css.wrapper}>
      <form onSubmit={handleSubmit}>
        <label>
          <IoMdPersonAdd size="16" className={css.wrapper__icon} />
          Name
          <input
            className={css.dataInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </label>
        <label>
          <BsFillTelephoneFill size="16" className={css.wrapper__iconPhone} />
          Number
          <input
            className={css.dataInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className={css.btn}>
          <RiUserAddLine size="16" className={css.icon} />
          Add contact
        </button>
      </form>
    </div>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
