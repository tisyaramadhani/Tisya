import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import "./../../App.css";
import { signinUser } from "../../api/UserApi";
import { useMutation } from "react-query";
import { Button } from "react-bootstrap";
import { checkToken } from "../../lib/auth";
import { toast } from "react-toastify";
import NavBar from "../Navbarcomp";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setLoading(true);
      signinPost();
    }
  };

  const { mutate: signinPost } = useMutation(
    () =>
      signinUser({
        email: email,
        password: password,
      }),
    {
      onSuccess: async (data) => {
        window.localStorage.setItem("accessToken", data.token);
        window.localStorage.setItem("refreshToken", data.refreshtoken);
        setLoading(false);
        checkToken(data.token);
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
        className="container"
        style={{ background: "#fffff", height: "100vh" }}
      >
        <h1
          className="text-center"
          style={{
            fontSize: "20px",
            fontFamily: "Roboto",
            fontWeight: "bold",
            marginTop: "200px",
          }}
        >
          ACCOUNT LOGIN
        </h1>
        <Container className="container-login" style={{ background: "#fffff" }}>
          <Card className="wrap-login  my-regis">
            <div className="ps-5 pe-5 pt-5 pb-5">
              <form>
                <div className="mb-3">
                  <label style={{ fontSize: "16px", fontFamily: "Roboto" }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="enter email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyPress={handleKeyPress}
                  />
                </div>
                <div className="mb-3">
                  <label style={{ fontSize: "16px", fontFamily: "Roboto" }}>
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyPress={handleKeyPress}
                  />
                </div>
                <p className="forgot-password text-end">
                  <a
                    href="/lupa-password"
                    style={{ fontSize: "13px", fontFamily: "Roboto" }}
                  >
                    Forgot Password?
                  </a>
                </p>
                <div className="d-grid">
                  <Button
                    className="btn btn-primary"
                    onClick={() => {
                      setLoading(true);
                      signinPost();
                    }}
                    style={{ fontFamily: "Roboto" }}
                    disabled={loading}
                  >
                    {loading ? "LOADING..." : "SIGN IN"}
                  </Button>
                  <p
                    className="pt-3 text-center"
                    style={{ fontSize: "14px", fontFamily: "Roboto" }}
                  >
                    Don't have an account?<a href="/register"> Sign Up now</a>
                  </p>
                </div>
              </form>
            </div>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default SignIn;
