import "./UsersList.css"
export const UsersList = ({ name, age }) => {
  return (
    <div className="list">
       <div className="users-li-wrapper">
      <ul className="ul">
        <li>{name} {age}</li>
      
      </ul>
    </div>
    </div>
   
  );
};
