import UserRepositoryImpl from "@data/respository/users";
import UserUseCases from "@domain/use-cases/users";

/**
 * Singleton class that provides access to user-related use cases.
 * 
 * This class ensures that only one instance of UserServicesSingleton exists,
 * providing a centralized point to access the UsersUseCase.
 * 
 * The UsersUseCase is initialized with a UserRepositoryImpl, which handles
 * data operations for user entities.
 * 
 * Methods:
 * - getInstance(): Returns the single instance of UserServicesSingleton.
 * - getUserUseCase(): Provides access to the UsersUseCase instance.
 */
class UserServicesSingleton {
  private static instance: UserServicesSingleton;
  private readonly userUseCase: UserUseCases;

  private constructor() {
    const userRepository = new UserRepositoryImpl();
    this.userUseCase = new UserUseCases(userRepository);
  }

  public static getInstance(): UserServicesSingleton {
    if (!UserServicesSingleton.instance) {
      UserServicesSingleton.instance = new UserServicesSingleton();
    }
    return UserServicesSingleton.instance;
  }

  public getUserUseCase(): UserUseCases {
    return this.userUseCase;
  }
}

export default UserServicesSingleton;