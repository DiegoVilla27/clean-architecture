import styles from "./styles.module.css";

/**
 * A functional component that renders an empty table row with a message.
 * 
 * This component is used to display a message indicating that there are no users
 * available in the table. It spans across four columns and applies specific styles
 * to the table cell.
 */
export const RowEmpty = () => {
  return (
    <tr>
      <td
        className={styles.td}
        colSpan={4}
      >
        <p>No users.</p>
      </td>
    </tr>
  );
};
