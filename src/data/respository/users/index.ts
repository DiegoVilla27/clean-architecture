import UserApiDataSource from "@data/data-source/users";
import { UserModel, UserModelResponse } from "@data/models/users";
import { UserEntity, UserEntityResponse } from "@domain/entities/users";
import UserRepository from "@domain/respository/users";

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
   * Retrieves all users from the data source and converts the response
   * into a UserEntityResponse object.
   *
   * @returns {Promise<UserEntityResponse>} A promise that resolves to a UserEntityResponse
   * containing the user data.
   */
  async getAllUsers(): Promise<UserEntityResponse> {
    const res = await this.dataSource.getAllUsers();
    const userEntityResponse = new UserModelResponse(
      res.limit,
      res.skip,
      res.total,
      res.users
    );
    return userEntityResponse.toUserEntityResponse();
  };

  /**
   * Creates a new user by converting a UserEntity to a UserModel and
   * delegating the creation to the data source. Returns the created
   * user as a UserEntity.
   *
   * @param {UserEntity} user - The UserEntity object containing user details.
   * 
   * @returns {Promise<UserEntity>} A promise that resolves to the created UserEntity.
   */
  async createUser(user: UserEntity): Promise<UserEntity> {
    const res = await this.dataSource.createUser(new UserModel(
      user.id,
      user.name,
      user.age,
      { country: user.country }
    ));

    const userModel = new UserModel(
      res.id,
      res.firstName,
      res.age,
      { country: res.address.country }
    );

    return userModel.toUserEntity();
  }

  /**
   * Updates an existing user by converting a UserEntity to a UserModel and
   * delegating the update to the data source. Returns the updated
   * user as a UserEntity.
   *
   * @param {UserEntity} user - The UserEntity object containing the updated user details.
   * The user object must have an existing id.
   *
   * @returns {Promise<UserEntity>} A promise that resolves to the updated UserEntity.
   * The returned UserEntity will have the same id as the input user.
   */
  async updateUser(user: UserEntity): Promise<UserEntity> {
    const res = await this.dataSource.updateUser(new UserModel(
      user.id,
      user.name,
      user.age,
      { country: user.country }
    ));

    const userModel = new UserModel(
      res.id,
      res.firstName,
      res.age,
      { country: res.address.country }
    );

    return userModel.toUserEntity();
  }

  async deleteUser(id: string): Promise<UserEntity> {
    const res = await this.dataSource.deleteUser(id);

    const userModel = new UserModel(
      res.id,
      res.firstName,
      res.age,
      { country: res.address.country }
    );

    return userModel.toUserEntity();
  }
}

export default UserRepositoryImpl;