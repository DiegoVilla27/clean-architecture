import { useEffect, useState } from 'react';
import userUseCases from '../../../../core/services';
import { UserEntity } from '../../../../domain/entities';

/**
 * Custom hook to manage user data operations.
 *
 * This hook provides functionalities to fetch, edit, and delete users.
 * It initializes with an empty list of users and updates the list
 * whenever a user is edited or deleted.
 *
 * @returns {Object} An object containing:
 * - `users`: An array of `UserEntity` representing the current list of users.
 * - `editFn`: A function to edit a user, which takes a `UserEntity` as a parameter.
 * - `deleteFn`: A function to delete a user, which takes a user ID as a parameter.
 */
export const useUsers = () => {

  const [users, setUsers] = useState<UserEntity[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const allUsers = await userUseCases.getAllUsers();
    setUsers(allUsers.users);
  };

  const editFn = async (user: UserEntity) => {
    await userUseCases.updateUser(user);
    fetchUsers();
  }

  const deleteFn = async (id: number) => {
    await userUseCases.deleteUser(id);
    fetchUsers();
  }

  return {
    users,
    editFn,
    deleteFn,
  }
}

export default useUsers;