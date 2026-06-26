



import React, { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

// Import icons
import User from "../assets/staff_icon.png";
import Temp from "../assets/heatmap_icon.png";
import Skyspark from "../assets/skysparkIcon.png";
import Analytics from "../assets/Enalytics_transp.png";
import FAN from "../assets/fan.png"
// import Report from "../../assets/reports.png"

// Import arrow icon
import ArrowIcon from "../assets/arrow1.png"; // Ensure this exists in assets

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get current page path
  const [activeItem, setActiveItem] = useState(localStorage.getItem("activePath") || "/Home"); // Load from storage




  useEffect(() => {
    setActiveItem(location.pathname); // Update state when location changes
    localStorage.setItem("activePath", location.pathname); // Save to localStorage
  }, [location.pathname]); // Runs when route changes

  const menuItems = [
    { icon: User, alt: "User", path: "/User" },
     { icon: Temp, alt: "heatmap", path: "/fcu" },
     { icon: FAN, alt: "FAN", path: "/fcu1" },
   
    
    { icon: Skyspark, alt: "Skyspark", externalUrl: `${process.env.REACT_APP_SKY_HOST}/ui/nv5Office` },
    
  ];

  return (
    <Nav
      style={{
        position: "fixed",
        left: "0",
        top: "0",
        bottom: "0",
        width: "80px",
        background: "linear-gradient(to bottom, #007BFF, #00AEEF)",
        paddingTop: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
        zIndex: 9999, // Ensure sidebar is always on top
      }}
    >
      {/* Map through menuItems to display icons */}
      {menuItems.map((item, index) => (
        <div key={index} style={{ position: "relative", width: "100%" }}>
          <Nav.Link
            onClick={() => {
              if (item.externalUrl) {
                window.location.href = item.externalUrl; // Redirect to Skyspark external URL
              } else {
                setActiveItem(item.path);
                localStorage.setItem("activePath", item.path); // Store active path
                navigate(item.path); // Navigate to the path
              }
            }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "12px 0",
              borderRadius: "8px",
              cursor: "pointer",
              width: "100%", // Ensures full width inside sidebar
              height: "60px", // Fixed height for spacing
            }}
          >
            <img src={item.icon} alt={item.alt} style={{ width: "40px", height: "40px" }} />
          </Nav.Link>

          {/* Arrow Indicator (Shows only for active item) */}
          {activeItem === item.path && (
            <img
              src={ArrowIcon}
              alt="Arrow Indicator"
              style={{
                position: "absolute",
                left: "26px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "100px",
                height: "100px",
                zIndex: 10,
              }}
            />
          )}
        </div>
      ))}

      {/* Analytics Icon at the bottom */}
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          textAlign: "center",
          width: "100%", // Ensure it's centered properly
        }}
      >
        <img
          src={Analytics}
          alt="Analytics"
          style={{
            width: "90px", // Adjusted width for better visibility
            height: "auto", // Maintains aspect ratio
            maxHeight: "150px", // Prevents excessive stretching
            cursor: "pointer",
          }}
          onClick={() => navigate("/Analytics")} // Navigate to analytics page
        />
      </div>
    </Nav>
  );
};

export default Sidebar;
