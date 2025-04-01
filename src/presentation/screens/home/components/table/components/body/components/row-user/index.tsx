import { UserEntity } from "@domain/entities/users";
import styles from "./styles.module.css";

export const RowUser = ({
  user,
  editFn,
  deleteFn
}: {
  user: UserEntity;
  editFn: (user: UserEntity) => void;
  deleteFn: (id: number) => void;
}) => {
  return (
    <tr>
      <td className={styles.td}>{user.name}</td>
      <td className={styles.td}>{user.age}</td>
      <td className={styles.td}>{user.country}</td>
      <td className={styles.td}>
        <div className={styles.btnBox}>
          <button
            className={[styles.btn, styles.btnEdit].join(" ")}
            onClick={() => editFn(user)}
          >
            Edit
          </button>
          <button
            className={[styles.btn, styles.btnDelete].join(" ")}
            onClick={() => deleteFn(user.id)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};
