import React from "react";
import Contact from "./components/Contact";

function App() {
  const contactItems = [
    {
      id: 1,
      name: "Bryan Curry",
      phone: "082235436577",
    },
    {
      id: 2,
      name: "Steve Cox",
      phone: "08155464612",
    },
    {
      id: 3,
      name: "Mark Alexanderson",
      phone: "0852311231",
    },
  ];

  return (
    <div>
      {contactItems.map((item) => (
        <Contact key={item.id} name={item.name} phone={item.phone} />
      ))}
    </div>
  );
}

export default App;