import {useState} from 'react';
import instance from "../../../services/api";
import { useValue } from "../../../context/AppProvider";
import { toast }from "react-toastify";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useValue();
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

  const hanldeUserSignUp = (e) => {
    e.preventDefault()

    instance.post('/api/auth/signup', {
      firstname: firstName,
      lastname: lastName,
      email,
      password
    })
    .then(response => {
      if(response.data.token){
        const userdata = {
          user: response.data.data,
          token: response.data.token
        }
        dispatch({ type: "AUTH", userdata })
        toast.success("Successfully registered!")
        navigate("/admin");
      }
      else{
       throw new Error("Something went wrong")
      }
    })
    .catch(err => {
      console.log(err)
      toast.error(err.message)
      // response.data.errors[0].msg
    })
  }

  return (
    <form className='auth-form' onSubmit={hanldeUserSignUp}>
      <input type="text" placeholder='Firstname' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
      <input type="text" placeholder='Lastname' value={lastName} onChange={(e) => setLastName(e.target.value) } />
      <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value) } />
      <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value) } />
      <button type="submit">Sign Up</button>
    </form>
  )
}

export default SignUp