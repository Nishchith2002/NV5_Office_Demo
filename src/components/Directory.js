// import React, { useState, useMemo } from 'react';
// import floorplanImage from '../assets/10F-3d-layout.png'; // Import your floor plan image

// // Employee data matching the 8 seats shown in your floor plan
// const employeeData = [
//   { "seat": 1, "name": "Dominic NG", "group": "Net Zero", "top": 35.0, "left": 22.5 },
//   { "seat": 2, "name": "Ricky HON", "group": "Net Zero", "top": 41.0, "left": 22.5 },
//   { "seat": 3, "name": "Pulkit Sharma", "group": "Planning & Design", "top": 35.0,"left": 36.0 },
//   { "seat": 4, "name": "Dyanne Domingo", "group": "Mission Critical", "top": 43.0, "left": 36.0 },
//   { "seat": 5, "name": "Kyle BOC", "group": "Net Zero", "top": 48.0, "left": 36.0 },
//   { "seat": 6, "name": "Joanna Wang", "group": "Planning & Design", "top": 53.0, "left": 36.0 },
//   { "seat": 7, "name": "Jermy Pedregosa", "group": "Mission Critical", "top": 46.0, "left": 44.0 },
//   { "seat": 8, "name": "Abhijeet", "group": "Net Zero", "top": 54.0, "left": 44.0 }
// ];

// export default function Directory() {
//   const [query, setQuery] = useState("");
//   const [hovered, setHovered] = useState(null);

//   const highlightedSeats = useMemo(() => {
//     const q = query.trim().toLowerCase();
//     if (!q) return new Set();
    
//     const matches = employeeData.filter(
//       (employee) =>
//         employee.name.toLowerCase().includes(q) ||
//         employee.group.toLowerCase().includes(q) ||
//         String(employee.seat).toLowerCase().includes(q)
//     );
    
//     return new Set(matches.map((match) => match.seat));
//   }, [query]);

//   const showDimEffect = query.trim().length > 0;
//   const matchCount = highlightedSeats.size;

//   const groupColors = {
//     "Mission Critical": "#ff6b6b",
//     "Net Zero": "#4ecdc4", 
//     "Planning & Design": "#45b7d1"
//   };

//   return (
//     <div style={{ 
//       maxWidth: '1200px', 
//       margin: '0 auto', 
//       padding: '20px',
//       fontFamily: 'Arial, sans-serif'
//     }}>
//       {/* Header */}
//       <h2 style={{ 
//         textAlign: 'center', 
//         marginBottom: '30px', 
//         color: '#333',
//         fontSize: '28px',
//         fontWeight: 'bold'
//       }}>
//          Office Directory - Floor Plan
//       </h2>
      
//       {/* Search Controls */}
//       <div style={{ 
//         display: 'flex', 
//         gap: '12px', 
//         alignItems: 'center', 
//         justifyContent: 'center',
//         marginBottom: '25px',
//         flexWrap: 'wrap'
//       }}>
//         <input
//           type="text"
//           placeholder="Search by name, seat (1-8), or group (Mission Critical, Net Zero, Planning & Design)"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           style={{
//             width: '500px',
//             maxWidth: '90%',
//             padding: '12px 16px',
//             border: '2px solid #ddd',
//             borderRadius: '10px',
//             fontSize: '14px',
//             outline: 'none',
//             transition: 'all 0.3s ease',
//             boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
//           }}
//           onFocus={(e) => {
//             e.target.style.borderColor = '#4ecdc4';
//             e.target.style.boxShadow = '0 0 0 3px rgba(78, 205, 196, 0.1)';
//           }}
//           onBlur={(e) => {
//             e.target.style.borderColor = '#ddd';
//             e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
//           }}
//         />
        
//         <button
//           onClick={() => setQuery("")}
//           style={{
//             padding: '12px 24px',
//             border: '2px solid #ddd',
//             background: '#fff',
//             borderRadius: '10px',
//             cursor: 'pointer',
//             fontSize: '14px',
//             fontWeight: '500',
//             transition: 'all 0.3s ease',
//             boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
//           }}
//           onMouseOver={(e) => {
//             e.target.style.background = '#f8f9fa';
//             e.target.style.borderColor = '#6c757d';
//             e.target.style.transform = 'translateY(-1px)';
//           }}
//           onMouseOut={(e) => {
//             e.target.style.background = '#fff';
//             e.target.style.borderColor = '#ddd';
//             e.target.style.transform = 'translateY(0)';
//           }}
//         >
//           Clear
//         </button>
        
//         {query && (
//           <div style={{
//             display: 'inline-flex',
//             alignItems: 'center',
//             gap: '6px',
//             padding: '8px 16px',
//             borderRadius: '25px',
//             background: 'linear-gradient(135deg, #e3f2fd, #bbdefb)',
//             border: '1px solid #90caf9',
//             fontSize: '13px',
//             color: '#1565c0',
//             fontWeight: '600',
//             boxShadow: '0 2px 8px rgba(21, 101, 192, 0.15)'
//           }}>
//             <span></span>
//             <span>{matchCount} match{matchCount !== 1 ? 'es' : ''}</span>
//           </div>
//         )}
//       </div>

//       {/* Group Legend */}
//       <div style={{
//         display: 'flex',
//         justifyContent: 'center',
//         gap: '20px',
//         marginBottom: '25px',
//         flexWrap: 'wrap',
//         padding: '15px',
//         background: '#f8f9fa',
//         borderRadius: '12px',
//         border: '1px solid #e9ecef'
//       }}>
//         <div style={{
//           fontSize: '14px',
//           fontWeight: '600',
//           color: '#495057',
//           alignSelf: 'center'
//         }}>
//           Group Legend:
//         </div>
//         {Object.entries(groupColors).map(([group, color]) => (
//           <div key={group} style={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: '8px',
//             padding: '6px 12px',
//             background: '#fff',
//             borderRadius: '20px',
//             border: '1px solid #dee2e6',
//             fontSize: '13px',
//             color: '#495057',
//             fontWeight: '500',
//             boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//           }}>
//             <div style={{
//               width: '14px',
//               height: '14px',
//               borderRadius: '50%',
//               backgroundColor: color,
//               border: '2px solid #333',
//               boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
//             }}></div>
//             <span>{group}</span>
//           </div>
//         ))}
//       </div>

//       {/* Floor Plan Container */}
//       <div style={{
//         position: 'relative',
//         width: '100%',
//         border: '3px solid #e9ecef',
//         borderRadius: '15px',
//         overflow: 'hidden',
//         boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
//         background: '#fff'
//       }}>
//         {/* Floor Plan Image - Using imported image */}
//         <img 
//           src={floorplanImage} 
//           alt="Office Floor Plan"
//           style={{
//             width: '100%',
//             height: 'auto',
//             display: 'block'
//           }}
//           onError={(e) => {
//             // Fallback if image doesn't load
//             e.target.style.display = 'none';
//             e.target.nextSibling.style.display = 'flex';
//           }}
//         />
        
