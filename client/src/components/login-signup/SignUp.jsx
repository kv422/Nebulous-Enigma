import { useContext, useState } from 'react'
import axios from '../../api/axios'
import { useNavigate, Link } from 'react-router-dom'

function SignUp() {

  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    // prevents default browser behavior of reloading after submitting
    e.preventDefault()
    setLoading(true)

    try {
      // send post request to /signup
      await axios.post('/signup', { name, username, password, confirmPassword })

      console.log('Successfully signed up!')

      setLoading(false)
      // takes user to log in page
      navigate('/')

    } catch (err) {
      setLoading(false)
      console.log(err.response.data)
    }
  }

  return (
    <div className='signBG'>
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <title> Sign Up </title>
      <div className='bg-white p-3 rounded w-25'>
        <h2 > Sign Up </h2>

        <form onSubmit={ handleSubmit }>
          <div className="mb-3">
            <input
              value={ name }
              type='name'
              placeholder='character name'
              autoComplete='off'
              name='name'
              className='form-control rounded-0'
              onChange={ (e) => setName(e.target.value.replace(/\s/g, '')) }
            />
          </div>
          <div className="mb-3">
            <input
              value={ username }
              type='name'
              placeholder='username'
              autoComplete='off'
              name='username'
              className='form-control rounded-0'
              onChange={ (e) => setUsername(e.target.value.replace(/\s/g, '')) }
            />
          </div>
          <div className="mb-3">
            <input
              value={ password }
              type='password'
              placeholder='password'
              name='password'
              className='form-control rounded-0'
              onChange={ (e) => setPassword(e.target.value.replace(/\s/g, '')) }
            />
          </div>
          <div className="mb-3">
            <input
              value={ confirmPassword }
              type='password'
              placeholder='confirm password'
              name='confirmPassword'
              className='form-control rounded-0'
              onChange={ (e) => setConfirmPassword(e.target.value.replace(/\s/g, '')) }
            />
          </div>

          <button type='submit' className='button btn-success w-100 rounded-0'> Sign Up </button>
      </form>

      <p className='center'> Already have an account? </p>
      <Link to='/' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'> Log In </Link>
    </div>
  </div>
  </div>

  );
}

export default SignUp;
