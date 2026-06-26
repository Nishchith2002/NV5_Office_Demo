// import React, { useState } from "react";
// import axios from "axios";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post("http://localhost:5001/api/skyspark-login", {
//         username,
//         password
//       }, {
//         withCredentials: true
//       });

//       if (response.status === 200) {
//         console.log("Login successful");
//       window.location.href = "http://localhost:8080/ui/mgmCotaiLora/";


//       }
//     } catch (err) {
//       console.error("Login error:", err);
//       setError("Login failed. Please check credentials.");
//     }
//   };

//   return (
//     <form onSubmit={handleLogin}>
//       <h2>SkySpark Login</h2>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         required
//       /><br />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//       /><br />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default Login;






// import React, { useState } from "react";
// import axios from "axios";
// import Swal from "sweetalert2";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         "http://localhost:5001/api/skyspark-login",
//         { username, password },
//         { withCredentials: true }
//       );

//       if (response.status === 200) {
//         Swal.fire({
//           icon: "success",
//           title: "Login Successful",
//           text: "Redirecting to SkySpark...",
//           timer: 1500,
//           showConfirmButton: false,
//         });

//         setTimeout(() => {
//           window.location.href = "http://localhost:8080/ui/mgmCotaiLora/";
//         }, 1600);
//       }
//     } catch (err) {
//       Swal.fire({
//         icon: "error",
//         title: "Invalid Credentials",
//         text: "Please check your username and password.",
//       });
//     }
//   };

//   return (
//     <div
//   className="login-bg d-flex align-items-center justify-content-center"
//   style={{
//     backgroundImage: 'url("/assets/IMG_2070.JPEG")',
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     minHeight: "100vh",
//   }}
// >
//       <div className="card p-4 shadow-sm" style={{ width: "100%", maxWidth: "400px" }}>
//         <h2 className="text-center mb-4">SkySpark Login</h2>
//         <form onSubmit={handleLogin}>
//           <div className="form-group mb-3">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group mb-3">
//             <input
//               type="password"
//               className="form-control"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="btn btn-primary w-100">
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;






// // src/pages/Login.jsx
// import React, { useState } from "react";
// import axios from "axios";
// import Background from "../components/Background";
// import bgImage from "../assets/HSBC_Img.JPEG"; // replace with your image
// import { Form, Button, Alert, Card } from "react-bootstrap";
// import Swal from "sweetalert2";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         "http://localhost:5001/api/skyspark-login",
//         { username, password },
//         { withCredentials: true }
//       );

//       if (response.status === 200) {
//         Swal.fire("Success", "Login Successful!", "success");
//         setTimeout(() => {
//           window.location.href = "http://localhost:8080/ui/mgmCotaiLora/";
//         }, 1000);
//       }
//     } catch (err) {
//       console.error("Login error:", err);
//       Swal.fire("Login Failed", "Invalid credentials!", "error");
//     }
//   };

//   return (
//     <Background imageUrl={bgImage}>
//           <div style={{ display: "flex", height: "100vh" }}>
//         <div
//           style={{
//             backgroundColor: "rgba(0, 0, 0, 0.7)",
//             color: "#fff",
//             flex: 1,
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             alignItems: "center",
//             padding: "20px",
//             width: "900px",
//           }}
//         >
//           <div
//             style={{
//               position: "absolute",
//               top: "25%",
//               left: "14%",
//               transform: "translate(-50%, -50%)",
//               textAlign: "center",
//             }}
//           >
//             <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>HSBC</h1>
//             <h2 style={{ fontSize: "1.5rem", color: " #0056A8", margin: "10px 0" }}>
//            HSBC MiQ
//             </h2>
//             <p style={{ fontSize: "1rem", marginBottom: "30px" }}>
//              Login to explore NV5 Enalytics at MiQ
//             </p>
//           </div>
//         </div>

//         <div
//           style={{
//             flex: 1,
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             padding: "20px",
//           }}
//         >
//           <div
//             style={{
//               position: "absolute",
//               top: "60%",
//               left: "15%",
//               transform: "translate(-50%, -50%)",
//               width: "100%",
//               maxWidth: "400px",
//               backgroundColor: "rgba(255, 255, 255, 0)",
//               padding: "20px",
//               borderRadius: "8px",
//               boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//             }}
//           >
//             <h3 style={{ textAlign: "center", marginBottom: "20px", color: "white" }}>Login</h3>
//         <Form onSubmit={handleLogin}>
//           <Form.Group controlId="formUsername">
//              <Form.Label style={{ color: "white" }}>username</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </Form.Group>

