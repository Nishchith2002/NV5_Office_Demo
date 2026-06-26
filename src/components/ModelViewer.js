// // src/components/ModelViewer.js
// import React from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";

// function Model({ url }) {
//   const { scene } = useGLTF(url);
//   return <primitive object={scene} scale={2} />;
// }

// export default function ModelViewer({ url }) {
//   return (
//     <Canvas camera={{ position: [0, 1, 5] }}>
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[2, 2, 2]} />
//       <Model url={url} />
//       <OrbitControls autoRotate={false} autoRotateSpeed={1} />

//     </Canvas>
//   );
// }



// // src/components/ModelViewer.js
// import React, { useState, useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, useGLTF, Html } from "@react-three/drei";
// import * as THREE from "three";

// // Hotspot component for interactive parts
// function Hotspot({ position, label, data, onHover }) {
//   const [hovered, setHovered] = useState(false);
//   const ref = useRef();

//   return (
//     <group position={position}>
//       {/* Invisible sphere for click/hover detection */}
//       <mesh
//         ref={ref}
//         onPointerEnter={() => {
//           setHovered(true);
//           onHover({ label, data });
//         }}
//         onPointerLeave={() => {
//           setHovered(false);
//           onHover(null);
//         }}
//       >
//         <sphereGeometry args={[0.3, 8, 8]} />
//         <meshBasicMaterial
//           transparent
//           opacity={0}
//           wireframe={false}
//         />
//       </mesh>

//       {/* Visual indicator when hovered */}
//       {hovered && (
//         <>
//           <mesh>
//             <sphereGeometry args={[0.35, 8, 8]} />
//             <meshBasicMaterial
//               color="#ffff00"
//               transparent
//               opacity={0.3}
//             />
//           </mesh>
//           {/* Label above hotspot */}
//           <Html position={[0, 0.6, 0]} distanceFactor={1}>
//             <div
//               style={{
//                 background: "rgba(0, 0, 0, 0.8)",
//                 color: "#fff",
//                 padding: "8px 12px",
//                 borderRadius: "4px",
//                 fontSize: "12px",
//                 whiteSpace: "nowrap",
//                 pointerEvents: "none",
//                 border: "2px solid #ffff00",
//               }}
//             >
//               {label}
//             </div>
//           </Html>
//         </>
//       )}
//     </group>
//   );
// }

// function Model({ url, onHotspotHover }) {
//   const { scene } = useGLTF(url);

//   return (
//     <>
//       <primitive object={scene} scale={2} />

//       {/* Define hotspots based on your FCU diagram */}
//       {/* SAT - Supply Air Temperature */}
//       <Hotspot
//         position={[1.5, 0.5, 0]}
//         label="SAT"
//         data={{ name: "Supply Air Temp", value: "12.5 °C" }}
//         onHover={onHotspotHover}
//       />

//     {/* Valve Position */}
//       <Hotspot
//         position={[-1.5, 0.3, 0]}
//         label="Valve Position"
//         data={{ name: "Valve Position", value: "45 %" }}
//         onHover={onHotspotHover}
//       />

//      {/* Return Air Temperature*/}
//       <Hotspot
//         position={[0, 1.2, 0]}
//         label="Return AIR Temp"
//         data={{ name: "RAT", value: "22.1 °C" }}
//         onHover={onHotspotHover}
//       />

      
//     </>
//   );
// }

// export default function ModelViewer({ url, sensorData }) {
//   const [hoveredInfo, setHoveredInfo] = useState(null);

//   return (
//     <div style={{ position: "relative", width: "100%", height: "100%" }}>
//       <Canvas camera={{ position: [0, 1, 5] }}>
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[2, 2, 2]} />
//         <Model url={url} onHotspotHover={setHoveredInfo} />
//         <OrbitControls autoRotate={false} />
//       </Canvas>

//       {/* Hover Info Display - Tooltip Style */}
//       {hoveredInfo && (
//         <div
//           style={{
//             position: "absolute",
//             bottom: "20px",
//             left: "20px",
//             background: "rgba(0, 0, 0, 0.9)",
//             color: "#fff",
//             padding: "15px 20px",
//             borderRadius: "8px",
//             fontSize: "14px",
//             border: "2px solid #ffff00",
//             maxWidth: "250px",
//           }}
//         >
//           <strong style={{ color: "#ffff00" }}>
//             {hoveredInfo.label}
//           </strong>
//           <div style={{ marginTop: "8px", fontSize: "13px" }}>
//             <p style={{ margin: "4px 0" }}>
//               <strong>{hoveredInfo.data.name}:</strong>
//             </p>
//             <p style={{ margin: "4px 0", color: "#00ff00" }}>
//               {hoveredInfo.data.value}
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



