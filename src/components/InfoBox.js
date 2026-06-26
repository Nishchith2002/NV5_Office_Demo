// src/components/InfoBox.js
import React from "react";
import { Card } from "react-bootstrap";

export default function InfoBox() {
  return (
    <Card className="mt-3">
      <Card.Body>
        <Card.Title>FCU Sensor Data</Card.Title>
        <p>This FCU is located on the 2nd floor, Block A.</p>
        <div style={{ display: "flex", gap: "20px" }}>
          <Card style={{ flex: 1, padding: "10px" }}>
            <strong>Supply Air Temp:</strong> 12.5 °C
          </Card>
          <Card style={{ flex: 1, padding: "10px" }}>
            <strong>Return Air Temp:</strong> 22.1 °C
          </Card>
          <Card style={{ flex: 1, padding: "10px" }}>
            <strong>Valve Position:</strong> 45 %
          </Card>
        </div>
      </Card.Body>
    </Card>
  );
}