//         {/* Fallback placeholder if image doesn't load */}
//         <div style={{
//           display: 'none',
//           width: '100%',
//           height: '600px',
//           background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
//           alignItems: 'center',
//           justifyContent: 'center',
//           fontSize: '18px',
//           color: '#6c757d',
//           textAlign: 'center',
//           flexDirection: 'column',
//           gap: '15px'
//         }}>
//           <div style={{ fontSize: '48px' }}></div>
//           <div style={{ fontSize: '20px', fontWeight: 'bold' }}>Floor Plan</div>
//           <div style={{ fontSize: '14px', opacity: 0.7 }}>
//             Place your floor plan image in: <code>./assets/floorplan.png</code>
//           </div>
//         </div>

//         {/* Desk Markers */}
//         {employeeData.map((employee) => {
//           const isHighlighted = highlightedSeats.has(employee.seat);
//           const baseColor = groupColors[employee.group] || '#666';
          
//           return (
//             <div
//               key={employee.seat}
//               style={{
//                 position: 'absolute',
//                 top: `${employee.top}%`,
//                 left: `${employee.left}%`,
//                 width: '18px',
//                 height: '18px',
//                 borderRadius: '50%',
//                 backgroundColor: isHighlighted ? '#ffd700' : baseColor,
//                 border: isHighlighted ? '3px solid #ff4444' : '3px solid #fff',
//                 transform: 'translate(-50%, -50%)',
//                 cursor: 'pointer',
//                 transition: 'all 0.3s ease',
//                 opacity: showDimEffect && !isHighlighted ? 0.25 : 1,
//                 boxShadow: isHighlighted 
//                   ? '0 0 0 4px rgba(255, 68, 68, 0.3), 0 4px 15px rgba(0,0,0,0.3)' 
//                   : '0 3px 8px rgba(0,0,0,0.2)',
//                 zIndex: isHighlighted ? 100 : 10
//               }}
//               onMouseEnter={() => setHovered(employee)}
//               onMouseLeave={() => setHovered(null)}
//               onMouseOver={(e) => {
//                 if (!isHighlighted) {
//                   e.target.style.transform = 'translate(-50%, -50%) scale(1.4)';
//                   e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.35)';
//                   e.target.style.zIndex = '50';
//                 }
//               }}
//               onMouseOut={(e) => {
//                 if (!isHighlighted) {
//                   e.target.style.transform = 'translate(-50%, -50%) scale(1)';
//                   e.target.style.boxShadow = '0 3px 8px rgba(0,0,0,0.2)';
//                   e.target.style.zIndex = '10';
//                 }
//               }}
//             >
//               {/* Seat number inside the marker */}
//               <div style={{
//                 position: 'absolute',
//                 top: '50%',
//                 left: '50%',
//                 transform: 'translate(-50%, -50%)',
//                 fontSize: '10px',
//                 fontWeight: 'bold',
//                 color: isHighlighted ? '#333' : '#fff',
//                 textShadow: isHighlighted ? 'none' : '0 1px 2px rgba(0,0,0,0.5)'
//               }}>
//                 {employee.seat}
//               </div>
//             </div>
//           );
//         })}

//         {/* Tooltip */}
//       {hovered && (
//   <div
//     style={{
//       position: 'absolute',
//       top: `calc(${hovered.top}% - 80px)`,
//       left: `calc(${hovered.left}% + 25px)`,
//       backgroundColor: '#2c3e50',
//       color: 'white',
//       padding: '12px 16px',
//       borderRadius: '10px',
//       fontSize: '14px',
//       fontWeight: '500',
//       boxShadow: '0 8px 25px rgba(0,0,0,0.4)',
//       zIndex: 1000,
//       pointerEvents: 'none',   //  important!
//       whiteSpace: 'nowrap',
//       maxWidth: '250px',
//       minWidth: '180px'
//     }}
//   >
//     <div style={{ fontWeight: 'bold', marginBottom: '6px', fontSize: '15px', color: '#ecf0f1' }}>
//       晴 Seat {hovered.seat}
//     </div>
//     <div style={{ marginBottom: '6px', fontSize: '14px', color: '#bdc3c7' }}>
//        {hovered.name}
//     </div>
//     <div style={{ fontSize: '13px', color: groupColors[hovered.group], fontWeight: 'bold' }}>
//        {hovered.group}
//     </div>

//     {/* Tooltip arrow */}
//     <div style={{
//       position: 'absolute',
//       top: '50%',
//       left: '-8px',
//       transform: 'translateY(-50%)',
//       width: 0,
//       height: 0,
//       borderTop: '8px solid transparent',
//       borderBottom: '8px solid transparent',
//       borderRight: '8px solid #2c3e50'
//     }} />
//   </div>
// )}

//       </div>

//       {/* Stats Summary */}
//       <div style={{
//         marginTop: '25px',
//         padding: '20px',
//         background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
//         borderRadius: '12px',
//         textAlign: 'center',
//         border: '1px solid #dee2e6'
//       }}>
//         <h3 style={{
//           margin: '0 0 15px 0',
//           color: '#495057',
//           fontSize: '18px',
//           fontWeight: 'bold'
//         }}>
//            Department Statistics
//         </h3>
//         <div style={{ 
//           display: 'flex', 
//           justifyContent: 'space-around', 
//           flexWrap: 'wrap', 
//           gap: '20px' 
//         }}>
//           {Object.entries(
//             employeeData.reduce((acc, emp) => {
//               acc[emp.group] = (acc[emp.group] || 0) + 1;
//               return acc;
//             }, {})
//           ).map(([group, count]) => (
//             <div key={group} style={{ 
//               textAlign: 'center',
//               padding: '15px',
//               background: '#fff',
//               borderRadius: '10px',
//               boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
//               minWidth: '120px',
//               border: '1px solid #e9ecef'
//             }}>
//               <div style={{ 
//                 fontSize: '32px', 
//                 fontWeight: 'bold', 
//                 color: groupColors[group],
//                 marginBottom: '8px',
//                 textShadow: '0 1px 3px rgba(0,0,0,0.1)'
//               }}>
//                 {count}
//               </div>
//               <div style={{ 
//                 fontSize: '13px', 
//                 color: '#6c757d',
//                 fontWeight: '600',
//                 textTransform: 'uppercase',
//                 letterSpacing: '0.5px'
//               }}>
//                 {group}
//               </div>
//             </div>
//           ))}
          
//           {/* Total count */}
//           <div style={{ 
//             textAlign: 'center',
//             padding: '15px',
//             background: '#fff',
//             borderRadius: '10px',
//             boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
//             minWidth: '120px',
//             border: '2px solid #28a745'
//           }}>
//             <div style={{ 
//               fontSize: '32px', 
//               fontWeight: 'bold', 
//               color: '#28a745',
//               marginBottom: '8px',
//               textShadow: '0 1px 3px rgba(0,0,0,0.1)'
//             }}>
//               {employeeData.length}
//             </div>
//             <div style={{ 
//               fontSize: '13px', 
//               color: '#6c757d',
//               fontWeight: '600',
//               textTransform: 'uppercase',
//               letterSpacing: '0.5px'
//             }}>
//               Total Employees
//             </div>
//           </div>
//         </div>
//       </div>
      
      
//     </div>
//   );
// }






