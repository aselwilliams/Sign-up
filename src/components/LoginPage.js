import React,{useState,useEffect} from 'react';
import {Button} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import VisibilityOffIcon from "@mui/icons-material/Visibility";
import Box from "@mui/material/Box";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import {useNavigate} from 'react-router-dom';
import { nanoid } from 'nanoid';
import '../App.css'

function LoginPage({setToken}) {
    const [email, setEmail] =useState('mom@home.com')
    const [password, setPassword]=useState('159')
    
    const [emptyFields,setEmptyFields]=useState(false);
    const [notFound, setNotFound] =useState(false)

    const navigate=useNavigate();

    const handleClick=()=>{
        navigate('/sign-up')
    }

    const handleLogin=(e)=>{
        e.preventDefault()
        const emailValue=e.target.email.value;
        const pwdValue=e.target.password.value;
        console.log(emailValue,pwdValue)

        if(emailValue!=='' || pwdValue!==''){
            if(emailValue===email && pwdValue===password){
                const token=nanoid();
                sessionStorage.setItem('token',token)
                setToken(token)
                navigate('/')
            } else {
                setNotFound(true)
                setTimeout(()=>{
                    setNotFound(false)
                }, 2000)
            }
        } else {
            setEmptyFields(true)
            setTimeout(()=>{
                setEmptyFields(false)
            }, 2000)
        }
    }
  return (
      <div className='container'>
    {emptyFields ? <div className='error-msg'>Please fill out the fields first!</div> : null} 
    {notFound ? <div className='error-msg'>User is not found in the system!</div> : null}    
<form onSubmit={handleLogin}>

            <Box
      className="App login"
      sx={{
        display: "grid",
        gridTemplateColumns: "270px",
        gridGap: 10,
        padding:'30px 40px'
      }}
    >
        <h5 className='login-title'>LOGIN TO YOUR ACCOUNT</h5>
    
      <IconTextField label="Email" name='email' iconEnd={<MailOutlineIcon />} />
      <IconTextField label="Password" name='password' iconEnd={<VisibilityOffIcon />} />
     <Button className='login-btn' >Log in</Button>
    <h6>Don't have an account?</h6>
     <p className='create-account' onClick={handleClick}>Create an account</p>
    </Box>
    </form>
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

export default LoginPage