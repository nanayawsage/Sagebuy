import React, {useState} from 'react';
import Nav from '../navigation/Nav';
import axios from 'axios';



const Register = () => {

    const [registerInput, setRegister] = useState ({
       name: '',
       email: '',
       password: '',
    });

    const  handleInput = (e) => {
        e.persist();
        setRegister({...registerInput, [e.target.name]: e.target.value })
    }

    const registerSumbmit = (e) => {
        e.preventDefault();
        const data = {
            name: registerInput.name,
            emai: registerInput.email,
            password: registerInput.password,

        }
    axios.post(`/api/register`, data).then(res => {

    })
    }
  return (
    <div>
        <Nav />
        <div className="container">
            <div className="row justify-content-center ">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h4>Register</h4>

                        </div>
                        <div className="card-body">
                            <form onSubmit={registerSumbmit}>
                                <div className="form-group mb-3">
                                    <label>Full Name</label>
                                    <input className="form-control" type='' name="name" onChange={handleInput} value={registerInput.name} />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Email</label>
                                    <input className="form-control" type='' name="email"  onChange={handleInput} value={registerInput.email} />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Password</label>
                                    <input className="form-control" type='' name="password" onChange={handleInput} value={registerInput.password} />
                                </div>
                               
                                <div className="form-group mb-3">
                                  <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Register;