// import React, { useState, useMemo } from 'react';
// import floorplanImage from '../assets/10F-3d-layout.png';

// // ✅ Import your logos
// import missionLogo from '../assets/MissionCritical.png';
// import techLogo from '../assets/technology.png';
// import designLogo from '../assets/planningdesigning.png';
// import netzeroLogo from '../assets/NV5_Logo.png';

// // Example employee data
// const employeeData = [
//   { "seat": 1, "name": "Katherine Chan", "group": "Net Zero", "department": "Accounting", "top": 31.5, "left": 17.2 },
//   { "seat": 2, "name": "Kammy Yuen", "group": "Net Zero", "department": "NZ", "top": 31.5, "left": 19.8 },
//   { "seat": 3, "name": "Joyce Tam", "group": "Net Zero", "department": "NZ", "top": 35.3, "left": 17.2 },
//   { "seat": 4, "name": "Taksun Poon", "group": "Net Zero", "department": "NZ", "top": 35.3, "left": 19.8 },
//   { "seat": 5, "name": "Kyle BOC", "group": "Net Zero", "department": "NZ", "top": 48.0, "left": 36.0 },
//   { "seat": 6, "name": "Joanna Wang", "group": "Planning & Design", "department": "Design", "top": 53.0, "left": 36.0 },
//   { "seat": 7, "name": "Jermy Pedregosa", "group": "Mission Critical", "department": "Cx", "top": 46.0, "left": 44.0 },
//   { "seat": 8, "name": "Abhijeet", "group": "Net Zero", "department": "NZ", "top": 54.0, "left": 44.0 }
// ];


// export default function Directory() {
//   const [query, setQuery] = useState("");
//   const [hovered, setHovered] = useState(null);

//   const highlightedSeats = useMemo(() => {
//     const q = query.trim().toLowerCase();
//     if (!q) return new Set();
//     const matches = employeeData.filter(
//       (emp) =>
//         emp.name.toLowerCase().includes(q) ||
//         emp.group.toLowerCase().includes(q)
//     );
//     return new Set(matches.map((match) => match.seat));
//   }, [query]);

//   const showDimEffect = query.trim().length > 0;
//   const matchCount = highlightedSeats.size;

//   // Colors per group
//   const groupColors = {
//     "Mission Critical": "#ff6b6b",
//     "Technology": "#f39c12",
//     "Planning & Design": "#45b7d1",
//     "Net Zero": "#AB5948"
//   };

//   // Logos per group
//   const groupLogos = {
//     "Mission Critical": missionLogo,
//     "Technology": techLogo,
//     "Planning & Design": designLogo,
//     "Net Zero": netzeroLogo
//   };

//   return (
//     <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
//       {/* Header */}
//       <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>
//          Office Directory - Floor Plan
//       </h2>

//       {/* Search */}
//       <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginBottom: '20px', flexWrap: 'wrap' }}>
//         <input
//           type="text"
//           placeholder="Search by name or group"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           style={{ width: '400px', padding: '10px 14px', border: '2px solid #ddd', borderRadius: '8px' }}
//         />
//         <button onClick={() => setQuery("")} style={{ padding: '10px 20px', border: '1px solid #ccc', borderRadius: '8px', cursor: 'pointer' }}>
//           Clear
//         </button>
//         {query && (
//           <span style={{ padding: '6px 12px', borderRadius: '12px', background: '#e3f2fd', border: '1px solid #90caf9', fontSize: '13px' }}>
//             {matchCount} match{matchCount !== 1 ? 'es' : ''}
//           </span>
//         )}
//       </div>

//       {/* Group Legend (color + logo) */}
//       <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '25px', flexWrap: 'wrap' }}>
//         {Object.entries(groupColors).map(([group, color]) => (
//           <div key={group} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '6px 12px', background: '#fff', borderRadius: '20px', border: '1px solid #ddd' }}>
//             {/* colored dot */}
//             <div style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: color, border: '2px solid #333' }} />
//             {/* group logo */}
//             <img src={groupLogos[group]} alt={group} style={{ width: '70px', height: 'auto', objectFit: 'contain' }} />
//           </div>
//         ))}
//       </div>

//       {/* Floor Plan */}
//       <div style={{ position: 'relative', width: '100%', border: '2px solid #ddd', borderRadius: '10px', overflow: 'hidden' }}>
//         <img src={floorplanImage} alt="Office Floor Plan" style={{ width: '100%', height: 'auto', display: 'block' }} />

//         {/* Desk markers (just color, no numbers) */}
//         {employeeData.map((emp) => {
//           const isHighlighted = highlightedSeats.has(emp.seat);
//           const baseColor = groupColors[emp.group] || '#666';
//           return (
//             <div
//               key={emp.seat}
//               style={{
//                 position: 'absolute',
//                 top: `${emp.top}%`,
//                 left: `${emp.left}%`,
//                 width: '16px',
//                 height: '16px',
//                 borderRadius: '50%',
//                 backgroundColor: isHighlighted ? '#ffd700' : baseColor,
//                 border: isHighlighted ? '2px solid #ff4444' : '2px solid #fff',
//                 transform: 'translate(-50%, -50%)',
//                 cursor: 'pointer',
//                 opacity: showDimEffect && !isHighlighted ? 0.25 : 1,
//                 transition: 'all 0.2s ease'
//               }}
//               onMouseEnter={() => setHovered(emp)}
//               onMouseLeave={() => setHovered(null)}
//             />
//           );
//         })}

//         {/* Tooltip */}
//         {hovered && (
//           <div
//             style={{
//               position: 'absolute',
//               top: `calc(${hovered.top}% - 60px)`,
//               left: `calc(${hovered.left}% + 20px)`,
//               backgroundColor: '#2c3e50',
//               color: 'white',
//               padding: '10px 14px',
//               borderRadius: '8px',
//               fontSize: '13px',
//               boxShadow: '0 6px 15px rgba(0,0,0,0.3)',
//               pointerEvents: 'none',
//               whiteSpace: 'nowrap'
//             }}
//           >
//             <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>{hovered.name}</div>
//             <div style={{ fontSize: '12px', color: groupColors[hovered.group] }}>{hovered.group}</div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }



import React, { useState, useMemo } from 'react';
import floorplanImage from '../assets/10F_3d_layout.png';

// ✅ Import your logos
import missionLogo from '../assets/MissionCritical.png';
import techLogo from '../assets/technology.png';
import designLogo from '../assets/planningdesigning.png';
import netzeroLogo from '../assets/NV5_Logo.png';
import international from  '../assets/nv5_international.png'



// --- uniform card + image sizing for group logos ---
const CARD_STYLE = {
  width: 228,           // all logo cards same size
  height: 88,
  borderRadius: 18,
  background: "#fff",
  border: "1px solid #ddd",
  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  padding: "10px 14px",
  display: "flex",
  alignItems: "center",
  gap: 8
};

