import { useSelector, useDispatch } from 'react-redux';
import { FcSearch } from 'react-icons/fc';
import css from './Filter.module.css';
import { filterContacts, getFilter } from 'redux/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  const changeFilter = e => {
    dispatch(filterContacts(e.currentTarget.value));
  };
  return (
    <label className={css.filterTitle}>
      <FcSearch size="18" className={css.icon} /> Find contacts by name
      <input
        className={css.filterInput}
        type="text"
        value={value}
        onChange={changeFilter}
        placeholder="search"
      />
    </label>
  );
};

export default Filter;
