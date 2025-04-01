/**
 * Represents a user entity with basic personal information.
 *
 * @property {string} id - The unique identifier for the user.
 * @property {string} name - The name of the user.
 * @property {number} age - The age of the user.
 * @property {string} country - The country of residence of the user.
 *
 * @constructor
 * @param {string} id - Initializes the user's unique identifier.
 * @param {string} name - Initializes the user's name.
 * @param {number} age - Initializes the user's age.
 * @param {string} country - Initializes the user's country of residence.
 */
export class UserEntity {
  id: string;
  name: string;
  age: number;
  country: string;

  constructor(id: string, name: string, age: number, country: string) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.country = country;
  }
}

/**
 * Represents a response containing a list of user entities.
 *
 * @property {number} limit - The maximum number of users to return.
 * @property {number} skip - The number of users to skip before starting to collect the result set.
 * @property {number} total - The total number of users available.
 * @property {UserEntity[]} users - An array of user entities.
 *
 * @constructor
 * @param {number} limit - The maximum number of users to return.
 * @param {number} skip - The number of users to skip before starting to collect the result set.
 * @param {number} total - The total number of users available.
 * @param {UserEntity[]} users - An array of user entities.
 */
export class UserEntityResponse {
  limit: number;
  skip: number;
  total: number;
  users: UserEntity[];

  constructor(limit: number, skip: number, total: number, users: UserEntity[]) {
    this.limit = limit;
    this.skip = skip;
    this.total = total;
    this.users = users;
  }
}