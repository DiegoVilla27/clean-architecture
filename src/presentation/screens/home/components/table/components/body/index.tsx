import { UserEntity } from "../../../../../../../domain/entities/users";
import { RowEmpty } from "./components/row-empty";
import { RowUser } from "./components/row-user";
import styles from "./styles.module.css";

interface IProps {
  users: UserEntity[];
  editFn: (user: UserEntity) => void;
  deleteFn: (id: number) => void;
}

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
