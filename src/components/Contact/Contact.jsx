import { useDispatch } from "react-redux";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css";

export const Contact = ({ data: { id, name, number } }) => {
  const dispatch = useDispatch();

  // Silme işlemini başlatan fonksiyon
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.container}>
      <div className={css.infoWrapper}>
        <div className={css.infoItem}>
          <FaUser className={css.icon} />
          <p className={css.text}>{name}</p>
        </div>
        <div className={css.infoItem}>
          <FaPhoneAlt className={css.icon} />
          <p className={css.text}>{number}</p>
        </div>
      </div>
      <button className={css.btn} onClick={handleDelete} type="button">
        Delete
      </button>
    </div>
  );
};