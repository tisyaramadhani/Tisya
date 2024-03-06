import React, { useState } from "react";
import "./../../App.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useMutation } from "react-query";
import { signup } from "../../api/UserApi";
import { toast } from "react-toastify";
import NavBar from "../Navbarcomp";

const Register = () => {
  const [nik, setNik] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setLoading(true);
      signupPost();
    }
  };

  const { mutate: signupPost } = useMutation(
    () =>
      signup({
        nik: nik,
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
      }),
    {
      onSuccess: async (data) => {
        setNik("");
        setName("");
        setEmail("");
        setPassword("");
        setConfPassword("");
        setLoading(false);
        toast.success(data.message, {
          autoClose: 2000,
        });
      },
      onError: (err) => {
        setLoading(false);
        toast.error(err.response.data.message, {
          autoClose: 1500,
        });
      },
    }
  );

  return (
    <>
      <NavBar></NavBar>
      <div
        className="register"
        style={{ background: "#FFFFFF", height: "110vh" }}
      >
        <h1
          className="text-center "
          style={{
            fontSize: "18pt",
            fontFamily: "Roboto",
            fontWeight: "bold",
            marginTop: "150px",
          }}
        >
          ACCOUNT REGISTER
        </h1>
        <Container className="container-register">
          <Card className="wrap-register my-regis">
            <div className="ps-5 pt-5 pe-5 pb-5">
              <Row>
                <Col md>
                  <div className="mb-3">
                    <label style={{ fontFamily: "Roboto" }}>NIK</label>
                    <div
                      className="fst-italic"
                      style={{ fontFamily: "Roboto" }}
                    >
                      (Population Identification Number)
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter number NIK"
                      value={nik}
                      onChange={(e) => setNik(e.target.value)}
                      onKeyPress={handleKeyPress}
                    />
                  </div>
                  <div className="mb-3">
                    <label style={{ fontFamily: "Roboto" }}>Full Name</label>
                    <div
                      className="fst-italic"
                      style={{ fontFamily: "Roboto" }}
                    >
                      (Name as per Identification Card)
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      onKeyPress={handleKeyPress}
                    />
                  </div>
                  <div className="mb-3">
                    <label style={{ fontFamily: "Roboto" }}>
                      Email Address
                    </label>
                    <div
                      className="fst-italic "
                      style={{ fontFamily: "Roboto" }}
                    >
                      (Please provide an active email address)
                    </div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onKeyPress={handleKeyPress}
                    />
                  </div>
                  <div className="mb-3">
                    <label style={{ fontFamily: "Roboto" }}>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onKeyPress={handleKeyPress}
                    />
                  </div>
                  <div className="mb-3">
                    <label style={{ fontFamily: "Roboto" }}>
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm password"
                      value={confPassword}
                      onChange={(e) => setConfPassword(e.target.value)}
                      onKeyPress={handleKeyPress}
                    />
                  </div>
                  <div className="d-grid">
                    <Button
                      className="btn btn-primary"
                      onClick={() => {
                        setLoading(true); // Set loading state to true when button is clicked
                        signupPost();
                      }}
                      style={{ fontFamily: "Roboto", marginTop: "20px" }}
                      disabled={loading} // Disable the button while loading
                    >
                      {loading ? "LOADING..." : "REGISTER"}
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default Register;
