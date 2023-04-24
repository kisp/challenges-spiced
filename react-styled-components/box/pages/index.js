import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";

import BoxWithStyledComponent from "../components/BoxWithStyledComponents";

export default function HomePage() {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <BoxWithClassName />
        <BoxWithClassName isBlack />
      </div>
      <div>
        <BoxWithStyledComponent />
        <BoxWithStyledComponent isBlack />
      </div>
    </div>
  );
}
