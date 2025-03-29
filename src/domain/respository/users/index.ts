import { UserEntity, UserEntityResponse } from "../../entities/users";

/**
 * Abstract class representing a repository for managing user entities.
 * 
 * This class defines the contract for operations related to user entities,
 * including retrieving all users, updating a user, and deleting a user.
 * Implementations of this class should provide concrete logic for these operations.
 * 
 * Methods:
 * - getAllUsers(): Retrieves all user entities and returns a promise that resolves to a UserEntityResponse.
 * - updateUser(user: UserEntity): Updates the specified user entity and returns a promise that resolves to the updated UserEntity.
 * - deleteUser(id: number): Deletes the user entity with the specified ID and returns a promise that resolves to the deleted UserEntity.
 */
export abstract class UserRepository {

  abstract getAllUsers(): Promise<UserEntityResponse>;
  abstract updateUser(user: UserEntity): Promise<UserEntity>;
  abstract deleteUser(id: number): Promise<UserEntity>;
}

export default UserRepository;