// the image gets a fixed box; the logo is *contained* inside it
const IMG_BOX_STYLE = {
  width: 120,           // ← tweak these two to taste
  height: 36,
  objectFit: "contain",
  display: "block"
};


// Example employee data (with department)
// const employeeData = [
//   { "seat": 1, "name": "Katherine Chan", "group": "International", "department": "Accounting", "top": 31.5, "left": 17.2 },
//   { "seat": 2, "name": "Kammy Yuen", "group": "International", "department": "HR", "top": 31.5, "left": 19.8 },
//   { "seat": 3, "name": "Joyce Tam", "group": "International", "department": "Accounting", "top": 35.3, "left": 17.2 },
//   { "seat": 4, "name": "Taksun Poon", "group": "International", "department": "Accounting", "top": 35.3, "left": 19.8 },//team accounting

//   { "seat": 5, "name": "Derek Chan", "group": "International", "department": "Admin", "top": 31.5, "left": 22.5 },
//   { "seat": 6, "name": "Rita Wong", "group": "International", "department": "Admin", "top": 31.5, "left": 25.0 },
//   { "seat": 7, "name": "Kate Cheng ", "group": "International", "department": "Admin", "top": 35.3, "left": 22.5 },
//   { "seat": 8, "name": "Owen Lam", "group": "International", "department": "Admin", "top": 35.3, "left": 25 },//

//     // { "seat": 9, "name": "Benjamin Lin", "group": "International", "department": "Admin", "top": 37.2, "left": 25 },
//   { "seat": 9, "name": "Tania Tang", "group": "International", "department": "Marketing & Stra. Ops", "top": 37.2, "left": 17.2 },
//   { "seat": 10, "name": "Sophia Wong", "group": "International", "department": "Marketing & Stra. Ops", "top": 37.2, "left": 19.8 },
//    { "seat": 11, "name": "Vania Lidvina", "group": "International", "department": "Marketing & Stra. Ops", "top": 41.2, "left": 19.8 },
//       { "seat": 12, "name": "David Garton ", "group": "Mission Critical", "department": "", "top": 45.4, "left": 22.2 },
//     { "seat": 13, "name": "ETAP", "group": "Mission Critical", "department": "Design", "top": 31.5, "left": 30.8 },
//     { "seat": 14, "name": "Anthea Chan", "group": "Mission Critical", "department": "Design", "top": 35.5, "left": 30.8 },
//     { "seat": 15, "name": "YC Sit", "group": "Mission Critical", "department": "Design", "top": 35.5, "left": 33.5 },
//     { "seat": 16, "name": "Jonathan Tai", "group": "Mission Critical", "department": "Design", "top": 35.5, "left": 36 },
//     { "seat": 17, "name": "Iron Wan", "group": "Mission Critical", "department": "Design", "top": 37.2, "left": 30.8 },
//     { "seat": 18, "name": "Darren Sutandar", "group": "Mission Critical", "department": "Design", "top": 37.2, "left": 33.5 },
//     { "seat": 19, "name": "Mika Rutulangi", "group": "Mission Critical", "department": "Design", "top": 37.2, "left": 36 },
//      { "seat": 20, "name": "Aqib Nazir", "group": "Mission Critical", "department": "Design", "top": 41.2, "left": 36 },
//        { "seat": 21, "name": "Carlos Ponton", "group": "Mission Critical", "department": "Design", "top": 43.2, "left": 30.8 },
//          { "seat": 22, "name": "Adeline puget", "group": "Mission Critical", "department": "Design", "top": 43.2, "left": 33.5 },
//            { "seat": 23, "name": "Jeya Raghu", "group": "Mission Critical", "department": "Design", "top": 43.2, "left": 36 },
//            { "seat": 24, "name": "Lanmei Fu", "group": "Mission Critical", "department": "Design", "top": 47.2, "left": 30.8 },
//            { "seat": 25, "name": "Michael Pratana", "group": "Mission Critical", "department": "Design", "top": 47.2, "left": 33.5 },
//            { "seat": 26, "name": "Muthu Alagururai", "group": "Mission Critical", "department": "Design", "top": 47.2, "left": 36 },
//            { "seat": 27, "name": "Bryan Eagan", "group": "Mission Critical", "department": "Design", "top": 49.2, "left": 30.8 },
//            { "seat": 28, "name": "Rachel Rusli", "group": "Mission Critical", "department": "Design", "top": 49.2, "left": 33.5 },
//            { "seat": 29, "name": "Ryando Critianto", "group": "Mission Critical", "department": "Design", "top": 49.2, "left": 36 },
//         //    { "seat": 30, "name": "Ryando Critianto", "group": "Mission Critical", "department": "Design", "top": 52.8, "left": 30.8 },
//         { "seat": 30, "name": "Chris Ryu", "group": "Mission Critical", "department": "Cx", "top": 40, "left": 46.5 },
//         { "seat": 31, "name": "Chun Yin", "group": "Mission Critical", "department": "Cx", "top": 42.2, "left": 44.2 },
//          { "seat": 32, "name": "Jede Feng", "group": "Mission Critical", "department": "Cx", "top": 42.2, "left": 47 },
//           { "seat": 33, "name": "Jeremy Curtis", "group": "Mission Critical", "department": "Cx", "top": 46.2, "left": 44.2 },
//            { "seat": 34, "name": "Steve Fung", "group": "Mission Critical", "department": "Cx", "top": 46.2, "left": 47 },
//            { "seat": 35, "name": "Cindy Kwok", "group": "Mission Critical", "department": "Cx", "top": 48.2, "left": 44.2 },
//             { "seat": 36, "name": "Tim Lai", "group": "Mission Critical", "department": "Cx", "top": 48.2, "left": 47 },
           
//            { "seat": 32, "name": "Ken Yuen", "group": "Mission Critical", "department": "Cx", "top": 51.8, "left": 44.2 },
//             { "seat": 33, "name": "Joe Ng", "group": "Mission Critical", "department": "Cx", "top": 51.8, "left": 47 },
//             { "seat": 34, "name": "Chisom Eg", "group": "Mission Critical", "department": "Cx", "top": 53.8, "left": 44.2 },
//             { "seat": 35, "name": "Lynn Yang", "group": "Mission Critical", "department": "Cx", "top": 53.8, "left": 47 },
//             { "seat": 36, "name": "Jade Chen", "group": "Mission Critical", "department": "Cx", "top": 57.8, "left": 44.2 },
//             { "seat": 37, "name": "Audie Astawa", "group": "Mission Critical", "department": "Cx", "top": 57.8, "left": 47 },
//             //  { "seat": 38, "name": "Audie Astawa", "group": "Mission Critical", "department": "Cx", "top": 59.8, "left": 44.2 },
//             //   {"seat": 39, "name": "Joe Ng", "group": "Mission Critical", "department": "Cx", "top": 59.8, "left": 47 },
//             //     { "seat": 40, "name": "Chisom Elodichukwu", "group": "Mission Critical", "department": "Cx", "top": 63.5, "left": 44.2 },
//             //      {"seat": 41, "name": "Lynn Yang", "group": "Mission Critical", "department": "Cx", "top": 63.5, "left": 47 },
//             //       { "seat": 43, "name": "Jade Chen", "group": "Mission Critical", "department": "Cx", "top": 65.8, "left": 44.2 },
//             //        {"seat": 44, "name": "Audie Astawa", "group": "Mission Critical", "department": "Cx", "top": 65.8, "left": 47 },

