import "./styles.css";
import React, { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";
import ProfileCardForm from "./ProfileCardForm";
import UpdateProfileCard from "./UpdateProfileCard";
import Header from "./Header";

export default function App() {
  let [employeeList, setEmployeeList] = useState([]);
  let [isUpdateButton, setIsUpdateButton] = useState(false);
  let [details, setDetails] = useState({});

  const api_url_1 = "https://reqres.in/api/users?page=1";
  const api_url_2 = "https://reqres.in/api/users?page=2";

  const fetchEmployeeDetails = async (url) => {
    let response = await fetch(url);
    let data = await response.json();
    let employees = data.data;
    setEmployeeList((previousValues) => {
      return previousValues.concat(employees);
    });
  };

  let deleteEmployee = (id) => {
    let newList = employeeList.filter((employee) => employee.id !== id);
    setEmployeeList(newList);
  };

  let addEmployee = (event) => {
    let checkID = Number(event.target.employeeID.value);
    if (!(employeeList.findIndex((emp) => emp.id === checkID) < 0)) {
      alert("ID already in use");
    } else {
      let employee = {
        id: Number(event.target.employeeID.value),
        email: event.target.email.value,
        first_name: event.target.first_name.value,
        last_name: event.target.last_name.value,
        avatar: event.target.image.value
      };
      let newList = [...employeeList, employee];
      console.log(newList);
      setEmployeeList(newList);
      event.target.employeeID.value = "";
      event.target.email.value = "";
      event.target.first_name.value = "";
      event.target.last_name.value = "";
      event.target.image.value = "";
    }
  };

  let updateIconClicked = (id) => {
    setIsUpdateButton(true);
    setDetails(employeeList.filter((employee) => employee.id === id)[0]);

    // console.log(details);
  };
  let updateEmployee = (event) => {
    let employee = {
      id: Number(event.target.employeeID.placeholder),
      email: event.target.email.value,
      first_name: event.target.first_name.value,
      last_name: event.target.last_name.value,
      avatar: event.target.image.value
    };
    let newEmployeeList = [...employeeList];
    newEmployeeList[
      newEmployeeList.findIndex((emp) => emp.id === employee.id)
    ] = employee;
    setEmployeeList(newEmployeeList);

    setIsUpdateButton(false);
  };

  useEffect(() => {
    fetchEmployeeDetails(api_url_1);
    fetchEmployeeDetails(api_url_2);
  }, []);

  // console.log(employeeList);
  return (
    <div className="App">
      <Header />
      {employeeList.map((employee) => (
        <ProfileCard
          key={employee.id}
          employee={employee}
          deleteEmployee={deleteEmployee}
          updateIconClicked={updateIconClicked}
        />
      ))}
      {isUpdateButton && (
        <>
          <div
            className="overlay-styles"
            onClick={() => setIsUpdateButton(false)}
          ></div>
          <UpdateProfileCard
            updateEmployee={updateEmployee}
            employeeDetails={details}
          />
        </>
      )}
      <ProfileCardForm addEmployee={addEmployee} />
    </div>
  );
}
