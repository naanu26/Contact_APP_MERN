import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

function Home() {
  const [userData, setUserData] = useState([]);

  const getUserDetails = () => {
    axios
      .get("http://localhost:8080/api")
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => console.error(err));
  };

  const redirectToRegister = () => {
    window.location.assign("/register");
  };

  const deleteUser = (id) => {
    if (id) {
      axios
        .delete(`http://localhost:8080/api/user/${id}`)
        .then((res) => {
          if (res.data) {
            alert("Data Deleted Successfulyy!");
            const newData = userData.filter((user) => user._id !== id);
            setUserData(newData);
          }
        })
        .catch((err) => console.error(err));
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <Table striped bordered hover style={{ marginTop: "30px" }}>
      <thead>
        <Button
          variant="primary"
          style={{ display: "flex", marginBottom: "10px" }}
          onClick={redirectToRegister} // we can also use react-router-dom
        >
          New Contact
        </Button>{" "}
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Note</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {userData.length === 0 ? (
          <div>
            <h3>No Users to display!</h3>
          </div>
        ) : (
          userData?.map((user, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.note}</td>
                <td
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                  }}
                >
                  <NavLink to={`/user/${user._id}`}>
                    <Button variant="warning">Edit</Button>{" "}
                  </NavLink>
                  <NavLink onClick={() => deleteUser(user._id)}>
                    <Button variant="danger">Delete</Button>{" "}
                  </NavLink>
                </td>
              </tr>
            );
          })
        )}
      </tbody>
    </Table>
  );
}

export default Home;
