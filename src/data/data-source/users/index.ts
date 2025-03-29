import { UserModel, UserModelResponse } from "../../models/users";

/**
 * UserApiDataSource provides methods to interact with a user API.
 * 
 * @property {string} url - The base URL of the user API.
 * 
 * @constructor
 * @param {string} url - Initializes the data source with the API's base URL.
 * 
 * @method getAllUsers
 * @returns {Promise<UserModelResponse>} - Fetches all users from the API.
 * 
 * @method updateUser
 * @param {UserModel} user - The user data to update.
 * @returns {Promise<UserModel>} - Updates a user and returns the updated user data.
 * 
 * @method deleteUser
 * @param {number} id - The ID of the user to delete.
 * @returns {Promise<UserModel>} - Deletes a user and returns the deleted user data.
 */
export class UserApiDataSource {

  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  async getAllUsers(): Promise<UserModelResponse> {
    const response = await fetch(this.url, { method: 'GET' });
    const data = await response.json();
    return data;
  }

  async updateUser(user: UserModel): Promise<UserModel> {
    const response = await fetch(`${this.url}/${user.id}`, {
      body: JSON.stringify(user),
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    return data;
  }

  async deleteUser(id: number): Promise<UserModel> {
    const response = await fetch(`${this.url}/${id}`, { method: 'DELETE' });
    const data = await response.json();
    return data;
  }
}

export default UserApiDataSource;