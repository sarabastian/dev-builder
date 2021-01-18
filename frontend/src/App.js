
import './App.css';
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Main from './containers/Main';
import Login from './components/Login';
import ProjectShow from './components/ProjectShow'

class App extends React.Component {
  state = {
    isloggedin: false
  }

  componentDidMount(){
    this.handleLogin();
  }

  handleLogin = () => {
    if(localStorage.getItem('token')) {
      this.setState({ isloggedin: true})
    }
  }


  render() {

    
 

    return (
      <div className="App">
        <Router>
          <Switch>
           
            
            <Route path="/login" component={() => <Login login={this.state.isloggedin} handleLogin={this.handleLogin} />} />
            <Route exact path="/" component={() => <Main  /> } />
            <Route exact path="/show" component={() => <ProjectShow />} />
   


          </Switch>
       </Router>
            
       
          
      </div>

    );
  }
}
export default App;
















// function App() {
//   const [user, setUser] = useState({})
//   const [form, setForm] = useState("")

//   useEffect(() => {
//     const token = localStorage.getItem("token")
//     if (token) {
//       fetch('http://localhost:3001/api/v1/auto_login', {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       })
//         .then(resp => resp.json())
//         .then(data => {
//           setUser(data)
//           // console.log(data)
//         })
//     }
//   }, [])
//   const handleLogin = (user) => {
//     setUser(user)
//   }

//   const handleFormSwitch = (input) => {
//     setForm(input)
//   }
//   const handleAuthClick = () => {
//     const token = localStorage.getItem("token")
//     fetch(`http://localhost:3001/api/v1/user_is_authed`, {
//       headers: {
//         "Authorization": `Bearer ${token}`
//       }
//     })
//       .then(resp => resp.json())
//       .then(data => console.log(data))
//   }

//   console.log(user)

//   const renderForm = () => {
//     switch (form) {
//       case "login":
//         return <Login handleLogin={handleLogin} />
//         break;
//       default:
//       // return <SignInForm handleLogin={handleLogin}/>
//     }
//   }
//   return (
//     <div className="App">

//       <Header handleFormSwitch={handleFormSwitch} />
//       {
//         renderForm()
//       }
//       <button onClick={handleAuthClick} className="ui button">Access Authorized Route</button>
  
   
//   <Router history={history}>
//     <Switch>
//       <Route exact path='/'> <Mainrender={(props)/> </Route>
//       {/* <Route exact path="/" render={(props) => <WelcomeBanner {...props} history={history} />} /> */}
//       <Route exact path="/recipes" render={() => <RecipeCollection menus={menus} />} />
//       <Route path="/recipes/" render={(props) => <RecipePage {...props} menus={menus} />} />
//       <Route path="/menu" render={(props) => <MenuPage {...props} user={user_id} menus={menus} />} />
//     </Switch>
//   </Router>
//   {/* Footer? */ }
//   </div>
//   );

// }




