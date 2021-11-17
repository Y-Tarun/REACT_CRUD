import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function UpdateProfileCard({ updateEmployee, employeeDetails }) {
  let [image, setImage] = useState(employeeDetails.avatar);
  let [firstName, setFirstName] = useState(employeeDetails.first_name);
  let [lastName, setLastName] = useState(employeeDetails.last_name);
  let [id] = useState(employeeDetails.id);
  let [email, setEmail] = useState(employeeDetails.email);

  function imageURLChange(event) {
    setImage(event.target.value);
  }

  return (
    <>
      <div className="update-card">
        <Form
          className="addNewUserForm"
          onSubmit={(event) => {
            event.preventDefault();
            updateEmployee(event);
          }}
        >
          <Form.Label> Image URL </Form.Label>
          <Form.Control
            className="input-update"
            type="text"
            name="image"
            id="image"
            value={image}
            onChange={(event) => imageURLChange(event)}
          />
          <Form.Label> First name </Form.Label>
          <Form.Control
            className="input-update"
            type="text"
            name="first_name"
            id="first_name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
          <Form.Label> Last Name </Form.Label>
          <Form.Control
            className="input-update"
            type="text"
            name="last_name"
            id="last_name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />

          <Form.Label> Employee ID </Form.Label>
          <Form.Control
            className="input-update"
            type="text"
            name="employeeID"
            id="employeeID"
            placeholder={id}
            readOnly
          />
          <Form.Label> Email ID </Form.Label>
          <Form.Control
            className="input-update"
            type="email"
            name="email"
            id="email"
            // placeholder="Email ID"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <Button
            className="updateButton"
            type="submit"
            variant="outline-success"
          >
            Update
          </Button>
        </Form>
      </div>
    </>
  );
}
