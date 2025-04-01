import { UserEntity, UserEntityResponse } from "@domain/entities/users";
import UserRepository from "@domain/respository/users";

/**
 * UserUseCases class provides methods to interact with user data
 * through the UserRepository. It includes operations to retrieve,
 * create, update, and delete user entities.
 */
export class UserUseCases {

  constructor(private userRepository: UserRepository) { }

  async getAllUsers(): Promise<UserEntityResponse> {
    return await this.userRepository.getAllUsers();
  }
  async createUser(user: UserEntity): Promise<UserEntity> {
    return await this.userRepository.createUser(user);
  }

  async updateUser(user: UserEntity): Promise<UserEntity> {
    return await this.userRepository.updateUser(user);
  }

  async deleteUser(id: string): Promise<UserEntity> {
    return await this.userRepository.deleteUser(id);
  }
}

export default UserUseCases;