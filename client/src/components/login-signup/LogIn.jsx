import { useContext, useState } from 'react'
import axios from '../../api/axios'
import { useNavigate, Link } from 'react-router-dom'
import UserContext from '../../context/UserContext'


function LogIn() {

  const { setUserData } = useContext(UserContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null); // Define state for the user
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const [error, setError] = useState(''); // State for error message

  const handleSubmit = async (e) => {
    // prevents default browser behavior of reloading after submitting
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // send post request to / (login page)
      const loginRes = await axios.post('/', { username, password })

      // stores token and user data (with hashed password) to userData hook from
      // the UserContext file
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      })

      // stores token in local storage to persist
      localStorage.setItem('auth-token', loginRes.data.token)
      localStorage.setItem('name', loginRes.data.user.name)
      localStorage.setItem('username', loginRes.data.user.username)

      // ////////////////////////////// save/load code
      // // set the state of the user
      // setUser(result?.data)
      // // store the user in localStorage
      // result.testing = 1;
      // localStorage.setItem('user', JSON.stringify(result.testing)); // Ensure it's stringified
      // console.log(result.testing);
      // ////////////////////////////// save/load end

      setLoading(false)
      // takes user to game home page
      navigate('/home')

    } catch (err) {
      console.log(err.response.data)
      if (err.response.status === 400) {
        setError(err.response.data)
      } else {
        setError("Unexpected Error")
      }
      setLoading(false)
    }
  }

  return (
    <div className='loginBG'>
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <title> Log In </title>
      <div className='bg-white p-3 rounded w-25'>
        <h2> Log In </h2>

        <form onSubmit={ handleSubmit }>
          <div className="mb-3">
            <input
              value={ username }
              type='username'
              placeholder='username'
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

          <button type='submit' className='button w-100'> Log In </button>
      </form>

      <p className='centerLo'> Don't have an account? </p>
      <Link to='/signup' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'> Sign Up </Link>

      <p className='centerLo'> or </p>

      <Link to='/game' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'> Play as a guest </Link>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
    </div>
  </div>

  );
}

export default LogIn;
