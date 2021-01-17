import React from 'react'
import Paper from '@material-ui/core/Paper'

const headerStyle = {
    background: "black",
    height: "15vh",
    // lineHeight: "15vh"
}
function Header(props){
    return(
        <Paper>
        <div style={headerStyle}>
            <h1 style={{color: "white"}}>JWT Auth Setup</h1>
            <button className="ui button" onClick={() => props.handleFormSwitch("signUp")}>Sign Up</button>
            <button className="ui button" onClick={() => props.handleFormSwitch("login")}>Log In</button>
        </div>
        </Paper>
    )
}

export default Header;