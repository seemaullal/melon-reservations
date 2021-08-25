import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/api/test-data")
      .then((response) => response.json())
      .then((testData) => setData(testData));
  });
  return (
    <div>
      {data.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
}

export default App;
