import { UserEntity } from "@domain/entities/users";
import {
  generateAge,
  generateCountry,
  generateName
} from "@presentation/shared/utils";
import styles from "./styles.module.css";

interface IProps {
  createFn: (user: UserEntity) => void;
}

/**
 * Component that renders a button to create a new user.
 * 
 * @param {Object} props - Component properties.
 * @param {Function} props.createFn - Function to create a new user, 
 * which is invoked with a new UserEntity instance containing 
 * generated name, age, and country.
 * 
 * @returns {JSX.Element} A button element that triggers user creation.
 */
export const CreateUser = ({ createFn }: IProps) => {
  return (
    <button
      className={styles.btn}
      onClick={() =>
        createFn(
          new UserEntity("", generateName(), generateAge(), generateCountry())
        )
      }
    >
      Create User
    </button>
  );
};
