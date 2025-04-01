import { UserEntity } from "@domain/entities/users";
import { TBody } from "./components/body";
import { THead } from "./components/head";
import styles from "./styles.module.css";

interface IProps {
  users: UserEntity[];
  editFn: (user: UserEntity) => void;
  deleteFn: (id: string) => void;
}

/**
 * Renders a table component displaying a list of users.
 *
 * @param {IProps} props - The properties for the Table component.
 * @param {UserEntity[]} props.users - An array of user entities to display in the table.
 * @param {(user: UserEntity) => void} props.editFn - A function to handle editing a user.
 * @param {(id: string) => void} props.deleteFn - A function to handle deleting a user by ID.
 * @returns {JSX.Element} A table element with a header and body populated with user data.
 */
export const Table = ({ users, editFn, deleteFn }: IProps) => {
  return (
    <table className={styles.table}>
      <THead />
      <TBody
        users={users}
        editFn={editFn}
        deleteFn={deleteFn}
      />
    </table>
  );
};