//              { "seat": 31, "name": "Joanna Wang ", "group": "Net Zero", "department": "NZ", "top": 40, "left": 49.3 },
//               { "seat": 31, "name": "Anthony Huang", "group": "Net Zero", "department": "NZ", "top": 40, "left": 52 },
//               { "seat": 45, "name": "Tony Wong", "group": "Net Zero", "department": "NZ", "top": 42.2, "left": 49.5 },
//               { "seat": 45, "name": "Woody Woo", "group": "Net Zero", "department": "NZ", "top": 42.2, "left": 52.2 },
//               { "seat": 47, "name": "Mark Lam", "group": "Net Zero", "department": "NZ", "top": 46.2, "left": 49.5 },
//               { "seat": 48, "name": "Leo Liu", "group": "Net Zero", "department": "NZ", "top": 46.2, "left":52.2 },
//                     { "seat": 45, "name": "Ricky Hon ", "group": "Net Zero", "department": "NZ", "top": 48.2, "left": 49.5 },
//                     { "seat": 46, "name": "Marvin Mak", "group": "Net Zero", "department": "NZ", "top": 48.2, "left": 52.2 },
//                      { "seat": 47, "name": "Zack Liu", "group": "Net Zero", "department": "NZ", "top": 51.8, "left": 49.5 },
//                      { "seat": 48, "name": "Gilderoy Ng", "group": "Net Zero", "department": "NZ", "top": 51.8, "left":52.2 },
//                      { "seat": 49, "name": "Dyanne D.", "group": "Net Zero", "department": "NZ", "top": 53.8, "left":49.5 },
//                       { "seat": 50, "name": "Pulkit Sharma", "group": "Net Zero", "department": "NZ", "top": 53.8, "left":52.2 },
//                        { "seat": 51, "name": "Dominic Ng", "group": "Net Zero", "department": "NZ", "top": 57.8, "left":49.5 },
//                         { "seat": 52, "name": "Workstation", "group": "Net Zero", "department": "NZ", "top": 57.8, "left":52.2 },
//                         //   { "seat": 53, "name": "Mark Lam", "group": "Net Zero", "department": "NZ", "top": 59.8, "left":49.5 },
//                         //   { "seat": 54, "name": "Leo Liu", "group": "Net Zero", "department": "NZ", "top": 59.8, "left":52.2 },
//                         //    { "seat": 55, "name": "Zack Liu", "group": "Net Zero", "department": "NZ", "top": 63.5, "left":49.5 },
//                         //     { "seat": 56, "name": "Tony Wong", "group": "Net Zero", "department": "NZ", "top": 63.5, "left":52.2 },
//                         //      { "seat": 57, "name": "Gilderoy Ng", "group": "Net Zero", "department": "NZ", "top": 65.8, "left":49.5 },
//                         //         { "seat": 58, "name": "Woody Woo", "group": "Net Zero", "department": "NZ", "top": 65.8, "left":52.2 },

//                          { "seat": 29, "name": "Iris Chan", "group": "Net Zero", "department": "NZ", "top": 58, "left": 34 },
//                          { "seat": 29, "name": "Gary Hui", "group": "Net Zero", "department": "NZ", "top": 60.5, "left": 36.5 },


                    


// ];


