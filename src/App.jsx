import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    fetch("donation.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <main>
      <h1 className="text-5xl capitalize text-center">
        project setup initialized
      </h1>
    </main>
  );
}

export default App;
