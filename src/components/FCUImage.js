// src/components/FCUImage.js
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import ModelViewer from "./ModelViewer";
import InfoBox from "./InfoBox";

export default function FCUImage() {
  const [show, setShow] = useState(false);

  return (
 <div
  style={{
    display: "flex",
    flexDirection: "column", // stack children vertically
    justifyContent: "center", // vertical center
    alignItems: "center",     // horizontal center
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
      <Modal.Title>FCU Details</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div style={{ height: "400px" }}>
        <ModelViewer url="/models/fcu.glb" />
      </div>
      <InfoBox />
    </Modal.Body>
  </Modal>
</div>

  );
}