const employeeData = [
  { seat: 1,  name: "Katherine Chan", group: "International",     department: "Accounting",              top: 31.5, left: 17.2 },
  { seat: 2,  name: "Kammy Yuen",     group: "International",     department: "HR",                      top: 31.5, left: 19.8 },
  { seat: 3,  name: "Joyce Tam",      group: "International",     department: "Accounting",              top: 35.3, left: 17.2 },
  { seat: 4,  name: "Taksun Poon",    group: "International",     department: "Accounting",              top: 35.3, left: 19.8 },

  { seat: 5,  name: "Derek Chan",     group: "International",     department: "Admin",                   top: 31.5, left: 22.5 },
  { seat: 6,  name: "Rita Wong",      group: "International",     department: "Admin",                   top: 31.5, left: 25.0 },
  { seat: 7,  name: "Kate Cheng",     group: "International",     department: "Admin",                   top: 35.3, left: 22.5 },
  { seat: 8,  name: "Owen Lam",       group: "International",     department: "Admin",                   top: 35.3, left: 25.0 },

  { seat: 9,  name: "Tania Tang",     group: "International",     department: "Marketing & Stra. Ops",   top: 37.2, left: 17.2 },
  { seat:10,  name: "Sophia Wong",    group: "International",     department: "Marketing & Stra. Ops",   top: 37.2, left: 19.8 },
  { seat:11,  name: "Vania Lidvina",  group: "International",     department: "Marketing & Stra. Ops",   top: 41.2, left: 19.8 },

  { seat:12,  name: "David Garton",   group: "Mission Critical",  department: "Design",                        top: 45.4, left: 22.2 },

  { seat:13,  name: "ETAP",           group: "Mission Critical",  department: "Design",                  top: 31.5, left: 30.8 },
  { seat:14,  name: "Anthea Chan",    group: "Mission Critical",  department: "Design",                  top: 35.5, left: 30.8 },
  { seat:15,  name: "YC Sit",         group: "Mission Critical",  department: "Design",                  top: 35.5, left: 33.5 },
  { seat:16,  name: "Jonathan Tai",   group: "Mission Critical",  department: "Design",                  top: 35.5, left: 36.0 },
  { seat:17,  name: "Iron Wan",       group: "Mission Critical",  department: "Design",                  top: 37.2, left: 30.8 },
  { seat:18,  name: "Darren Sutandar",group: "Mission Critical",  department: "Design",                  top: 37.2, left: 33.5 },
  { seat:19,  name: "Mika Rutulangi", group: "Mission Critical",  department: "Design",                  top: 37.2, left: 36.0 },
  { seat:20,  name: "Aqib Nazir",     group: "Mission Critical",  department: "Design",                  top: 41.2, left: 36.0 },
  { seat:21,  name: "Carlos Ponton",  group: "Mission Critical",  department: "Design",                  top: 43.2, left: 30.8 },
  { seat:22,  name: "Adeline puget",  group: "Mission Critical",  department: "Design",                  top: 43.2, left: 33.5 },
  { seat:23,  name: "Jeya Raghu",     group: "Mission Critical",  department: "Design",                  top: 43.2, left: 36.0 },
  { seat:24,  name: "Lanmei Fu",      group: "Mission Critical",  department: "Design",                  top: 47.2, left: 30.8 },
  { seat:25,  name: "Michael Pratana",group: "Mission Critical",  department: "Design",                  top: 47.2, left: 33.5 },
  { seat:26,  name: "Muthu Alagururai",group:"Mission Critical",  department: "Design",                  top: 47.2, left: 36.0 },
  { seat:27,  name: "Bryan Eagan",    group: "Mission Critical",  department: "Design",                  top: 49.2, left: 30.8 },
  { seat:28,  name: "Rachel Rusli",   group: "Mission Critical",  department: "Design",                  top: 49.2, left: 33.5 },
  { seat:29,  name: "Ryando Critianto",group:"Mission Critical",  department: "Design",                  top: 49.2, left: 36.0 },

  { seat:30,  name: "Chris Ryu",      group: "Mission Critical",  department: "Cx",                      top: 40.0, left: 46.5 },
  { seat:31,  name: "Chun Yin",       group: "Mission Critical",  department: "Cx",                      top: 42.2, left: 44.2 },
  { seat:32,  name: "Jede Feng",      group: "Mission Critical",  department: "Cx",                      top: 42.2, left: 47.0 },
  { seat:33,  name: "Jeremy Curtis",  group: "Mission Critical",  department: "Cx",                      top: 46.2, left: 44.2 },
  { seat:34,  name: "Steve Fung",     group: "Mission Critical",  department: "Cx",                      top: 46.2, left: 47.0 },
  { seat:35,  name: "Cindy Kwok",     group: "Mission Critical",  department: "Cx",                      top: 48.2, left: 44.2 },
  { seat:36,  name: "Tim Lai",        group: "Mission Critical",  department: "Cx",                      top: 48.2, left: 47.0 },

  { seat:37,  name: "Ken Yuen",       group: "Mission Critical",  department: "Cx",                      top: 51.8, left: 44.2 },
  { seat:38,  name: "Joe Ng",         group: "Mission Critical",  department: "Cx",                      top: 51.8, left: 47.0 },
  { seat:39,  name: "Chisom Eg",      group: "Mission Critical",  department: "Cx",                      top: 53.8, left: 44.2 },
  { seat:40,  name: "Lynn Yang",      group: "Mission Critical",  department: "Cx",                      top: 53.8, left: 47.0 },
  { seat:41,  name: "Jade Chen",      group: "Mission Critical",  department: "Cx",                      top: 57.8, left: 44.2 },
  { seat:42,  name: "Audie Astawa",   group: "Mission Critical",  department: "Cx",                      top: 57.8, left: 47.0 },

  { seat:43,  name: "Joanna Wang",    group: "Net Zero",          department: "NZ",                      top: 40.0, left: 49.3 },
  { seat:44,  name: "Anthony Huang",  group: "Net Zero",          department: "NZ",                      top: 40.0, left: 52.0 },
  { seat:45,  name: "Tony Wong",      group: "Net Zero",          department: "NZ",                      top: 42.2, left: 49.5 },
  { seat:46,  name: "Woody Woo",      group: "Net Zero",          department: "NZ",                      top: 42.2, left: 52.2 },
  { seat:47,  name: "Mark Lam",       group: "Net Zero",          department: "NZ",                      top: 46.2, left: 49.5 },
  { seat:48,  name: "Leo Liu",        group: "Net Zero",          department: "NZ",                      top: 46.2, left: 52.2 },
  { seat:49,  name: "Ricky Hon",      group: "Net Zero",          department: "NZ",                      top: 48.2, left: 49.5 },
  { seat:50,  name: "Marvin Mak",     group: "Net Zero",          department: "NZ",                      top: 48.2, left: 52.2 },
  { seat:51,  name: "Zack Liu",       group: "Net Zero",          department: "NZ",                      top: 51.8, left: 49.5 },
  { seat:52,  name: "Gilderoy Ng",    group: "Net Zero",          department: "NZ",                      top: 51.8, left: 52.2 },
  { seat:53,  name: "Dyanne D.",      group: "Net Zero",          department: "NZ",                      top: 53.8, left: 49.5 },
  { seat:54,  name: "Pulkit Sharma",  group: "Net Zero",          department: "NZ",                      top: 53.8, left: 52.2 },
  { seat:55,  name: "Dominic Ng",     group: "Net Zero",          department: "NZ",                      top: 57.8, left: 49.5 },
  { seat:56,  name: "Workstation",    group: "Net Zero",          department: "NZ",                      top: 57.8, left: 52.2 },

  { seat:57,  name: "Iris Chan",      group: "Net Zero",          department: "NZ",                      top: 58.0, left: 34.0 },
  { seat:58,  name: "Gary Hui",       group: "Net Zero",          department: "NZ",                      top: 60.5, left: 36.5 },

  
  { seat:59,  name: "Arielle Liang",  group: "Planning & Design",          department: "MEPFS",                      top: 42.4, left: 59.8 },
  { seat:60,  name: "Kelvin Chan",      group: "Planning & Design",          department: "MEPFS",                      top: 42.4, left: 62.5 },
  { seat:61,  name: "Dan Leng",      group: "Planning & Design",          department: "MEPFS",                      top: 42.4, left: 65.2 },
  { seat:62,  name: "Ricky Chan",       group: "Planning & Design",          department: "MEPFS",                      top: 42.4, left: 67.8 },
  { seat:63,  name: "Kelvin Ngal ",  group: "Planning & Design",          department: "MEPFS",                      top: 46.3, left: 59.8 },
  { seat:64,  name: "Peter Guan ",      group: "Planning & Design",          department: "MEPFS",                      top: 46.3, left: 62.5 },
  { seat:65,  name: "Kyhe Lo",      group: "Planning & Design",          department: "MEPFS",                      top: 46.3, left: 65.2 },
  { seat:66,  name: "Zero Cheung",       group: "Planning & Design",          department: "MEPFS",                      top: 46.3, left: 67.8 },


  { seat:67,  name: "Cheung Yu",      group: "Planning & Design",          department: "MEPFS",                      top: 48.4, left: 62.5 },
  { seat:68,  name: "Tom In",      group: "Planning & Design",          department: "MEPFS",                      top: 48.4, left: 65.2 },
  { seat:69,  name: "Charles Fang",       group: "Planning & Design",          department: "MEPFS",                      top: 48.4, left: 67.8 },
  {seat:70,  name: "Ray Lam",  group: "Planning & Design",          department: "MEPFS",                      top: 52, left: 59.8 },
  { seat:71,  name: "Peter Lal",      group: "Planning & Design",          department: "MEPFS",                      top: 52, left: 65.2 },
  { seat:72,  name: "Berry Chu",       group: "Planning & Design",          department: "MEPFS",                      top: 52, left: 67.8 },


  { seat:73,  name: "Eric Cheong",      group: "Planning & Design",          department: "MEPFS",                      top: 54.2, left: 62.5 },
  { seat:74,  name: "Billy Man",      group: "Planning & Design",          department: "MEPFS",                      top: 54.2, left: 65.2 },
  { seat:75,  name: "Yiwei Li",       group: "Planning & Design",          department: "MEPFS",                      top: 54.2, left: 67.8 },
  { seat:76,  name: "Brian Yip  ",      group: "Planning & Design",          department: "MEPFS",                      top: 57.8, left: 59.8 },
   {seat:77,  name: "Aian He",  group: "Planning & Design",          department: "MEPFS",                      top: 57.8, left: 62.5 },
  { seat:78,  name: "Aian Chan",      group: "Planning & Design",          department: "MEPFS",                      top: 57.8, left: 65.2 },
  { seat:79,  name: "Jessie Dong",       group: "Planning & Design",          department: "MEPFS",                      top: 57.8, left: 67.8 },

 { seat:80,  name: "Felix Yue",      group: "Planning & Design",          department: "MEPFS",                      top: 60.2, left:59.8 },
   { seat:81,  name: "Osama Muhammad",      group: "Planning & Design",          department: "MEPFS",                      top: 60.2, left: 62.5 },
  { seat:82,  name: "David Pun",      group: "Planning & Design",          department: "MEPFS",                      top: 60.2, left: 65.2 },
  { seat:83,  name: "Ryan Ng",       group: "Planning & Design",          department: "MEPFS",                      top: 60.2, left: 67.8 },
  { seat:84,  name: "Danny Pun  ",      group: "Planning & Design",          department: "MEPFS",                      top: 63.8, left: 59.8 },
  { seat:85,  name: "Frank Wang",       group: "Planning & Design",          department: "MEPFS",                      top: 63.8, left: 67.8 },



  
  { seat:86,  name: "Nori Lo",  group: "Planning & Design",          department: "Admin",                      top: 42.4, left: 76.2 },
  { seat:87,  name: "May Ching",      group: "Planning & Design",          department: "Admin",                      top: 42.4, left: 78.8 },
  { seat:88,  name: "Marketing",      group: "Planning & Design",          department: "MEPFS",                      top: 42.4, left: 81.5 },



{ seat:89,  name: "Lucas Lok",       group: "Planning & Design",          department: "MEPFS",                      top: 46.8, left: 76.2 },
{ seat:90,  name: "Anders Ho",      group: "Planning & Design",          department: "MEPFS",                      top: 46.8, left: 78.8 },
{ seat:91,  name: "Wilson Wai",      group: "Planning & Design",          department: "MEPFS",                      top: 46.8, left: 81.5 },

{ seat:92,  name: "Tammy Li",      group: "Planning & Design",          department: "MEPFS",                      top: 50.5, left: 78.8 },
{ seat:93,  name: "Apple Chan",      group: "Planning & Design",          department: "MEPFS",                      top: 50.5, left: 81.5 },


 { seat:94,  name: "Oscar Lau",       group: "Planning & Design",          department: "MEPFS",                      top: 52.8, left: 76.2 },
 { seat:95,  name: "Kevin Kwan",      group: "Planning & Design",          department: "MEPFS",                      top: 52.8, left: 78.8 },


 { seat:96,  name: "Winkey Lee",  group: "Planning & Design",          department: "MEPFS",                      top: 56.2, left: 76.2 },
 { seat:97,  name: "Jeff Chan",      group: "Planning & Design",          department: "MEPFS",                      top: 56.2, left: 78.8 },
 { seat:98,  name: "Samuel Poo ",      group: "Planning & Design",          department: "MEPFS",                      top: 56.2, left: 81.5 },


  { seat:99,  name: "Willam Hoo",       group: "Planning & Design",          department: "MEPFS",                      top: 58.8, left: 76.2 },
 { seat:100,  name: "James Kwong",      group: "Planning & Design",          department: "MEPFS",                      top: 58.8, left: 78.8 },
 { seat:101,  name: "Ivan Toang",      group: "Planning & Design",          department: "MEPFS",                      top: 58.8, left: 81.5 },


  { seat:102,  name: "Ben Phua",  group: "Planning & Design",          department: "MEPFS",                      top: 62.2, left: 76.2 },
 { seat:103,  name: "Jeremy Tam",      group: "Planning & Design",          department: "MEPFS",                      top: 62.2, left: 78.8 },
 { seat:104,  name: "Violet Cheung ",      group: "Planning & Design",          department: "MEPFS",                      top: 62.2, left: 81.5 },

 { seat:105,  name: "Hong Chan",      group: "Planning & Design",          department: "MEPFS",                      top: 64.5, left: 81.5 },


   { seat:106,  name: "Eric Huang",  group: "Planning & Design",          department: "MEPFS",                      top: 68.2, left: 76.2 },
 { seat:107,  name: "Johnny yung",      group: "Planning & Design",          department: "MEPFS",                      top: 68.2, left: 78.8 },
 { seat:108,  name: "Gabriel Yung ",      group: "Planning & Design",          department: "MEPFS",                      top: 68.2, left: 81.5 },



 
  { seat:109,  name: "Chris Chan",       group: "Planning & Design",          department: "MEPFS",                      top: 70.5, left: 76.2 },
 { seat:110,  name: "Patrick Too",      group: "Planning & Design",          department: "MEPFS",                      top: 70.5, left: 78.8 },
 { seat:111,  name: "Billy Li",      group: "Planning & Design",          department: "MEPFS",                      top: 70.5, left: 81.5 },



  { seat:112,  name: "Anson Lung",      group: "Planning & Design",          department: "Accounting",                      top: 73.9, left: 78.8 },
 { seat:113,  name: "Joyce Lin ",      group: "Planning & Design",          department: "Accounting",                      top: 73.9, left: 81.5 },



   { seat:114,  name: "Keith Cheong ",       group: "Planning & Design",          department: "MEPFS",                      top: 81.5, left: 77.5 },
 { seat:115,  name: " Scott Bailey",      group: "Planning & Design",          department: "MEPFS",                      top: 81.5, left: 81 },




 { seat:116,  name: "Jess Woo",      group: "Planning & Design",          department: "HR",                      top: 42.7, left: 87.9 },


  { seat:117,  name: "Louis Chan",      group: "Planning & Design",          department: "MEPFS",                      top: 46.7, left: 87.9 },
   { seat:118,  name: "Ella Liu",      group: "Planning & Design",          department: "Marketing & Stra. Ops",                      top: 50.2, left: 87.9 },




   
  { seat:119,  name: "Billy Tang",      group: "Planning & Design",          department: "MEPFS",                      top: 54.7, left: 87.9 },


  { seat:120,  name: "Julian Ngan",      group: "Planning & Design",          department: "MEPFS",                      top: 61.2, left: 87.9 },



   
{ seat:121,  name: "Sonic Ng",      group: "Planning & Design",          department: "MEPFS",                      top: 69.2, left: 87.9 },
  { seat:122,  name: "Steven Lee",      group: "Planning & Design",          department: "MEPFS",                      top: 73.2, left: 87.9 },

   { seat:123,  name: "Carol Chan",      group: "Planning & Design",          department: "MEPFS",                      top: 80.2, left: 87.9 },




  
  
  

];


