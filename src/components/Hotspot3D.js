import { useState } from "react";
import { Text } from "@react-three/drei";

export default function Hotspot3D({
  position,
  label,
  textOffset = [0, 0.3, 0],
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <group position={position}>
      {/* Invisible hover area */}
      <mesh
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
        }}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>

      {/* 3D TEXT */}
      {hovered && (
        <Text
          position={textOffset}
          fontSize={0.18}
          color="white"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.01}
          outlineColor="black"
        >
          {label}
        </Text>
      )}
    </group>
  );
}
