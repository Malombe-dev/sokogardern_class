
import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const SignUp = () => {
  //hooks 
  const [username,setUsername] = useState("")
  const [email,SetEmail] = useState("")
  const [password,SetPassword] = useState("")
  const [phone, setPhone]= useState("")     
  //
  const[loading,setLoading] = useState("")//show a message when loading load
  const [success,setSuccess] = useState("")//suucessfully signed up
  const [error,setError] = useState("")//incase we getr an error 
  //function to handle submit
  const submit = async(e) =>{
    e.preventDefault()//prevent refresshing the browser
    // update the loading hook with a message
    setLoading("Please wait as we uploaad your data")
    try {
      //put the updated hooks data into variables by creating a form data
      const data = new FormData()
      data.append('username',username)
      data.append('email',email)
      data.append('password',password)
      data.append('phone',phone)
      //post data to backend API
      const response = await axios.post("http://malombeswala.alwaysdata.net/api/signup",data)
      console.log(response)
      // after data as been posted succesffly , set loading hook variable to be empty
      setLoading("")
      //update success hook with a success mesage
      setSuccess(response.data.success)
      //clear the form fields 
      setUsername("")
      SetEmail("")
      SetPassword("")
      setPhone("")
    } catch (error) {
      setLoading('')//updating pour hook to be empty
      setError(error.message)
    }
  }

  return (
    <div className='d-flex justify-content-center row' >
     <div className='col-md-6 p-2 mt-4 card shadow'>
     
      <div className="mb-3 text-center">
  {success && (
    <div className="alert alert-success alert-dismissible fade show" role="alert">
      {success}
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )}

  {loading && (
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
      {loading}
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )}

  {error && (
    <div className="alert alert-danger alert-dismissible fade show" role="alert">
      {error}
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )}
</div>

      <h1 className="display-4 text-center">Sign up</h1>
      <form onSubmit={submit} >
        <input type="text" placeholder='Enter your username'
        className='form-control'
        required
        value={username}
        onChange={(e)=>{setUsername(e.target.value)
          console.log(e.target.value)
        }}
        /><br />
        
        <input type="email" placeholder='Enter your email'  
        className='form-control'
        required
        value={email}
        onChange={(e) =>SetEmail(e.target.value)}
        /> <br />
       
        <input type="password" placeholder='Enter your password' 
        className='form-control'
        required
        
        onChange={(e) =>SetPassword(e.target.value)}
        /><br />
       
        <input type="text" placeholder='Enter your phone number'
        className='form-control'
        required
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        /> <br />
        

        <div className="d-flex justify-content-center">
          <button type='submit' className='btn btn-primary'>Sign Up</button>
        </div>
      </form>
      <p className='text-center'>Already have an account <Link to='/signin'>Sign In</Link></p>

     </div>
    </div>
  )
}

export default SignUp
