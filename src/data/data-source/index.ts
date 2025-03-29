import ENVIRONMENTS from "../../config/environments";
import { UserModel, UserModelResponse } from "../models";

/**
 * UserApiDataSource provides methods to interact with the user API.
 * 
 * Methods:
 * - getAllUsers: Fetches all users from the API and returns a UserModelResponse.
 * - updateUser: Updates a user on the API and returns the updated UserModel.
 * - deleteUser: Deletes a user from the API by ID and returns the deleted UserModel.
 * 
 * Utilizes the ENVIRONMENTS configuration for API endpoint management.
 */
export class UserApiDataSource {
  
  async getAllUsers(): Promise<UserModelResponse> {
    const response = await fetch(ENVIRONMENTS.api, { method: 'GET' });
    const data = await response.json();
    return data;
  }

  async updateUser(user: UserModel): Promise<UserModel> {
    const response = await fetch(`${ENVIRONMENTS.api}/${user.id}`, {
      body: JSON.stringify(user),
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    return data;
  }

  async deleteUser(id: number): Promise<UserModel> {
    const response = await fetch(`${ENVIRONMENTS.api}/${id}`, { method: 'DELETE' });
    const data = await response.json();
    return data;
  }
}

export default UserApiDataSource;