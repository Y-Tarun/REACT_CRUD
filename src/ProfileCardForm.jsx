import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function ProfileCard({ addEmployee }) {
  return (
    <Form
      className="addNewUserForm"
      onSubmit={(event) => {
        addEmployee(event);
        event.preventDefault();
      }}
    >
      <div className="card">
        <div className="inputFields">
          <Form.Control
            className="input"
            type="text"
            name="image"
            placeholder="Image Url"
          />
          <Form.Control
            className="input"
            type="text"
            name="first_name"
            placeholder="First Name"
          />
          <Form.Control
            className="input"
            type="text"
            name="last_name"
            placeholder="Last Name"
          />
          <div className="info">
            <Form.Control
              className="input"
              type="text"
              name="employeeID"
              placeholder="EmployeeID Last Digits"
            />
            <Form.Control
              className="input"
              type="email"
              name="email"
              placeholder="Email ID"
            />
          </div>
        </div>
        <Button type="submit" variant="primary">
          Add Employee
        </Button>
      </div>
    </Form>
  );
}
