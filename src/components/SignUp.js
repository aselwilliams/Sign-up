import React from 'react'
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";
import Box from "@mui/material/Box";

function SignUp() {
    const [user, setUser]=useState({firstName:'',lastName:'',email:'', phone:'',password:'',confirmPwd:'', registerCode:'', state: '',avatar:'' })
    const [usersGroup, setUsersGroup] = useState([]);
  

  return (
      <div className='container'>
    <header>
    <h1>Welcome to SEYTECH!</h1>
    <p>In order to register you need a code. Please ask your admin if you don't have it.</p>
  </header>
  <main>
    <h2>CREATE AN ACCOUNT</h2>
    <form>
        <Box
      className="App"
      sx={{
       display: 'grid',
       gridTemplateColumns:'repeat(2, 1fr)',
       gridGap:20
      }}
    >
   
      <IconTextField label="First Name *" id='firstName' name='firstName' value={user.firstName} onChange={handleChange} iconEnd={<Visibility />} />
      <IconTextField label="Last Name *" id='lastName' name='lastName' value={user.lastName} onChange={handleChange} iconStart={<AccountCircle />} />
      <IconTextField label="Email *" id="email" name='email' value={user.email} onChange={handleChange} iconEnd={<Visibility />} />
      <IconTextField label="Phone *" id='phone' name='phone' value={user.phone} onChange={handleChange} iconStart={<AccountCircle />} />
      <IconTextField label="Password *" id='password' name='password' value={user.password} onChange={handleChange} iconEnd={<Visibility />} />
      <IconTextField label="Confirm Password *" id='confirmPwd' name='confirmPwd' value={user.confirmPwd} onChange={handleChange} iconEnd={<Visibility />} />
      <IconTextField label="Register Code *" id='registerCode' name='registerCode' value={user.registerCode} onChange={handleChange} iconEnd={<Visibility />} />
      <IconTextField label="State *" id='state' name='state' value={user.state} onChange={handleChange} iconEnd={<Visibility />} />
      <IconTextField label="Avatar *" id='avatar' name='avatar' value={user.avatar} onChange={handleChange} iconEnd={<Visibility />} />
      
    </Box>
    </form>
    </main>
    </div>
  );
}

const IconTextField = ({ iconStart, iconEnd, InputProps, ...props }) => {
  return (
    <TextField
      {...props}
      InputProps={{
        ...InputProps,
        endAdornment: iconEnd ? (
          <InputAdornment position="end">{iconEnd}</InputAdornment>
        ) : null
      }}
    />
  )
}

export default SignUp