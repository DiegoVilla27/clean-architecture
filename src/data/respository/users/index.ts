import { UserEntity, UserEntityResponse } from "../../../domain/entities/users";
import UserRepository from "../../../domain/respository/users";
import UserApiDataSource from "../../data-source/users";
import { UserModel, UserModelResponse } from "../../models/users";

/**
 * Implementation of the UserRepository interface using a data source.
 *
 * This class provides methods to interact with the user data source,
 * including retrieving, updating, and deleting user information.
 * It converts between UserEntity and UserModel representations as needed.
 */
export class UserRepositoryImpl extends UserRepository {
  private dataSource: UserApiDataSource;

  constructor() {
    super();
    this.dataSource = new UserApiDataSource();
  }

  /**
   * Retrieves all users from the data source.
   *
   * @returns A promise that resolves to a {@link UserEntityResponse} containing the list of users.
   */
  async getAllUsers(): Promise<UserEntityResponse> {
    const res = await this.dataSource.getAllUsers();
    const userEntityResponse = new UserModelResponse(
      res.limit,
      res.skip,
      res.total,
      res.users
    );
    return userEntityResponse.toUserEntityResponse(userEntityResponse);
  };

  /**
   * Updates a user in the data source.
   *
   * @param user - The {@link UserEntity} to be updated.
   * @returns A promise that resolves to the updated {@link UserEntity}.
   *
   * @remarks
   * This function takes a {@link UserEntity} as input, converts it to a {@link UserModel},
   * sends the updated user data to the data source, and then converts the response back to a {@link UserEntity}.
   *
   * @throws Will throw an error if the data source operation fails.
   */
  async updateUser(user: UserEntity): Promise<UserEntity> {
    const userModel = new UserModel(
      user.id,
      user.name,
      user.age,
      { country: user.country }
    );
    const res = await this.dataSource.updateUser(userModel);
    const userUpdated = new UserModel(
      res.id,
      res.firstName,
      res.age,
      { country: res.address.country }
    );
    return userUpdated.toUserEntity(userUpdated);
  }

  /**
   * Deletes a user from the data source.
   *
   * @param id - The unique identifier of the user to be deleted.
   * @returns A promise that resolves to the deleted {@link UserEntity}.
   *
   * @remarks
   * This function sends a request to the data source to delete the user with the specified `id`.
   * It then converts the response to a {@link UserEntity} and returns it.
   *
   * @throws Will throw an error if the data source operation fails.
   */
  async deleteUser(id: number): Promise<UserEntity> {
    const res = await this.dataSource.deleteUser(id);
    const userDeleted = new UserModel(
      res.id,
      res.firstName,
      res.age,
      { country: res.address.country }
    );
    return userDeleted.toUserEntity(userDeleted);
  }
}

export default UserRepositoryImpl;