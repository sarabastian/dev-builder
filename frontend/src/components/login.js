import React, {useState} from 'react';
import  TextField  from '@material-ui/core/TextField';
import Button  from '@material-ui/core/Button';
import { withRouter } from 'react-router';
import { InputLabel } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { Input } from '@material-ui/core';
import { FormGroup } from '@material-ui/core';

class Login extends React.Component {
    state = {
      username: "",
      password: ""
    }
  
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
  })
  }
  
  handleSubmit = (e) => {
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
            this.props.handleLogin()
            this.props.history.push('/my-projects')
        })
  
  }
  
  
  
  render () {
   
  return (

    <form onSubmit={this.handleSubmit}>

 
    
            <h2 className="text-center">Welcome</h2>
         
            <FormControl>
                 <InputLabel>Username</InputLabel>
          
             <Input name="username" placeholder="Username" onChange={this.handleInput} value={this.state.username}/>
             </FormControl>
           
            <FormControl>
                <InputLabel>Password</InputLabel>
                <Input name="password" type="password" placeholder="Password" onChange={this.handleInput} value={this.state.password}/>
            </FormControl>
        
            <Button  type="submit" className="btn-lg btn-dark btn-block">Log in</Button>
        
          
     
  
    
    </form>
    )
  }
  }
  export default withRouter(Login);


    // function Login(props){
    //     const [username, setUsername] = useState("")
    //     const [password, setPassword] = useState("")
    
    //     const handleUsernameChange = (e) => {
    //         setUsername(e.target.value)
    //     }
    
    //     const handlePasswordChange = (e) => {
    //         setPassword(e.target.value)
    //     }
    
    //     const handleSubmit = (e) => {
    //         e.preventDefault()
    //         fetch(`http://localhost:3001/api/v1/login`, {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "Accept": "application/json"
    //             },
    //             body: JSON.stringify({
    //                 username,
    //                 password
    //             })
    //         })
    //         .then(resp => resp.json())
    //         .then(data => {
    //             localStorage.setItem("token", data.jwt)
    //             props.handleLogin(data.user)
    //             props.history.push("/")
    //         })
    //         setUsername("")
    //         setPassword("")

    //     }
    //     const formDivStyle = {
    //         margin: "auto",
    //         padding: "20px",
    //         width: "80%"
    //     }
    //     return(
    //         <div>
    //             {/* <Paper elevation={0} /> */}

    //             <div style={formDivStyle}>
    //             <h1>Log In</h1>
    //             <form class="ui form" onSubmit={handleSubmit}>
    //                 <div class="field">
    //                     <label>Username</label>
    //                     <input value={username} onChange={handleUsernameChange} type="text" placeholder="username"/>
    //                 </div>
    //                 <div class="field">
    //                     <label>Password</label>
    //                     <input value={password} onChange={handlePasswordChange} type="password" placeholder="password"/>
    //                 </div>
                    
    //                 <button class="ui button" type="submit">Submit</button>
    //             </form>
    //         </div>
    //         {/* <Paper /> */}
    //         </div>
    //     )
    // } 

// class Login extends React.Component {
//     state = ({
//         username: "",
//         password: ""
//     })

//     handleInput = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }

//     handleSubmit = (e) => {
//         e.preventDefault()
    
//         fetch('http://localhost:3001/api/v1/users',{
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             "Accept": "application/json"
//           },
//           body: JSON.stringify({
//             user: this.state
//           })
//         }).then(res => res.json())
//         .then(data => {

//             localStorage.setItem('token', data.jwt)
//             this.props.history.push('/')
   
     
//         })
        
//       }
    

//     render() {
//         return(
//             <section>
   
//             <Form onSubmit={this.handleSubmit} className="login-form" style={{width:"100%", maxWidth:"330px", padding:"15px", margin:"auto", height:"100%"}}>
//                 <h1>
//                     {/* <span className="font-weight-bold">VanBnB</span> */}
//                 </h1>
//                 <h2 className="text-center">Welcome</h2>
//                 <FormGroup>
//                     <Form.Label>Username</Form.Label>
//                     <Form.Control name="username" placeholder="Username" onChange={this.handleInput} value={this.state.username} />
//                 </FormGroup>
//                 <FormGroup>
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control name="password" type="password" placeholder="Password" onChange={this.handleInput} value={this.state.password} />
//                 </FormGroup>
//                 <Button  type="submit" className="btn-lg btn-dark btn-block">Log in</Button>
                
              
//             </Form>
    
//         </section>
//         )
//     }
// }

