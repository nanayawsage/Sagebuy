import React from "react";
import Nav from "../navigation/Nav";

const Login = () => {
  return (
    <div>
      <Nav />
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h4>Login</h4>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group mb-3">
                    <label>Email</label>
                    <input
                      className="form-control"
                      type=""
                      name="email"
                      value=""
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Password</label>
                    <input
                      className="form-control"
                      type=""
                      name="password"
                      value=""
                    />
                  </div>

                  <div className="form-group mb-3">
                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
