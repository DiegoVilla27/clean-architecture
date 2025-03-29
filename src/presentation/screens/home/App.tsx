import { UserEntity } from "../../../domain/entities";
import {
  RowUser,
  RowUserEmpty,
} from "./components";
import useUsers from "./hooks";

const App = () => {

  const {
    users,
    editFn,
    deleteFn,
  } = useUsers();

  return (
    <div className="list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Country</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            users && users.length > 0
              ?
              users.map((user: UserEntity) =>
                <RowUser
                  key={user.id}
                  user={user}
                  editFn={editFn}
                  deleteFn={deleteFn}
                />
              )
              : <RowUserEmpty />
          }
        </tbody>
      </table>
    </div>
  )
}

export default App;