import { useSelector, useDispatch } from "react-redux";
import { deleteContactAction } from "../../redux/actions";
import styles from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  const deleteContact = (id) => {
    dispatch(deleteContactAction(id));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contacts) =>
      contacts.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filteredContacts = getVisibleContacts();

  return (
    <ul>
      {filteredContacts.map(({ name, number, id }) => (
        <li key={id} className={styles.item}>
          <p>
            {name}: {number}
          </p>
          <button
            type="button"
            className={styles.button}
            onClick={() => deleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