export default function Directory() {
  const [query, setQuery] = useState("");
  const [hovered, setHovered] = useState(null);

  // Search filter
  const highlightedSeats = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return new Set();
    const matches = employeeData.filter(
      (emp) =>
        emp.name.toLowerCase().includes(q) ||
        emp.group.toLowerCase().includes(q) ||
        emp.department.toLowerCase().includes(q)
    );
    return new Set(matches.map((match) => match.seat));
  }, [query]);

  const showDimEffect = query.trim().length > 0;
  const matchCount = highlightedSeats.size;

  // Colors per group
const departmentColors = {
  "Accounting": "#ff6600",
  "HR":"#ff6600",   // Orange
  "Admin": "#ffb6c1",        // Pink
  "Marketing & Stra. Ops": "#2ecc71",    // Green
  "Design": "#f1c40f",       // Yellow
  "Cx": "#3498db",           // Blue
  "NZ": "#e74c3c"  ,
  "MEPFS" :"Brown"         // Red
};


  // Logos per group
  const groupLogos = {
    "Mission Critical": missionLogo,
    "Technology": techLogo,
    "Planning & Design": designLogo,
    "Net Zero": netzeroLogo,
    "International":international
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
    

      {/* Search */}
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginBottom: '20px', flexWrap: 'wrap' }}>
        <input
          type="text"
          placeholder="Search by name, department, or business unit"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ width: '400px', padding: '10px 14px', border: '2px solid #ddd', borderRadius: '8px' }}
        />
        <button
          onClick={() => setQuery("")}
          style={{
            padding: '10px 20px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          Clear
        </button>
        {query && (
          <span style={{ padding: '6px 12px', borderRadius: '12px', background: '#e3f2fd', border: '1px solid #90caf9', fontSize: '13px' }}>
            {matchCount} match{matchCount !== 1 ? 'es' : ''}
          </span>
        )}
      </div>

      {/* Group Legend (color + logo) */}
    {/* Group Legend (logo + department colors) */}
{/* Group Legend (logo + department colors) */}
<div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: 5,
    marginBottom: 25,
    flexWrap: "wrap"
  }}
