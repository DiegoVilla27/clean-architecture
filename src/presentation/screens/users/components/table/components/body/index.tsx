import { UserEntity } from "../../../../../../../domain/entities/users";
import { RowEmpty } from "./components/row-empty";
import { RowUser } from "./components/row-user";
import styles from "./styles.module.css";

interface IProps {
  users: UserEntity[];
  editFn: (user: UserEntity) => void;
  deleteFn: (id: string) => void;
}

/**
 * Renders the table body for a list of users.
 *
 * @param {IProps} props - The properties for the component.
 * @param {UserEntity[]} props.users - An array of user entities to display.
 * @param {(user: UserEntity) => void} props.editFn - Function to edit a user.
 * @param {(id: string) => void} props.deleteFn - Function to delete a user by ID.
 * @returns {JSX.Element} The rendered table body element.
 */
export const TBody = ({ users, editFn, deleteFn }: IProps) => {
  return (
    <tbody className={styles.tbody}>
      {users && users.length > 0 ? (
        users.map((user: UserEntity) => (
          <RowUser
            key={user.id}
            user={user}
            editFn={editFn}
            deleteFn={deleteFn}
          />
        ))
      ) : (
        <RowEmpty />
      )}
    </tbody>
  );
};
