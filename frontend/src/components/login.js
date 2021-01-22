import React, {useState} from 'react';
import  TextField  from '@material-ui/core/TextField';
import Button  from '@material-ui/core/Button';
import { withRouter } from 'react-router';
import { InputLabel } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { Input } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";


export default function Login(props){

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handlePassword = (e) => {

    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    console.log(this.state)
    e.preventDefault()
  
    fetch('http://localhost:3001/api/v1/login',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: this.state
      })
    }).then(response => response.json())
  
    .then(data => {
        
            console.log(data.user_info)
            console.log(data)
            localStorage.setItem('token', data.user_info.user_id)
            props.handleLogin()
            history.push('/my-projects')
        })
  
  }
  
  
  
 
   
  return (

    <form onSubmit={handleSubmit}>

 
    
            <h2 className="text-center">Welcome</h2>
         
            <FormControl>
                 <InputLabel>Username</InputLabel>
          
             <Input name="username" placeholder="Username" onChange={handleUsername} value={username}/>
             </FormControl>
           
            <FormControl>
                <InputLabel>Password</InputLabel>
                <Input name="password" type="password" placeholder="Password" onChange={handlePassword} value={password}/>
            </FormControl>
        
            <Button  type="submit" className="btn-lg btn-dark btn-block">Log in</Button>
        
          
     
  
    
    </form>
    )
  
  }
  



