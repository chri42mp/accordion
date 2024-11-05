import React from "react";
import Accordion from "./components/Accordion";
import data from "./data.json"; // Importer data

const App = () => {
  return (
    <div>
      <h1>Spørgsmål og Svar</h1>
      <Accordion items={data} /> {/* Send data som props til Accordion */}
    </div>
  );
};

export default App;
