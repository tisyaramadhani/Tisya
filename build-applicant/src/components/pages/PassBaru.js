import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { putForgetPassword } from "../../api/UserApi";
import { useMutation } from "react-query";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const PassBaru = () => {
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  let { token } = useParams();

  const [getToken] = useState(token);
  const [loading, setLoading] = useState(false);

  const { mutate: forgetPasswordPut } = useMutation(
    () =>
      putForgetPassword(getToken, {
        password: password,
        confPassword: confPassword,
      }),
    {
      onSuccess: async (data) => {
        setLoading(false);
        toast.success(data.message, {
          autoClose: 1500,
        });
      },
      onError: (err) => {
        setLoading(false);
        console.log(err);
        toast.error(err.response.data.message, {
          autoClose: 1500,
        });
      },
    }
  );

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setLoading(true);
      forgetPasswordPut(getToken);
    }
  };

  return (
    <>
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
          CHANGE PASSWORD
        </h1>
        <Container className="container-login" style={{ background: "#fffff" }}>
          <Card className="wrap-login  my-regis">
            <div className="ps-5 pe-5 pt-5 pb-5">
              <form>
                <div className="mb-3">
                  <label style={{ fontSize: "16px", fontFamily: "Roboto" }}>
                    Password Baru
                  </label>
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
                  <label style={{ fontSize: "16px", fontFamily: "Roboto" }}>
                    Konfirmasi Password Baru
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={confPassword}
                    onChange={(e) => setConfPassword(e.target.value)}
                    onKeyPress={handleKeyPress}
                  />
                </div>
                <div className="d-grid">
                  <Button
                    className="btn btn-primary"
                    onClick={() => {
                      setLoading(true);
                      forgetPasswordPut(getToken);
                    }}
                    disabled={loading}
                  >
                    {loading ? "LOADING..." : "Change Password"}
                  </Button>

                  <p
                    className="pt-3 text-center"
                    style={{ fontSize: "14px", fontFamily: "Roboto" }}
                  >
                    <a href="/sign-in" className="mb-3">
                      Back To Login
                    </a>
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

export default PassBaru;