// src/components/ModelViewer.js
import React, { useState, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";
import * as THREE from "three";

// Hotspot component for interactive parts
function Hotspot({ position, label, data, onHover, onClick }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef();

  return (
    <group position={position}>
      {/* Invisible sphere for click/hover detection */}
      <mesh
        ref={ref}
        onPointerEnter={() => {
          setHovered(true);
          onHover({ label, data, position });
        }}
        onPointerLeave={() => {
          setHovered(false);
          onHover(null);
        }}
        onClick={() => {
          onClick({ label, data, position });
        }}
      >
        <sphereGeometry args={[0.3, 8, 8]} />
        <meshBasicMaterial
          transparent
          opacity={0}
          wireframe={false}
        />
      </mesh>

      {/* Yellow indicator - ALWAYS VISIBLE */}
      <mesh>
        <sphereGeometry args={[0.35, 8, 8]} />
        <meshBasicMaterial
          color="#ffff00"
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Label above hotspot - ALWAYS VISIBLE */}
      <Html position={[0, 0.6, 0]} distanceFactor={1}>
        <div
          style={{
            background: "rgba(0, 0, 0, 0.8)",
            color: "#fff",
            padding: "8px 12px",
            borderRadius: "4px",
            fontSize: "12px",
            whiteSpace: "nowrap",
            pointerEvents: "none",
            border: "2px solid #ffff00",
            cursor: "pointer",
          }}
        >
          {label}
        </div>
      </Html>

      {/* Enhanced highlight on hover */}
      {hovered && (
        <mesh>
          <sphereGeometry args={[0.4, 8, 8]} />
          <meshBasicMaterial
            color="#ffff00"
            transparent
            opacity={0.6}
          />
        </mesh>
      )}
    </group>
  );
}

function Model({ url, onHotspotHover, onHotspotClick }) {
  const { scene } = useGLTF(url);

  return (
    <>
      <primitive object={scene} scale={2} />

      {/* Define hotspots based on your FCU diagram */}
      {/* SAT - Supply Air Temperature */}
      <Hotspot
        position={[1.5, 0.5, 0]}
        label="SAT"
        data={{ 
          name: "Supply Air Temperature", 
          value: "12.5 °C",
          unit: "°C",
          description: "Temperature of air supplied to the room",
          status: "Normal"
        }}
        onHover={onHotspotHover}
        onClick={onHotspotClick}
      />

      {/* Valve Position */}
      <Hotspot
        position={[-1.5, 0.3, 0]}
        label="Valve Position"
        data={{ 
          name: "Valve Position", 
          value: "45 %",
          unit: "%",
          description: "Water valve opening percentage",
          status: "Normal"
        }}
        onHover={onHotspotHover}
        onClick={onHotspotClick}
      />

      {/* Return Air Temperature */}
      <Hotspot
        position={[0, 1.2, 0]}
        label="Return AIR Temp"
        data={{ 
          name: "Return Air Temperature", 
          value: "22.1 °C",
          unit: "°C",
          description: "Temperature of air returning from the room",
          status: "Normal"
        }}
        onHover={onHotspotHover}
        onClick={onHotspotClick}
      />
    </>
  );
}

