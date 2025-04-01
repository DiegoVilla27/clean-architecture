import { Table } from "./components/table";
import useUsers from "./hooks";
import styles from "./styles.module.css";

const App = () => {
  const { users, editFn, deleteFn } = useUsers();

  return (
    <div className={styles.list}>
      <Table
        users={users}
        editFn={editFn}
        deleteFn={deleteFn}
      />
    </div>
  );
};

export default App;
