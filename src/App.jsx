import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Interface } from "./components/Interface";

function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [60, 0, 0], fov: 5 }}>
        <color attach="background" args={["#ececec"]} />
        <Experience />
        <ScrollControls pages={4} damping={0.1}>
          <Experience />
          <Scroll html>
            <Interface />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
}

export default App;
