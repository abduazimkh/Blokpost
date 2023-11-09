import instance from '../../../services/api'
import { useState } from 'react'

const Signup = () => {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleUSerSingup = (e)=>{
    e.preventDefault()
    instance.post('/api/auth/signup', {
      firstname,
      lastname,
      email,
      password
    })
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }
  return (
    <form className='auth-form' onSubmit={handleUSerSingup}>
      <input type="text" placeholder='Firstname' value={firstname} onChange={(e)=> setFirstname(e.target.value)}/>
      <input type="text" placeholder='Lastname' value={lastname} onChange={(e)=> setLastname(e.target.value)}/>
      <input type="email" placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
      <input type="password" placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
      <button type='submit'>Sign Up</button>
    </form>
  )
}

export default Signup