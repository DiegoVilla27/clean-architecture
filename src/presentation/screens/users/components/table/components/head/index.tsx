import styles from "./styles.module.css";

/**
 * Renders the table header component for the users table.
 * 
 * This component returns a <thead> element containing a single row
 * with four columns: Name, Age, Country, and Actions. Each column
 * header is styled using the CSS classes defined in the imported
 * styles module.
 */
export const THead = () => {
  return (
    <thead className={styles.thead}>
      <tr>
        <th className={styles.th}>Name</th>
        <th className={styles.th}>Age</th>
        <th className={styles.th}>Country</th>
        <th className={styles.th}>Actions</th>
      </tr>
    </thead>
  );
};
