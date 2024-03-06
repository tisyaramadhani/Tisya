import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./../../App.css";
import { useMutation } from "react-query";
import { putChangePasswordUser } from "../../api/UserApi";
import jwtDecode from "jwt-decode";
import NavBarUser from "./NavBarUser";
import { toast } from "react-toastify";

const PassBaruUser = () => {
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const token = jwtDecode(window.localStorage.getItem("accessToken"));
  const [id] = useState(token.id);
  const [loading, setLoading] = useState(false);

  const { mutate: changePasswordUserPut } = useMutation(
    () =>
      putChangePasswordUser(id, {
        password: password,
        confPassword: confPassword,
      }),
    {
      onSuccess: async () => {
        setLoading(false);
        toast.success("Successfully Change Password", {
          autoClose: 1500,
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

  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      setLoading(true);
      changePasswordUserPut(id);
    }
  };

  return (
    <>
      <NavBarUser></NavBarUser>
      <div className="changepass" style={{ background: "#ffffff" }}>
        <h1
          className="text-center"
          style={{
            fontSize: "20px",
            fontFamily: "Roboto",
            fontWeight: "bold",
            marginTop: "300px",
          }}
        >
          CHANGE PASSWORD
        </h1>
        <Container className="container-changepass">
          <Card className="wrap-changepass">
            <div className="ps-5 pe-5 pt-5 pb-5">
              <form>
                <div className="mb-3">
                  <label style={{ fontFamily: "Roboto", marginTop: "10px" }}>
                    New Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter new password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={handleEnterKeyPress}
                  />
                </div>
                <div className="mb-3">
                  <label style={{ fontFamily: "Roboto" }}>
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter confirm new password"
                    value={confPassword}
                    onChange={(e) => setConfPassword(e.target.value)}
                    onKeyDown={handleEnterKeyPress}
                  />
                </div>
                <div className="d-grid">
                  <Button
                    onClick={() => {
                      setLoading(true);
                      changePasswordUserPut(id);
                    }}
                    style={{
                      marginBottom: "10px",
                      fontFamily: "Roboto",
                      marginTop: "20px",
                    }}
                    disabled={loading}
                  >
                    {loading ? "LOADING..." : "Change Password"}
                  </Button>
                </div>
                <div className="d-grid">
                  <Button
                    href="/home-user"
                    type="submit"
                    style={{ backgroundColor: "#9CB4CC", fontFamily: "Roboto" }}
                  >
                    Back To Home{" "}
                  </Button>
                </div>
              </form>
            </div>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default PassBaruUser;
