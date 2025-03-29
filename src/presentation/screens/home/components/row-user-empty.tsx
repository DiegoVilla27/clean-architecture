import React from 'react';
/**
 * A functional component that renders a table row with a single cell
 * spanning four columns, displaying a message indicating that there
 * are no users available.
 */
export const RowUserEmpty: React.FC = () => (
  <tr>
    <td colSpan={4}>
      <p>No users.</p>
    </td>
  </tr>
);