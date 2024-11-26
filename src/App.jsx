import React from "react";

function App() {
  console.log("Hey from App");
  return (
    <div style={{ display: "flex", flexwrap: "wrap", gap: "1rem" }}>
      <Card
        title="Flutter"
        description="Flutter is Google’s UI toolkit for building beautiful natively compiled applications for mobile, web, and desktop from a single codebase."
        Source= "https://img.icons8.com/?size=100&id=-AszLOZlCRQ0&format=png"
      />
      <Card
        title="React Native"
        description="React Native enables you to build world-class"
        Source= "https://img.icons8.com/?size=50&id=35989&format=png"
      />
    </div>
  );
}

function Card({ title, description , Source}) {
  // console.log(props);

  //  const title = props.title;
  //  const description = props.description;


  return (
    <div style={{ border: "1px solid black", padding: "20px", width: "200px" }}>
      <h4>{title}</h4>
      <img src={Source}
        alt="picture of the day"
        style={{ width: "100px" }}
      />
      <p>{description}</p>
    </div>
  );
}

export default App;
