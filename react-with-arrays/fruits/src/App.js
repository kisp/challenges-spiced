import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 1338,
      name: "🍏 Apple",
      color: "green",
    },
    {
      id: 1339,
      name: "🥝 Kiwifruit",
      color: "brown",
    },
    {
      id: 1340,
      name: "🍒 Cherries",
      color: "red",
    },
    {
      id: 1341,
      name: "🍑 Peach",
      color: "orange",
    },
  ];

  return (
    <div className="app">
      {fruits.map(({ name, id }) => (
        <Card key={id} name={name} />
      ))}
    </div>
  );
}
