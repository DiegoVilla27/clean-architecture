import { UserEntity } from "@domain/entities/users";
import { TBody } from "./components/body";
import { THead } from "./components/head";
import styles from "./styles.module.css";

interface IProps {
  users: UserEntity[];
  editFn: (user: UserEntity) => void;
  deleteFn: (id: number) => void;
}

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
