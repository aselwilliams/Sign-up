import { SettingsBackupRestoreRounded } from '@mui/icons-material';
import React from 'react';
import {useNavigate} from 'react-router-dom'

function Dashboard() {
const navigate=useNavigate();

    const handleLogout=()=>{
        sessionStorage.clear();
        setToken(null)
        navigate('/login')
    }
  return (
    <div>
        <h1>Welcome to your Dashbord!</h1>

        <button className='logout-btn' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard