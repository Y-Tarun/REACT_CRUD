import { TiDelete } from "react-icons/ti";
import { AiFillEdit } from "react-icons/ai";

export default function ProfileCard({
  employee,
  deleteEmployee,
  updateIconClicked
}) {
  return (
    <div className="card">
      <TiDelete
        className="icon"
        onClick={() => {
          deleteEmployee(employee.id);
        }}
      />
      <AiFillEdit
        className="edit-icon"
        onClick={() => updateIconClicked(employee.id)}
      />
      <img src={employee.avatar} alt={employee.name} />
      <h3>
        {employee.first_name} {employee.last_name}
      </h3>
      <div className="info">
        <h4>B170{employee.id}</h4>
        <h4>{employee.email}</h4>
      </div>
    </div>
  );
}
