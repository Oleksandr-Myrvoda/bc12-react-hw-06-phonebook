import { useSelector, useDispatch } from "react-redux";
import { filterContactAction } from "../../redux/actions";

import styles from "./Filter.module.css";

const Filter = () => {
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  const changeFilter = (e) => dispatch(filterContactAction(e.target.value));

  return (
    <label>
      <p className={styles.title}>Filter</p>
      <input type="text" value={filter} onChange={changeFilter} />
    </label>
  );
};

export default Filter;
