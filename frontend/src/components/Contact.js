import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import axios from "axios";

function Contact() {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    phone: "",
    note: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputValue((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const { name, email, phone, note } = inputValue;

    const registerDetails = {
      name,
      email,
      phone,
      note,
    };

    axios
      .post("http://localhost:8080/api/register", registerDetails)
      .then((res) => {
        if (res.data) {
          alert("Data added successfuly!");
          window.location.replace("/");
        }
      })
      .catch((err) => {
        alert(err?.response?.data || err?.response?.data?.message);
        console.error(err?.response?.data, err?.response?.data?.message);
      });
  };

  return (
    <Container style={{ marginTop: 20 }}>
      <Form>
        <Form.Group
          controlId="form.Name"
          className="b-3 col-lg-6 col-md-6 col-12"
          style={{ margin: 15 }}
        >
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            value={inputValue.name}
            onChange={onChangeHandler}
          />
        </Form.Group>
        <Form.Group
          controlId="form.Email"
          className="b-3 col-lg-6 col-md-6 col-12"
          style={{ margin: 15 }}
        >
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            name="email"
            value={inputValue.email}
            onChange={onChangeHandler}
          />
        </Form.Group>
        <Form.Group
          controlId="form.Phone"
          className="b-3 col-lg-6 col-md-6 col-12"
          style={{ margin: 15 }}
        >
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="9999999999"
            name="phone"
            value={inputValue.phone}
            onChange={onChangeHandler}
          />
        </Form.Group>
        <Form.Group
          controlId="form.Textarea"
          className="b-3 col-lg-6 col-md-6 col-12"
          style={{ margin: 15 }}
        >
          <Form.Label>Note</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Add your description"
            name="note"
            value={inputValue.note}
            onChange={onChangeHandler}
          />
        </Form.Group>
        <Button
          type="submit"
          style={{ margin: 15 }}
          onClick={(e) => onSubmitHandler(e)}
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Contact;
