import { useToast } from "./hooks";
import styles from "./styles.module.css";

export enum ETypeToast {
  INFO = "info",
  SUCCESS = "success",
  WARNING = "warning",
  ERROR = "error"
}

export interface IToast {
  type: ETypeToast;
  message: string;
  duration?: number;
}

/**
 * Toast component that displays a temporary notification message.
 *
 * @param {IToast} props - The properties for the Toast component.
 * @param {ETypeToast} props.type - The type of the toast, which determines its styling.
 * @param {string} props.message - The message to be displayed in the toast.
 * @param {number} [props.duration=3000] - Optional duration in milliseconds for which the toast is visible.
 *
 * @returns {JSX.Element | null} A styled toast message or null if not visible.
 *
 * The toast automatically disappears after the specified duration.
 */
const Toast = ({ type, message, duration = 3000 }: IToast) => {
  const { visible } = useToast(duration);

  if (!visible) return null;

  return (
    <div className={styles.toastContainer}>
      <div className={[styles.toast, styles[type]].join(" ")}>{message}</div>
    </div>
  );
};

export default Toast;
