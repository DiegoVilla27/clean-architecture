import { UserEntity, UserEntityResponse } from "../../entities/users";
import UserRepository from "../../respository/users";

/**
 * UserUseCases class provides methods to interact with user data
 * through the UserRepository. It includes functionalities to:
 * 
 * - Retrieve all users.
 * - Update an existing user's information.
 * - Delete a user by their ID.
 * 
 * The class relies on the UserRepository to perform these operations.
 */
export class UserUseCases {

  constructor(private userRepository: UserRepository) { }

  // Get all users
  async getAllUsers(): Promise<UserEntityResponse> {
    return await this.userRepository.getAllUsers();
  }

  // Update an existing user
  async updateUser(user: UserEntity): Promise<UserEntity> {
    return await this.userRepository.updateUser(user);
  }

  // Delete a user by ID
  async deleteUser(id: number): Promise<UserEntity> {
    return await this.userRepository.deleteUser(id);
  }
}

export default UserUseCases;