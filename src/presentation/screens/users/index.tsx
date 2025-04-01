import Toast from "@presentation/shared/toast";
import { CreateUser } from "./components/create";
import { Table } from "./components/table";
import useUsers from "./hooks";
import styles from "./styles.module.css";

/**
 * App component that manages the user interface for displaying and managing users.
 * Utilizes the useUsers hook to handle user data and operations such as creating,
 * editing, and deleting users. Displays a list of users in a table and provides
 * a button to create new users. Shows toast notifications for user actions.
 */
const App = () => {
  const { toast, users, createFn, editFn, deleteFn } = useUsers();

  return (
    <>
      <div className={styles.list}>
        <CreateUser createFn={createFn} />
        <Table
          users={users}
          editFn={editFn}
          deleteFn={deleteFn}
        />
      </div>
      {toast ? <Toast {...toast} /> : null}
    </>
  );
};

export default App;
