




import React, { useState, useEffect } from "react";
import { Container, Navbar } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../assets/NetZero1.png";
import Temp from "../assets/humidity.png";
import Cal from "../assets/calendar-line.png";
import Log from "../assets/userLogo.png";
// import Down from "../../assets/downloadButton.svg";
import Door from "../assets/door1.jpg"; // ✅ Replace door1.jpg


const Header = () => {
  const [user, setUser] = useState(null);
  const [activeUnit, setActiveUnit] = useState(localStorage.getItem("unit") || "kWh");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

const handleLogout = () => {
  localStorage.removeItem("authToken"); // ✅ remove token too
  localStorage.removeItem("user");      // remove user
  navigate("/login");                   // redirect to login
};


  const pageTitles = {
    "/User": "Staff Directory ",
    // "/LightingSystem": "Lighting System Summary",
    // "/DASFindingAndOppurtunities": "DAS Finding And Oppurtunities",
    // "/FaultAnalysis": "Opportunities",
    // "/WorkOrderTable": "Work Order Form",
    // "/ComfortGraph": "Thermal Comfort Heat Map and Performance",
    "/Skyspark":"Analytics Engine"
  };

           const size = location.pathname === "/User" ? 45 : 22;


  return (
    <>
      <Container fluid style={{ backgroundColor: "white", borderBottom: "1px solid #ddd", padding: "10px 20px 0px 70px" }}>
        <Navbar style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
          {/* Left Side: Logo and Titles */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={Logo} alt="Citi Logo" style={{ width: "80px", height: "auto", marginRight: "10px", position: "relative", left: "60px" }} />
            <div>
              {/* <div style={{ fontSize: "16px", fontWeight: "bold", color: "rgba(105, 105, 105, 0.8)", position: "relative", left: "60px" }}>
              NV5 NET ZERO
              </div> */}

<div style={{ display: "flex", alignItems: "center", gap: 10, position: "relative", left: 60 }}>
  {/* <img src={nv5Logo} alt="NV5" style={{ height: size }} /> */}
  <span style={{ fontSize: size, lineHeight: 1, fontWeight: 700, color: "#0056A8" }}>
    {pageTitles[location.pathname] || "Dashboard"}
  </span>
</div>


            </div>
          </div>

          {/* Right Side: Weather, Date, Logout */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
            {/* Icons Row */}
            <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "5px" }}>
              {/* <img src={Down} alt="Download" style={{ width: "20px", height: "auto", cursor: "pointer" }} /> */}
              <img src={Door} alt="Logout" style={{ width: "25px", height: "auto", cursor: "pointer" }} onClick={handleLogout} />
            </div>

            {/* Weather & Date */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "15px",
                borderBottom: "1px solid #ddd",
                paddingBottom: "5px",
                width: "100%",
              }}
            >
              {/* <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <img src={Temp} alt="Temperature" style={{ width: "20px", height: "auto" }} />
                <span>29°C</span>
              </div> */}
              {/* <div style={{ color: "#666" }}>|</div>
              <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <span>RH 77%</span>
              </div> */}
              {/* <div style={{ color: "#666" }}>|</div> */}
              <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <img src={Cal} alt="Calendar" style={{ width: "18px", height: "auto" }} />
                <span>{new Date().toISOString().split("T")[0]}</span>
              </div>
            </div>

            {/* User Profile */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "5px",
                fontSize: "16px",
                fontWeight: "bold",
                width: "100%",
              }}
            >
              <img src={Log} alt="User Icon" style={{ width: "18px", height: "auto", marginRight: "5px" }} />
              <span>{user ? user.username : "Guest"}</span>
            </div>
          </div>
        </Navbar>
      </Container>

   
    </>
  );
};

export default Header;
