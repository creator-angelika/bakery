import { OrbitControls } from "@react-three/drei";
import { Bakery } from "./Bakery";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.9} />
      <group position={[1, -3.4, 0]} rotation-y={-Math.PI/8} rotation-z={-Math.PI/20} rotation-x={-Math.PI/56} scale={[0.9, 0.9, 0.9]}>
      <Bakery />
      </group>
    </>
  );
};
