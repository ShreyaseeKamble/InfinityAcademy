import React, { useState } from 'react';
import './login.css';
import Button from '../UI/Button/Button';

const Login = (props) => {

  const valid_emails = [
    {
      email: 'shreyasee.kamble',
      password: 'pass@123'
    },
    {
      email: 'suhas.awale',
      password: 'suhas@123'
    }
  ];

  const [ enteredEmail, setEnteredEmail ] = useState('');
  const [ enteredPassword, setEnteredPassword ] = useState('');
  const [ isValid, setIsValid ] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const data = {
      email: enteredEmail,
      password: enteredPassword,
    }

    props.onSaveExpenseData(data);
    setEnteredEmail("");
    setEnteredPassword("");
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const onPasswordBlurHander = () => {
    const validEmail = valid_emails.filter((emails) => {
      if(emails.email === enteredEmail && emails.password === enteredPassword) {
        return true;
      }
  
      return false;
    });
  
    setIsValid(validEmail.length ? true : false);
  }
       

  return (
    <form onSubmit={onSubmitHandler} className='login-form'>
      <div className='login-form-controls'>
        <div className='form_control'>
            <label className='email_label'>Email</label>
            <input className='email_input' type="text" value={enteredEmail} onChange={emailChangeHandler}></input>
        </div>
        <div className='form_control'>
            <label className='password_label'>Password</label>
            <input className='password_input' type="password" value={enteredPassword} onChange={passwordChangeHandler}
              onBlur={onPasswordBlurHander}
            ></input>
        </div>
        <div className='form_actions'>
          <Button className='login_button' type="submit" disabled={!isValid}>Login</Button>
        </div>
      </div>
    </form>
  );
}

export default Login;