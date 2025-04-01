import styles from "./styles.module.css";

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
