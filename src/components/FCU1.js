// // src/components/FCUImage.js
// import React, { useState } from "react";
// import { Modal } from "react-bootstrap";
// import ModelViewer from "./ModelViewer";
// import InfoBox from "./InfoBox";

// export default function FCUImage() {
//   const [show, setShow] = useState(false);
//   const [hoveredSensor, setHoveredSensor] = useState(null);

//   // Define sensor hotspot areas that overlay the 3D model parts
//   const sensorHotspots = [
//     {
//       id: "valve",
//       name: "Valve Pos",
//       value: "45 %",
//       // Hotspot area covering the valve/pipe part
//       hotspotArea: { 
//         top: "38%", 
//         left: "25%", 
//         width: "80px", 
//         height: "80px" 
//       },
//       // Where the label appears
//       labelPosition: { top: "10%", left: "8%" },
//     },
//     {
//       id: "eat",
//       name: "E.A.T",
//       value: "22.1 °C",
//       hotspotArea: { 
//         top: "28%", 
//         left: "48%", 
//         width: "70px", 
//         height: "70px" 
//       },
//       labelPosition: { top: "8%", right: "12%" },
//     },
//     {
//       id: "sat",
//       name: "S.A.T",
//       value: "12.5 °C",
//       hotspotArea: { 
//         bottom: "38%", 
//         right: "28%", 
//         width: "75px", 
//         height: "75px" 
//       },
//       labelPosition: { bottom: "12%", right: "8%" },
//     },
//   ];

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//       }}
//     >
//       {/* FCU Title */}
//       <h2 style={{ marginBottom: "20px" }}>FCU Location Overlay</h2>

//       {/* FCU Image - Click to open */}
//       <img
//         src="/images/fcu.png"
//         alt="FCU"
//         style={{
//           width: "500px",
//           height: "400px",
//           cursor: "pointer",
//           border: "2px solid #ddd",
//           borderRadius: "8px",
//         }}
//         onClick={() => setShow(true)}
//       />

//       {/* Popup Modal */}
//       <Modal show={show} onHide={() => setShow(false)} size="lg" centered>
//         <Modal.Header closeButton>
//           <Modal.Title>FCU Details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body style={{ padding: 0 }}>
//           {/* 3D Model Container */}
//           <div
//             style={{
//               position: "relative",
//               height: "400px",
//               width: "100%",
//               overflow: "visible",
//             }}
//           >
//             {/* 3D Model Viewer */}
//             <div style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }}>
//               <ModelViewer url="/models/fcu.glb" />
//             </div>

//             {/* Invisible Hotspot Areas over 3D Model Parts */}
//             {sensorHotspots.map((sensor) => (
//               <div
//                 key={`hotspot-${sensor.id}`}
//                 style={{
//                   position: "absolute",
//                   ...sensor.hotspotArea,
//                   cursor: "pointer",
//                   zIndex: 90,
//                   // Show outline only when hovered (for debugging, remove later)
//                   border: hoveredSensor?.id === sensor.id 
//                     ? "2px dashed rgba(33, 150, 243, 0.5)" 
//                     : "none",
//                   borderRadius: "50%",
//                   backgroundColor: hoveredSensor?.id === sensor.id 
//                     ? "rgba(33, 150, 243, 0.1)" 
//                     : "transparent",
//                   transition: "all 0.3s ease",
//                 }}
//                 onMouseEnter={() => setHoveredSensor(sensor)}
//                 onMouseLeave={() => setHoveredSensor(null)}
//               >
//                 {/* Small dot indicator in center of hotspot */}
//                 <div
//                   style={{
//                     position: "absolute",
//                     top: "50%",
//                     left: "50%",
//                     transform: "translate(-50%, -50%)",
//                     width: hoveredSensor?.id === sensor.id ? "12px" : "8px",
//                     height: hoveredSensor?.id === sensor.id ? "12px" : "8px",
//                     borderRadius: "50%",
//                     backgroundColor: "#2196f3",
//                     boxShadow: hoveredSensor?.id === sensor.id 
//                       ? "0 0 15px rgba(33, 150, 243, 1)" 
//                       : "0 0 8px rgba(33, 150, 243, 0.6)",
//                     transition: "all 0.3s ease",
//                     animation: "pulse 2s infinite",
//                   }}
//                 />
//               </div>
//             ))}

