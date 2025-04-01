import styles from "./styles.module.css";

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
