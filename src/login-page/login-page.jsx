import "./login-page.css";
import React from "react";

// class LoginPage extends React.Component 
// {
//   render() 
//   {
//     return <div><p>In login, {this.props.someData} </p></div>
//   }
// }

// export default LoginPage; This example is accessing props in a class component. Below is the functional programing ES6

export default function LoginPage({someData}){
  return(
    <div><p>{someData}</p></div>
  )
}