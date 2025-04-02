/**
 * Enum representing different types of toast notifications.
 * 
 * @enum {string}
 * @property {string} INFO - Represents an informational toast.
 * @property {string} SUCCESS - Represents a success toast.
 * @property {string} WARNING - Represents a warning toast.
 * @property {string} ERROR - Represents an error toast.
 */
export enum ETypeToast {
  INFO = "info",
  SUCCESS = "success",
  WARNING = "warning",
  ERROR = "error"
}

/**
 * Represents a toast notification interface.
 * 
 * @property {ETypeToast} type - The type of the toast, indicating its purpose (e.g., info, success, warning, error).
 * @property {string} message - The message to be displayed in the toast.
 * @property {number} [duration] - Optional duration in milliseconds for which the toast should be visible.
 */
export interface IToast {
  type: ETypeToast;
  message: string;
  duration?: number;
}