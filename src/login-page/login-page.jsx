import { useNavigate } from "react-router-dom";
// import HomePage from "../homePage/homePage";
import "./login-page.css";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";

// class LoginPage extends React.Component 
// {
//   render() 
//   {
//     return <div><p>In login, {this.props.someData} </p></div>
//   }
// }

// export default LoginPage; This example is accessing props in a class component. Below is the functional programing ES6

export default function LoginPage({ someData }) {

  const [showHomePage, setShowHomePage] = useState(false);
  let imgs = ["https://images.pexels.com/photos/920382/pexels-photo-920382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/5370674/pexels-photo-5370674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ]
  const nav = useNavigate();


  return (
    <main className="welcome" >
      <div className="marquee__item"><p>Welcome to reminisce gallery , click to view pictures </p></div>
      <div className=" marquee__item marquee login-css">
        <Marquee  autoFill pauseOnHover>
          {imgs.map((image, i) => (<img key={i} src={image} alt="cart" style={{ maxHeight:'500px', width:'auto', height:'70%' }} />))}
        </Marquee>
      </div>
      <div>
       
        <div className="marquee__item"><button className="login-button" onClick={() => setShowHomePage(!showHomePage)}>View Pictures</button>
          {showHomePage && nav('home')}
        </div>
      </div>

    </main>
  );
}

