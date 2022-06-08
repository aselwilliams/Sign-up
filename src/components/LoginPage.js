import React,{useState,useEffect} from 'react';
import {Form,FormGroup,Label,Input,Button} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import VisibilityOffIcon from "@mui/icons-material/Visibility";
import Box from "@mui/material/Box";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import {useNavigate} from 'react-router-dom';

function LoginPage() {
    const [email, setEmail] =useState('')
    const [password, setPassword]=useState('')
    const [token, setToken] =useState(null)

    const navigate=useNavigate();

    useEffect(()=>{

        let token=sessionStorage.getItem('token', token)
        if(token){
            setToken(token)
        }
    },[])

    const handleClick=()=>{
        navigate('/sign-up')
    }

    const handleLogin=(e)=>{
        e.preventDefault()
        const emailValue=e.target.email.value;
        const pwdValue=e.target.password.value;
        console.log(emailValue,pwdValue)
    }
  return (
<form onSubmit={handleLogin}>
            <Box
      className="App login"
      sx={{
        display: "grid",
        gridTemplateColumns: "270px",
        gridGap: 5,
        padding:'30px 40px'
      }}
   
    >
        <h5>LOGIN TO YOUR ACCOUNT</h5>
      <IconTextField label="Email" name='email' iconEnd={<MailOutlineIcon />} />
      <IconTextField label="Password" name='password' iconEnd={<VisibilityOffIcon />} />
     <Button className='login-btn' >Log in</Button>
    <h6>Don't have an account?</h6>
     <p className='create-account' onClick={handleClick}>Create an account</p>
    </Box>
    </form>
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