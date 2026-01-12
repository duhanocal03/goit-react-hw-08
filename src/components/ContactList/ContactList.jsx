import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = () => {
  // Filtrelenmiş kişileri selector aracılığıyla alıyoruz
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {filteredContacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;