>
  {Object.entries(groupLogos).map(([group, logo]) => {
    // departments present under this group (unique)
    const uniqueDepartments = [
      ...new Set(employeeData.filter(emp => emp.group === group).map(emp => emp.department))
    ];

    return (
      <div key={group} style={CARD_STYLE} title={group}>
        {/* fixed-size image box; logo scales to fit */}
        <img src={logo} alt={group} style={IMG_BOX_STYLE} />

        {/* department color dots */}
        <div style={{ display: "flex", gap: 6, marginLeft: "auto" }}>
          {uniqueDepartments.map((dept) => (
            <div
              key={dept}
              title={dept}
              style={{
                width: 16,
                height: 16,
                borderRadius: 4,
                backgroundColor: departmentColors[dept] || "#666",
                border: "1px solid #333"
              }}
            />
          ))}
        </div>
      </div>
    );
  })}
</div>




      {/* Floor Plan */}
      <div style={{ position: 'relative', width: '100%', border: '2px solid #ddd', borderRadius: '10px', overflow: 'hidden' }}>
        <img src={floorplanImage} alt="Office Floor Plan" style={{ width: '100%', height: 'auto', display: 'block' }} />

        {/* Desk markers */}
        {employeeData.map((emp) => {
          const isHighlighted = highlightedSeats.has(emp.seat);
          const baseColor = departmentColors[emp.department] || '#666'; 
          return (
            <div
              key={emp.seat}
              style={{
                position: 'absolute',
                top: `${emp.top}%`,
                left: `${emp.left}%`,
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                backgroundColor: isHighlighted ? '#ffd700' : baseColor,
                border: isHighlighted ? '2px solid #ff4444' : '2px solid #fff',
                transform: 'translate(-50%, -50%)',
                cursor: 'pointer',
                opacity: showDimEffect && !isHighlighted ? 0.25 : 1,
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={() => setHovered(emp)}
              onMouseLeave={() => setHovered(null)}
            />
          );
        })}

        {/* Tooltip */}
       {/* Tooltip */}
{hovered && (
  <div
    style={{
      position: 'absolute',
      top: `calc(${hovered.top}% - 60px)`,
      left: `calc(${hovered.left}% + 20px)`,
      backgroundColor: '#2c3e50',
      color: 'white',
      padding: '10px 14px',
      borderRadius: '8px',
      fontSize: '13px',
      boxShadow: '0 6px 15px rgba(0,0,0,0.3)',
      pointerEvents: 'none',
      whiteSpace: 'nowrap'
    }}
  >
    <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>{hovered.name}</div>
    <div style={{ fontSize: '12px', color: departmentColors[hovered.department] }}>
      Dept: {hovered.department}
    </div>
    <div style={{ fontSize: '12px', color: '#ddd' }}>
      {hovered.group}
    </div>
  </div>
)}

      </div>

      {/* Stats Summary */}
      {/* Stats Summary */}
<div
  style={{
    marginTop: "25px",
    padding: "20px",
    background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
    borderRadius: "12px",
    textAlign: "center",
    border: "1px solid #dee2e6",
  }}
>
  <h3
    style={{
      margin: "0 0 15px 0",
      color: "#495057",
      fontSize: "18px",
      fontWeight: "bold",
    }}
  >
     Department Statistics
  </h3>
  <div
    style={{
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
      gap: "20px",
    }}
  >
    {Object.entries(
      employeeData.reduce((acc, emp) => {
        acc[emp.department] = (acc[emp.department] || 0) + 1;
        return acc;
      }, {})
    ).map(([dept, count]) => (
      <div
        key={dept}
        style={{
          textAlign: "center",
          padding: "15px",
          background: "#fff",
          borderRadius: "10px",
          boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
          minWidth: "100px",
          border: `2px solid ${departmentColors[dept] || "#ccc"}`, // colored border
        }}
      >
        <div
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            color: departmentColors[dept] || "#007bff", // number matches department color
            marginBottom: "8px",
          }}
        >
          {count}
        </div>
        <div
          style={{
            fontSize: "13px",
            color: "#6c757d",
            fontWeight: "600",
            textTransform: "uppercase",
          }}
        >
          {dept}
        </div>
      </div>
    ))}

    {/* Total count */}
    <div
      style={{
        textAlign: "center",
        padding: "15px",
        background: "#fff",
        borderRadius: "10px",
        boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
        minWidth: "120px",
        border: "2px solid #28a745",
      }}
    >
      <div
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          color: "#28a745",
          marginBottom: "8px",
        }}
      >
        {employeeData.length}
      </div>
      <div
        style={{
          fontSize: "13px",
          color: "#6c757d",
          fontWeight: "600",
          textTransform: "uppercase",
        }}
      >
        Total Employees
      </div>
    </div>
  </div>
</div>

    </div>
  );
}
