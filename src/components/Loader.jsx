import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html
      style={{
        backgroundColor: "transparent",
      }}
    >
      <span className="canvas-load"></span>
      <p
        style={{
          fontSize: 17,
          color: "#a1a1a1",
          fontWeight: 800,
          marginTop: 40,
          display: "flex",
          width: "fit-content",
          height: "fit-content",
        }}
      >
        Loading {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default Loader;
