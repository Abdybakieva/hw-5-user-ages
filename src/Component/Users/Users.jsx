import { UsersList } from "../UsersLi/UsersList";
import "./Users.css";

export const Users = ({ users }) => {
  return (
    <div className="user">
      {users.map((elem) => {
        return <UsersList key={elem.name} name={elem.name} age={elem.age} />;
      })}
    </div>
  );
};
