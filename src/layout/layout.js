// import React from "react";
// import { Outlet } from "react-router-dom"; // To load different pages dynamically
// import Sidebar from "../layout/Sidebar";
// import Header from "../layout/Navbar";

// const Layout = () => {
//   return (
//     <div style={{ display: "flex", height: "100vh" }}>
//       {/* Sidebar - Fixed */}
//       <Sidebar />

//       {/* Main Content - Dynamic */}
//       <div  style={{ flex: 1, overflowY: "auto", paddingRight: "20px" }}>
//         <Header />
//         <div style={{ padding: "20px" }}>
//           <Outlet /> {/* Dynamic content changes here */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Layout;



import React from "react";
import { Outlet } from "react-router-dom"; // To render dynamic pages
import Sidebar from "../layout/Sidebar";
import Header from "../layout/Navbar";

const Layout = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar - Fixed */}
      <Sidebar />

      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <Header />
        <Outlet /> {/* Dynamic content renders here */}
      </div>
    </div>
  );
};

export default Layout;
