import React from 'react';
import RegisterForm from './RegisterForm';
import './Register.css';

const Register = () => {

 return (
 <div>

 	<div className="RegisterTitle">
		<h1>Register</h1>
	</div>

  <div>
   <RegisterForm />
  </div>

 </div>
 );

}

export default Register;
