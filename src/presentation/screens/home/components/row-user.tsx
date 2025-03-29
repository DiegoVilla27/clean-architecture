import { UserEntity } from "../../../../domain/entities";

/**
 * Renders a table row displaying user information with edit and delete options.
 *
 * @param {Object} props - The properties object.
 * @param {UserEntity} props.user - The user entity containing user details.
 * @param {Function} props.editFn - Function to handle editing the user, receives a UserEntity.
 * @param {Function} props.deleteFn - Function to handle deleting the user, receives the user's ID.
 * @returns {JSX.Element} A table row element with user details and action buttons.
 */
export const RowUser = ({
  user,
  editFn,
  deleteFn,
}: {
  user: UserEntity,
  editFn: (user: UserEntity) => void,
  deleteFn: (id: number) => void,
}) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.age}</td>
      <td>{user.country}</td>
      <td>
        <div>
          <button onClick={() => editFn(user)}>
            Edit
          </button>
          <button onClick={() => deleteFn(user.id)}>
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}