//           <Form.Group controlId="formPassword" className="mt-2">
//             <Form.Label style={{ color: "white" }}>password</Form.Label>
//             <Form.Control
//               type="password"
//               placeholder="Enter password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </Form.Group>

//           <Button
//             variant="primary"
//             type="submit"
//             className="mt-3 w-100"
//             style={{ fontWeight: "bold" }}
//           >
//             Log In
//           </Button>
//         </Form>
//         {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
//       </div>
//       </div>
//       </div>
//     </Background>
//   );
// };

// export default Login;




// src/pages/Login.jsx
import React, { useState } from "react";
import axios from "axios";
import Background from "../components/Background";
import bgImage from "../assets/main1.JPG";
import { Form, Button, Alert } from "react-bootstrap";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Use whatever host the browser used to reach the page
  const HOST = window.location.hostname;           // e.g. 10.69.100.157 (or localhost)
  const API_BASE = `${process.env.REACT_APP_BE_URL}`;
  const SKY_UI   = `${process.env.REACT_APP_SKY_HOST}/ui/mgmCotaiLora/`;

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
      `${process.env.REACT_APP_BE_URL}/api/skyspark-login`,
        { username, password },
        { withCredentials: true }
      );

    //   if (response.status === 200) {
    //     Swal.fire("Success", "Login Successful!", "success");
    //     setTimeout(() => {
    //       window.location.href = "http://localhost:8080/ui/mgmCotaiLora/";
    //     }, 1000);
    //   }
   if (response.status === 200) {
  Swal.fire("Success", "Login Successful!", "success");

  // Step 1: Save username to localStorage
  localStorage.setItem("user", JSON.stringify({ username }));

  setTimeout(() => {
    window.location.href = "/User"; // navigate to Home
  }, 1000);
}


    } catch (err) {
      console.error("Login error:", err);
      Swal.fire("Login Failed", "Invalid credentials!", "error");
    }
  };

  return (
    <Background imageUrl={bgImage}>
      <div style={{ display: "flex", height: "100vh" }}>
        <div style={{
          backgroundColor: "rgba(0,0,0,0.7)", color: "#fff", flex: 1,
          display: "flex", flexDirection: "column", justifyContent: "center",
          alignItems: "center", padding: 20, width: 800
        }}>
          <div style={{ position: "absolute", top: "25%", left: "12%",
            transform: "translate(-50%,-50%)", textAlign: "center" }}>
            <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>NV5</h1>
            <h2 style={{ fontSize: "1.5rem", color: "#0056A8", margin: "10px 0" }}>133 Wai Yip Street, 10F<br/> Ngau Tau Kok</h2>
            <p style={{ fontSize: "1rem", marginBottom: 30 }}>Login to explore NV5 Enalytics </p>
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", padding: 20 }}>
          <div style={{
            position: "absolute", top: "60%", left: "12%", transform: "translate(-50%,-50%)",
            width: "100%", maxWidth: 400, backgroundColor: "rgba(255,255,255,0)",
            padding: 20, borderRadius: 8, boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
          }}>
            <h3 style={{ textAlign: "center", marginBottom: 20, color: "white" }}>Login</h3>
            <Form onSubmit={handleLogin}>
              <Form.Group controlId="formUsername">
                <Form.Label style={{ color: "white" }}>username</Form.Label>
                <Form.Control type="text" placeholder="Enter username"
                  value={username} onChange={(e) => setUsername(e.target.value)} required />
              </Form.Group>

              <Form.Group controlId="formPassword" className="mt-2">
                <Form.Label style={{ color: "white" }}>password</Form.Label>
                <Form.Control type="password" placeholder="Enter password"
                  value={password} onChange={(e) => setPassword(e.target.value)} required />
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-3 w-100" style={{ fontWeight: "bold" }}>
                Log In
              </Button>
            </Form>
            {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
          </div>
        </div>
      </div>
    </Background>
  );
};
export default Login;
