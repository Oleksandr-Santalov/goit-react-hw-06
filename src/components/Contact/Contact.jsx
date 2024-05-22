import css from "./Contact.module.css";
import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ data: { name, number, id } }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <div>
        <p>
          <IoPerson className={css.phoneIcon} />
          {name}
        </p>
        <p className={css.contText}>
          <FaPhone className={css.phoneIcon} />
          {number}
        </p>
      </div>

      <button
        className={css.btn}
        type="button"
        onClick={() => dispatch(deleteContact({ id }))}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
