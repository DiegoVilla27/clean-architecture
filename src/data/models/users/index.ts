import { UserEntity, UserEntityResponse } from "@domain/entities/users";

/**
 * Represents a user model with properties for identification and address.
 * Provides a method to convert the user model to a UserEntity.
 *
 * @property {string} id - The unique identifier for the user.
 * @property {string} firstName - The first name of the user.
 * @property {number} age - The age of the user.
 * @property {Object} address - The address details of the user.
 * @property {string} address.country - The country of the user's address.
 *
 * @method toUserEntity
 * Converts the UserModel instance to a UserEntity instance.
 *
 * @param {UserModel} user - The user model to be converted.
 * @returns {UserEntity} The converted UserEntity instance.
 */
export class UserModel {
  id: string;
  firstName: string;
  age: number;
  address: {
    country: string;
  };

  constructor(id: string, firstName: string, age: number, address: { country: string }) {
    this.id = id;
    this.firstName = firstName;
    this.age = age;
    this.address = address;
  }

  public toUserEntity(): UserEntity {
    return new UserEntity(
      this.id,
      this.firstName ?? '',
      this.age ?? 0,
      this.address.country ?? ''
    );
  }
}

/**
 * Represents a paginated response for user models.
 * 
 * @property {number} limit - The maximum number of users to return.
 * @property {number} skip - The number of users to skip before starting to collect the result set.
 * @property {number} total - The total number of users available.
 * @property {UserModel[]} users - The list of user models in the current response.
 * 
 * @constructor
 * @param {number} limit - The maximum number of users to return.
 * @param {number} skip - The number of users to skip before starting to collect the result set.
 * @param {number} total - The total number of users available.
 * @param {UserModel[]} users - The list of user models in the current response.
 * 
 * @method toUserEntityResponse
 * Converts the current UserModelResponse to a UserEntityResponse.
 * 
 * @param {UserModelResponse} userModelResponse - The user model response to convert.
 * @returns {UserEntityResponse} The converted user entity response.
 */
export class UserModelResponse {
  limit: number;
  skip: number;
  total: number;
  users: UserModel[];

  constructor(limit: number, skip: number, total: number, users: UserModel[]) {
    this.limit = limit;
    this.skip = skip;
    this.total = total;
    this.users = users;
  }

  public toUserEntityResponse(): UserEntityResponse {
    return new UserEntityResponse(
      this.limit,
      this.skip,
      this.total,
      this.users.map((user) =>
        new UserEntity(
          user.id,
          user.firstName ?? '',
          user.age ?? 0,
          user.address.country ?? ''
        )
      ),
    );
  }
}