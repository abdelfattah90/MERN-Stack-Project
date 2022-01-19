import { useState, useEffect } from 'react'
import { Logo, FormRow, Alert } from '../components' // Alert

import Wrapper from '../assets/wrappers/RegisterPage'
import { useAppContext } from '../context/appContext'
// import { useNavigate } from 'react-router-dom'

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
}

function Register() {
  // const navigate = useNavigate()
  const [values, setValues] = useState(initialState)

  const { isLoading, showAlert, displayAlert } = useAppContext()

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const { name, email, password, isMember } = values
    if (!email || !password || !isMember) {
      displayAlert()
      return
    }
    console.log(values)
  }

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {showAlert && <Alert />}
        {/* Name */}
        {!values.isMember && (
          <FormRow
            type='text'
            name='name'
            value={values.name}
            handleChange={handleChange}
          />
        )}
        {/* Email */}
        <FormRow
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
        />
        {/* Password */}
        <FormRow
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
        />
        <button type='submit' className='btn btn-block'>
          Login
        </button>
        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button type='button' onClick={toggleMember} className='member-btn'>
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register
