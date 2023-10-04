import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load"></span>
      <p
        style={{
          fontSize: 17,
          color: "#f1f1f1",
          fontWeight: 800,
          marginTop: 40,
          display: "flex",
          minWidth: "300px",
        }}
      >
        Loading {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default Loader;
