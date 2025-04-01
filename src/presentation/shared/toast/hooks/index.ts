import { useEffect, useState } from 'react';

/**
 * Custom hook to manage the visibility of a toast notification.
 *
 * @param {number} duration - The duration in milliseconds for which the toast should be visible.
 * @returns {Object} An object containing the visibility state of the toast.
 * @returns {boolean} visible - A boolean indicating whether the toast is currently visible.
 *
 * The hook uses a timer to automatically hide the toast after the specified duration.
 * It cleans up the timer on component unmount to prevent memory leaks.
 */
export const useToast = (duration: number) => {

  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, []);

  return {
    visible
  }
}