//             {/* Label with Arrow - Shows on Hover */}
//             {hoveredSensor && (
//               <>
//                 {/* SVG Arrow from label to hotspot */}
//                 <svg
//                   style={{
//                     position: "absolute",
//                     top: 0,
//                     left: 0,
//                     width: "100%",
//                     height: "100%",
//                     pointerEvents: "none",
//                     zIndex: 95,
//                   }}
//                 >
//                   <defs>
//                     <marker
//                       id="arrowhead"
//                       markerWidth="10"
//                       markerHeight="10"
//                       refX="9"
//                       refY="3"
//                       orient="auto"
//                     >
//                       <polygon points="0 0, 10 3, 0 6" fill="#2196f3" />
//                     </marker>
//                   </defs>
                  
//                   {/* Arrow line */}
//                   <line
//                     x1={hoveredSensor.labelPosition.left || `calc(100% - ${hoveredSensor.labelPosition.right})`}
//                     y1={hoveredSensor.labelPosition.top || `calc(100% - ${hoveredSensor.labelPosition.bottom})`}
//                     x2={hoveredSensor.hotspotArea.left || `calc(100% - ${hoveredSensor.hotspotArea.right})`}
//                     y2={hoveredSensor.hotspotArea.top || `calc(100% - ${hoveredSensor.hotspotArea.bottom})`}
//                     stroke="#2196f3"
//                     strokeWidth="3"
//                     markerEnd="url(#arrowhead)"
//                   />
//                 </svg>

//                 {/* Label Box */}
//                 <div
//                   style={{
//                     position: "absolute",
//                     ...hoveredSensor.labelPosition,
//                     backgroundColor: "#fff",
//                     border: "3px solid #2196f3",
//                     borderRadius: "10px",
//                     padding: "12px 16px",
//                     boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
//                     zIndex: 100,
//                     pointerEvents: "none",
//                     minWidth: "100px",
//                     animation: "fadeIn 0.3s ease",
//                   }}
//                 >
//                   <div style={{ 
//                     fontSize: "13px", 
//                     fontWeight: "700", 
//                     color: "#555", 
//                     marginBottom: "6px",
//                     textTransform: "uppercase",
//                     letterSpacing: "0.5px"
//                   }}>
//                     {hoveredSensor.name}
//                   </div>
//                   <div style={{ 
//                     fontSize: "20px", 
//                     fontWeight: "bold", 
//                     color: "#2196f3",
//                     fontFamily: "monospace"
//                   }}>
//                     {hoveredSensor.value}
//                   </div>
//                 </div>
//               </>
//             )}
//           </div>

//           {/* Info Box Below 3D Model */}
//           <div style={{ padding: "20px" }}>
//             <InfoBox />
//           </div>
//         </Modal.Body>
//       </Modal>

//       {/* Animations */}
//       <style>
//         {`
//           @keyframes pulse {
//             0%, 100% {
//               opacity: 0.6;
//               transform: translate(-50%, -50%) scale(1);
//             }
//             50% {
//               opacity: 1;
//               transform: translate(-50%, -50%) scale(1.2);
//             }
//           }

//           @keyframes fadeIn {
//             from {
//               opacity: 0;
//               transform: scale(0.85);
//             }
//             to {
//               opacity: 1;
//               transform: scale(1);
//             }
//           }
//         `}
//       </style>
//     </div>
//   );
// }



// src/components/FCUImage.js
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import ModelViewer from "./ModelViewer";

export default function FCUImage() {
  const [show, setShow] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {/* FCU Title */}
      <h2 style={{ marginBottom: "20px" }}>FCU Location Overlay</h2>

      {/* FCU Image */}
      <img
        src="/images/fcu.png"
        alt="FCU"
        style={{ width: "500px", height: "400px", cursor: "pointer" }}
        onClick={() => setShow(true)}
      />

      {/* Popup Modal */}
      <Modal show={show} onHide={() => setShow(false)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>FCU 3D Model - Hover over parts for details</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: "500px", padding: 0 }}>
          {/* 3D Model with built-in hover tooltips */}
          <ModelViewer url="/models/fcu.glb" />
        </Modal.Body>
      </Modal>
    </div>
  );
}