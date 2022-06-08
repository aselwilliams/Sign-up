import React,{useState} from 'react'
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import AddIcon from '@mui/icons-material/Add';
import PhotoCameraBackIcon from '@mui/icons-material/PhotoCameraBack';
import Box from "@mui/material/Box";
import {Button} from 'reactstrap';
import '../index.css';
import {useNavigate} from 'react-router-dom';

function SignUp() {
    const [user, setUser]=useState({firstName:'',lastName:'',email:'', phone:'',password:'',confirmPwd:'', registerCode:'', state: '',avatar:'' })
    const [usersGroup, setUsersGroup] = useState([]);
    const navigate=useNavigate();
  
const handleChange=(e)=>{
    const name= e.target.name;
    const value=e.target.value;
    console.log(name, value)
    setUser({...user, [name]: value})
}

const handleSubmit=(e)=>{
e.preventDefault();
if(user.firstName && user.lastName && user.email && user.phone && user.password && user.confirmPwd && user.registerCode && user.state){
    const newUser={...user, id:new Date().getTime().toString()};
    setUsersGroup([...usersGroup, newUser])
    setUser({firstName:'', lastName:'', email:'',phone:'', password:'', confirmPwd:'',registerCode:'',state:'',avatar:''
})
}
}

const navigateTo=()=>{
navigate('/login')
}
  return (
      <div className='container'>
    <header>
    <h1 className='title'>Welcome to SEYTECH!</h1>
    <p>In order to register you need a code. Please ask your admin if you don't have it.</p>
  </header>
  <main>
    <h2>CREATE AN ACCOUNT</h2>
    <form onSubmit={handleSubmit}>
        <Box
      className="App"
      sx={{
       display: 'grid',
       gridTemplateColumns:'550px 550px',
       gridGap:20,
       marginLeft:'60px'
      }}
    >
   
      <IconTextField label="First Name *" id='firstName' name='firstName' value={user.firstName} onChange={handleChange} iconEnd={<PersonOutlineIcon />} />
      <IconTextField label="Last Name *" id='lastName' name='lastName' value={user.lastName} onChange={handleChange} iconEnd={<PersonOutlineIcon />} />
      <IconTextField label="Email *" id="email" name='email' value={user.email} onChange={handleChange} iconEnd={<MailOutlineIcon />} />
      <IconTextField label="Phone *" id='phone' name='phone' value={user.phone} onChange={handleChange} iconEnd={<PhoneIcon />} />
      <IconTextField label="Password *" id='password' name='password' value={user.password} onChange={handleChange} iconEnd={<VpnKeyIcon />} />
      <IconTextField label="Confirm Password *" id='confirmPwd' name='confirmPwd' value={user.confirmPwd} onChange={handleChange} iconEnd={<VpnKeyIcon />} />
      <IconTextField label="Register Code *" id='registerCode' name='registerCode' value={user.registerCode} onChange={handleChange} iconEnd={<VpnKeyIcon />} />
      <IconTextField label="State *" id='state' name='state' value={user.state} onChange={handleChange} iconEnd={<AddIcon />} />
      <IconTextField label="Avatar *" id='avatar' name='avatar' value={user.avatar} onChange={handleChange} iconEnd={<PhotoCameraBackIcon />} />   
    </Box>
    <Button className='btn btn-secondary'>Register</Button>
    </form>
    <footer>
    <p>Already have an account?</p>
    <p className='login-tag' onClick={navigateTo}>Login</p>
  </footer>
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