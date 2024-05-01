import { OrbitControls } from "@react-three/drei";
import { Bakery } from "./Bakery";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.9} />
      <Bakery />
    </>
  );
};
