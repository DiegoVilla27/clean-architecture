import { UserEntity } from "@domain/entities/users";
import { generateAge, generateCountry } from "@presentation/shared/utils";
import styles from "./styles.module.css";

/**
 * Renders a table row displaying user information with edit and delete functionality.
 *
 * @param {Object} props - The properties object.
 * @param {UserEntity} props.user - The user entity containing user details.
 * @param {Function} props.editFn - Function to handle editing the user, receives a UserEntity as an argument.
 * @param {Function} props.deleteFn - Function to handle deleting the user, receives the user ID as an argument.
 *
 * @returns {JSX.Element} A table row element with user details and action buttons.
 */
export const RowUser = ({
  user,
  editFn,
  deleteFn
}: {
  user: UserEntity;
  editFn: (user: UserEntity) => void;
  deleteFn: (id: string) => void;
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
            onClick={() =>
              editFn(
                new UserEntity(
                  user.id,
                  user.name,
                  generateAge(),
                  generateCountry()
                )
              )
            }
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
