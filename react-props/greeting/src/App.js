import "./styles.css";

export default function App() {
  return <Greeting name="Peter" />;
}

function Greeting({ name = "Jane" }) {
  return <h1>Hello, {name}!</h1>;
}
