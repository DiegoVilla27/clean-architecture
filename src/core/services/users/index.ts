/**
 * @fileoverview Singleton instance of UserUseCases to ensure a single source of truth
 * for user-related operations across the application.
 * 
 * This module initializes and exports a single instance of UserUseCases, 
 * preventing multiple instantiations and ensuring consistent data handling.
 */
import UserRepositoryImpl from "../../../data/respository/users";
import UserUseCases from "../../../domain/use-cases/users";

/**
 * Instantiate the UserRepository implementation.
 * This layer is responsible for handling data operations and interacting 
 * with the API or database.
 */
const userRepository = new UserRepositoryImpl();

/**
 * Instantiate UserUseCases using the UserRepository implementation.
 * This ensures that all business logic related to users is handled 
 * through a single, reusable instance.
 */
const userUseCases = new UserUseCases(userRepository);

/**
 * Export a singleton instance of UserUseCases to be used across 
 * the application, ensuring a single point of access for user-related 
 * operations and reducing unnecessary re-instantiations.
 */
export default userUseCases;
