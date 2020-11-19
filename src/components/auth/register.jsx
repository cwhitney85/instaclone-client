import React, { Component, useState, useContext } from 'react'
import { Link, useHistory } from "react-router-dom";
import Axios from "axios";
import ErrorNotice from "../ErrorNotice";
import Profile from '../Profile'

export default class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      displayName: '',
      passwordCheck: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  render() {
    return (
      <div>
        {/* <h1 id='welcome'></h1> */}
        <form onSubmit={this.handleSubmit}>
            <label htmlFor='username'>Username: </label>
            <input type='text' name='username' id='displayName' onChange={this.handleChange} />
            <br/>
            <label htmlFor='email'>Email: </label>
            <input type='email' name='email' id='email' onChange={this.handleChange} />
            <br/>
            <label htmlFor='password'>Password: </label>
            <input type='password' name='password' id='password' onChange={this.handleChange} />
            <br/>
            <label htmlFor='passwordCheck'>Verify Password: </label>
            <input type="password" name="passwordCheck" id="passwordCheck" onChange={this.handleChange}/>
            <br/>
            <Link to="/profile">
            <input type='submit' value='Submit' />
            </Link>
        </form>
      </div>
    )
  }
}


// import React, { useState, useContext } from "react";
// import { useHistory } from "react-router-dom";
// import Axios from "axios";
// import ErrorNotice from "../ErrorNotice";

// export default function Register() {
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();
//   const [passwordCheck, setPasswordCheck] = useState();
//   const [displayName, setDisplayName] = useState();
//   const [error, setError] = useState();

//   const { setUserData } = useContext(UserContext);
//   const history = useHistory();

//   const submit = async (e) => {
//     e.preventDefault();

//     try {
//       const newUser = { email, password, passwordCheck, displayName };
//       await Axios.post("http://localhost:3003/users/register", newUser);
//       const loginRes = await Axios.post("http://localhost:3003/users/login", {
//         email,
//         password,
//       });
//       setUserData({
//         token: loginRes.data.token,
//         user: loginRes.data.user,
//       });
//       localStorage.setItem("auth-token", loginRes.data.token);
//       history.push("/");
//     } catch (err) {
//       err.response.data.msg && setError(err.response.data.msg);
//     }
//   }; 

//   return (
//     <div className="page">
//       <h2>Register</h2>
//       {error && (
//         <ErrorNotice message={error} clearError={() => setError(undefined)} />
//       )}
//       <form className="form" onSubmit={submit}>
//         <label htmlFor="register-email">Email</label>
//         <input
//           id="register-email"
//           type="email"
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <label htmlFor="register-password">Password</label>
//         <input
//           id="register-password"
//           type="password"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Verify password"
//           onChange={(e) => setPasswordCheck(e.target.value)}
//         />

//         <label htmlFor="register-display-name">Display name</label>
//         <input
//           id="register-display-name"
//           type="text"
//           onChange={(e) => setDisplayName(e.target.value)}
//         />

//         <input type="submit" value="Register" />
//       </form>
//     </div>
//   );
// }