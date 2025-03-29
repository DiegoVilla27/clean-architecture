/**
 * Abstract class representing a base repository for performing CRUD operations.
 * 
 * @template T - The type of the entity managed by the repository.
 * 
 * @param {string} baseUrl - The base URL for the API endpoints.
 * 
 * @method getAll - Fetches all entities from the API.
 * @returns {Promise<T[]>} - A promise that resolves to an array of entities.
 * 
 * @method getById - Fetches a single entity by its ID.
 * @param {number} id - The ID of the entity to fetch.
 * @returns {Promise<T>} - A promise that resolves to the entity.
 * 
 * @method create - Creates a new entity.
 * @param {T} data - The data of the entity to create.
 * @returns {Promise<T>} - A promise that resolves to the created entity.
 * 
 * @method update - Updates an existing entity by its ID.
 * @param {number} id - The ID of the entity to update.
 * @param {T} data - The updated data of the entity.
 * @returns {Promise<T>} - A promise that resolves to the updated entity.
 * 
 * @method delete - Deletes an entity by its ID.
 * @param {number} id - The ID of the entity to delete.
 * @returns {Promise<T>} - A promise that resolves to the deleted entity.
 * 
 * @throws {Error} - Throws an error if the HTTP response is not ok.
 */
export abstract class BaseRepository<T> {
  constructor(private readonly baseUrl: string) {}

  private async request(endpoint: string, options: RequestInit): Promise<any> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }

  getAll(): Promise<T[]> {
    return this.request('', { method: 'GET' });
  }

  getById(id: number): Promise<T> {
    return this.request(`/${id}`, { method: 'GET' });
  }

  create(data: T): Promise<T> {
    return this.request('', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  }

  update(id: number, data: T): Promise<T> {
    return this.request(`/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  }

  delete(id: number): Promise<T> {
    return this.request(`/${id}`, { method: 'DELETE' });
  }
}

export default BaseRepository;