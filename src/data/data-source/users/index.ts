import ENVIRONMENTS from "@core/environments";
import { UserModel, UserModelResponse } from "@data/models/users";

/**
 * UserApiDataSource provides methods to interact with the user API.
 * It allows fetching, creating, updating, and deleting user data.
 */
export class UserApiDataSource {

  private url: string = `${ENVIRONMENTS.api}/users`;

  /**
   * Fetches all users from the specified URL and returns a UserModelResponse.
   *
   * @returns {Promise<UserModelResponse>} A promise that resolves to a UserModelResponse containing user data.
   * @throws {Error} If the fetch operation fails or the response cannot be parsed as JSON.
   */
  async getAllUsers(): Promise<UserModelResponse> {
    const response = await fetch(this.url, { method: 'GET' });
    const data = await response.json();
    return data;
  }

  /**
   * Sends a POST request to create a new user on the server.
   *
   * @param {UserModel} user - The UserModel object containing user details to be created.
   * @returns {Promise<UserModel>} A promise that resolves to the created UserModel object.
   * @throws {Error} If the fetch operation fails or the response cannot be parsed as JSON.
   */
  async createUser(user: UserModel): Promise<UserModel> {
    const response = await fetch(this.url, {
      body: JSON.stringify(user),
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    return data;
  }

  /**
   * Updates a user by sending a PUT request to the server with the user's data.
   *
   * @param {UserModel} user - The UserModel instance containing updated user information.
   * @returns {Promise<UserModel>} A promise that resolves to the updated UserModel instance.
   * @throws {Error} If the fetch operation fails or the response cannot be parsed as JSON.
   */
  async updateUser(user: UserModel): Promise<UserModel> {
    const response = await fetch(`${this.url}/${user.id}`, {
      body: JSON.stringify(user),
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    return data;
  }

  /**
   * Deletes a user by their ID.
   *
   * @param {number} id - The unique identifier of the user to be deleted.
   * @returns {Promise<UserModel>} A promise that resolves to the deleted user's data as a UserModel.
   * @throws {Error} If the fetch operation fails or the response cannot be parsed as JSON.
   */
  async deleteUser(id: string): Promise<UserModel> {
    const response = await fetch(`${this.url}/${id}`, { method: 'DELETE' });
    const data = await response.json();
    return data;
  }
}

export default UserApiDataSource;