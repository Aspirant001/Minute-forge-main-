// import React, { useState } from "react";
// import "./LoginSignup.css";
// import userImage from "./mainlogo.png";
// import user_icon from "../assets/person.png";
// import email_icon from "../assets/email.png";
// import password_icon from "../assets/password.png";
// import HomePage1 from "../../pages/HomePage1";
// import Image from "./mainlogo.png";
// // import Image1 from "./pngegg.png";

// const LoginSignUp = () => {
//   const [action, setAction] = useState("Sign Up");

//   const handleLogin = (event) => {
//     event.preventDefault(); // Prevent default form submission
//     // Simulate successful login and redirect to HomePage
//     window.location.href = "/homepage";
//   };

    
//   return (
//     <>
   
//      <div className="loginsignup">
//       <div className="Heading">
//         <br />
//         <h1>
//           <img src={Image} alt="Logo" className="logo" />
//           Minutes Forge
//         </h1>
//       </div>
//       <div className="container">
//         <div className="header">
//           <div className="text">{action}</div>
//           <div className="underline"></div>
//         </div>
//         <div className="inputs">
//           {action === "Login" ? (
//             <div></div>
//           ) : (
//             <div className="input">
//               <img src={user_icon} alt="" />
//               <input type="text" placeholder="Name" />
//             </div>
//           )}
//           <div className="input">
//             <img src={email_icon} alt="" />
//             <input type="email" placeholder="Email Id" />
//           </div>
//           <div className="input">
//             <img src={password_icon} alt="" />
//             <input type="password" placeholder="Password " />
//           </div>
//         </div>
//         {action === "Login" ? (
//           <div></div>
//         ) : (
//           <div className="Already-a-Member">
//             Already a Member?{" "}
//             <button
//               onClick={() => {
//                 setAction("Login");
//               }}
//             >
//               Log In!
//             </button>
//           </div>
//         )}

//         {action === "Sign Up" ? (
//           <div></div>
//         ) : (
//           <div className="forgot-password">
//             Forgot Password? <span>Click here!</span>
//           </div>
//         )}

//         <div className="submit-container">
//           {
//             <div
//               className={action === "Login" ? "submit gray" : "submit"}
//               onClick={() => {
//                 setAction("Sign Up");
//               }}
//             >
//               Sign Up
//             </div>
//           }
//           <div
//             className={action === "Sign Up" ? "submit gray" : "submit"}
//             onClick={handleLogin}
//           >
//             Log In
//           </div>
//           {/* <div className={action === "Sign-Up" ? "submit gray" : "submit"} onClick={handleLogin}>Log In</div> */}
//         </div>
//       </div>
//       </div>
//     </>
//   );
// };

// export default LoginSignUp;
