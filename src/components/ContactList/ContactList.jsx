import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

import css from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const value = useSelector(selectNameFilter);

  const visibleContact = contacts.filter((cont) =>
    cont.name.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <ul className={css.listBox}>
      {visibleContact.map((element) => (
        <li className={css.list} key={element.id}>
          <Contact data={element} />
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
