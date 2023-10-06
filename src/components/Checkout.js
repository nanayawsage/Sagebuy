import React from "react";
import Nav from "../navigation/Nav";

const Checkout = () => {
  return (
    <div>
        <Nav />
        
      <div className="py-3 bg-warning">
        <div className="container">
          <h6> Checkout</h6>
        </div>
      </div>

      <div className="py-4 ">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="card">
                <div className="card-hearder">
                  <h4> Details</h4>
                </div>
                <div className="card-body">
                  <div className="row">

                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label>First Name</label>
                        <input
                          className="form-control"
                          type="text"
                          name="firstname"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label>Last Name</label>
                        <input
                          className="form-control"
                          type="text"
                          name="firstname"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label>Phone Number</label>
                        <input
                          className="form-control"
                          type="text"
                          name="firstname"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label>Email</label>
                        <input
                          className="form-control"
                          type="text"
                          name="firstname"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group mb-3">
                        <label>Full Address</label>
                        <input
                          className="form-control"
                          type="text"
                          name="firstname"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label>City</label>
                        <input
                          className="form-control"
                          type="text"
                          name="firstname"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label>Zip Code</label>
                        <input
                          className="form-control"
                          type="text"
                          name="firstname"
                        />
                      </div>
                    </div>
                    
                  </div>
                  <button className="btn btn-primary" >Submit</button>
                </div>
              </div>
            </div>
            <div className="col-md-5">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th width="50%">Product</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Iphone</td>
                        <td>200</td>
                        <td>2</td>
                        <td>400</td>


                    </tr>
                </tbody>
            </table>
        </div>
          </div>

      

        </div>
      </div>
    </div>
  );
};

export default Checkout;
