import { UserEntity, UserEntityResponse } from "@domain/entities/users";

/**
 * Abstract class representing a repository for managing user entities.
 * Provides methods to perform CRUD operations on user data.
 */
export abstract class UserRepository {

  abstract getAllUsers(): Promise<UserEntityResponse>;
  abstract createUser(user: UserEntity): Promise<UserEntity>;
  abstract updateUser(user: UserEntity): Promise<UserEntity>;
  abstract deleteUser(id: string): Promise<UserEntity>;
}

export default UserRepository;