// Popup component with arrow
function PopupWithArrow({ data, onClose }) {
  const [popupPos, setPopupPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!data || !data.position) return;

    const [sensorX, sensorY, sensorZ] = data.position;

    let popupX = 0;
    let popupY = 0;

    if (sensorX > 0) {
      // Right sensor (SAT)
      popupX = 70;
      popupY = 15;
    } else if (sensorX < 0) {
      // Left sensor (Valve)
      popupX = 10;
      popupY = 15;
    } else {
      // Center sensor (RAT)
      popupX = 50;
      popupY = 12;
    }

    setPopupPos({ x: popupX, y: popupY });
  }, [data]);

  if (!data) return null;

  return (
    <div
      style={{
        position: "absolute",
        left: `${popupPos.x}%`,
        top: `${popupPos.y}%`,
        zIndex: 502,
        pointerEvents: "all",
        transform: "translateX(-50%)",
      }}
      data-sensor={data.label}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Popup Box */}
      <div
        style={{
          background: "rgba(0, 0, 0, 0.95)",
          color: "#fff",
          padding: "15px 20px",
          borderRadius: "8px",
          border: "2px solid #ffff00",
          maxWidth: "280px",
          position: "relative",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.8)",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: "12px" }}>
          <h3
            style={{
              color: "#ffff00",
              margin: "0 0 6px 0",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            {data.label}
          </h3>
        </div>

        {/* Content */}
        <div style={{ fontSize: "12px", lineHeight: "1.5" }}>
          <div style={{ marginBottom: "8px" }}>
            <strong>Sensor Name:</strong>
            <p style={{ margin: "2px 0", color: "#00ff00", fontSize: "11px" }}>
              {data.data.name}
            </p>
          </div>

          <div style={{ marginBottom: "8px" }}>
            <strong>Current Value:</strong>
            <p
              style={{
                margin: "2px 0",
                color: "#00ff00",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              {data.data.value}
            </p>
          </div>

          <div style={{ marginBottom: "8px" }}>
            <strong>Description:</strong>
            <p
              style={{
                margin: "2px 0",
                color: "#cccccc",
                fontSize: "11px",
              }}
            >
              {data.data.description}
            </p>
          </div>

          <div
            style={{
              paddingTop: "8px",
              borderTop: "1px solid #ffff00",
              marginTop: "8px",
            }}
          >
            <strong>Status:</strong>
            <p
              style={{
                margin: "2px 0",
                color: "#00ff00",
                fontWeight: "bold",
                fontSize: "11px",
              }}
            >
              {data.data.status}
            </p>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            marginTop: "12px",
            width: "100%",
            padding: "6px 10px",
            background: "#ffff00",
            color: "#000",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "11px",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "#ffff00cc";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "#ffff00";
            e.target.style.transform = "scale(1)";
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default function ModelViewer({ url, sensorData }) {
  const [clickedSensors, setClickedSensors] = useState(new Set());

  const handleHotspotClick = (info) => {
    setClickedSensors((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(info.label)) {
        newSet.delete(info.label);
      } else {
        newSet.add(info.label);
      }
      return newSet;
    });
  };

  const handleClosePopup = (label) => {
    setClickedSensors((prev) => {
      const newSet = new Set(prev);
      newSet.delete(label);
      return newSet;
    });
  };

  const handleCloseAll = () => {
    setClickedSensors(new Set());
  };

  // Get the clicked sensor data
  const clickedData = [
    {
      label: "SAT",
      data: {
        name: "Supply Air Temperature",
        value: "12.5 °C",
        unit: "°C",
        description: "Temperature of air supplied to the room",
        status: "Normal"
      },
      position: [1.5, 0.5, 0]
    },
    {
      label: "Valve Position",
      data: {
        name: "Valve Position",
        value: "45 %",
        unit: "%",
        description: "Water valve opening percentage",
        status: "Normal"
      },
      position: [-1.5, 0.3, 0]
    },
    {
      label: "Return AIR Temp",
      data: {
        name: "Return Air Temperature",
        value: "22.1 °C",
        unit: "°C",
        description: "Temperature of air returning from the room",
        status: "Normal"
      },
      position: [0, 1.2, 0]
    }
  ].filter((sensor) => clickedSensors.has(sensor.label));

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <Canvas camera={{ position: [0, 1, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <Model 
          url={url} 
          onHotspotHover={() => {}}
          onHotspotClick={handleHotspotClick}
        />
        <OrbitControls autoRotate={false} />
      </Canvas>

      {/* SVG overlay for arrow - only inside the canvas container */}
      {clickedData.length > 0 && (
        <svg
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 500,
            pointerEvents: "none",
          }}
        >
          {clickedData.map((sensor) => {
            const [sensorX, sensorY] = sensor.position;

            let sensorScreenX = 0;
            let sensorScreenY = 0;
            let popupX = 0;
            let popupY = 0;

            if (sensorX > 0) {
              sensorScreenX = "75%";
              sensorScreenY = "40%";
              popupX = "70%";
              popupY = "15%";
            } else if (sensorX < 0) {
              sensorScreenX = "25%";
              sensorScreenY = "45%";
              popupX = "10%";
              popupY = "15%";
            } else {
              sensorScreenX = "50%";
              sensorScreenY = "30%";
              popupX = "50%";
              popupY = "12%";
            }

            const rect = document.querySelector('[data-sensor="' + sensor.label + '"]')?.getBoundingClientRect();
            const containerRect = document.querySelector('[data-canvas-container]')?.getBoundingClientRect();

            if (!rect || !containerRect) return null;

            const x1 = rect.left - containerRect.left + rect.width / 2;
            const y1 = rect.top - containerRect.top + rect.height / 2;
            const x2 = (popupX.includes('%') ? parseFloat(popupX) / 100 * containerRect.width : parseFloat(popupX));
            const y2 = (popupY.includes('%') ? parseFloat(popupY) / 100 * containerRect.height : parseFloat(popupY)) + 80;

            return (
              <g key={sensor.label}>
                <line
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#ffff00"
                  strokeWidth="3"
                  filter="drop-shadow(0 2px 6px rgba(0,0,0,0.7))"
                />
                <polygon
                  points={`${x2},${y2} ${x2 - 15},${y2 - 15} ${x2 + 15},${y2 - 15}`}
                  fill="#ffff00"
                  filter="drop-shadow(0 2px 6px rgba(0,0,0,0.7))"
                />
              </g>
            );
          })}
        </svg>
      )}

      {/* Popups inside the modal */}
      {clickedData.length > 0 && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 501,
            pointerEvents: "none",
          }}
          data-canvas-container
        >
          {clickedData.map((sensor) => (
            <PopupWithArrow
              key={sensor.label}
              data={sensor}
              onClose={() => handleClosePopup(sensor.label)}
            />
          ))}
        </div>
      )}
    </div>
  );
}