
import './App.css';
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/login'

function App() {
  const [user, setUser] = useState({})
  const [form, setForm] = useState("")

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      fetch('http://localhost:3001/api/v1/auto_login', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(resp => resp.json())
        .then(data => {
          setUser(data)
          // console.log(data)
        })
    }
  }, [])
  const handleLogin = (user) => {
    setUser(user)
  }

  const handleFormSwitch = (input) => {
    setForm(input)
  }
  const handleAuthClick = () => {
    const token = localStorage.getItem("token")
    fetch(`http://localhost:3001/api/v1/user_is_authed`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
  }

  console.log(user)

  const renderForm = () => {
    switch(form){
      case "login":
        return <Login handleLogin={handleLogin}/>
        break;
      default:
        // return <SignInForm handleLogin={handleLogin}/>
    }
  }
  return (
    <div className="App">
        {/* <Header handleFormSwitch={handleFormSwitch}/> */}
        {
          renderForm()
        }
        <button onClick={handleAuthClick} className="ui button">Access Authorized Route</button>
    </div>
  );

}



// class App extends React.Component {
//   state = {
//     isLoggedIn: false
//   }

//   componentDidMount(){
//     this.handleLogin();
//   }

//   handleLogin = () => {
//     if(localStorage.getItem('token')) {
//       this.setState({ isLoggedIn: true})
//     }
//   }

//   render() {
//     return (
//       <div className="App">
//         <Router>
//           <Switch>

//             <Route path="/login" component={() => <Login login={this.state.isLoggedIn} handleLogin={this.handleLogin}/>} />




//           </Switch>
//        </Router>


//           </div>
//     )
//   }


// }

export default App;
