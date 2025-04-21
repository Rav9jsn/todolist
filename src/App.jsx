import React from "react";
import Ttododata from "./components/Ttododata";
import Form from "./components/Form";
import { useState } from "react";

const App = (props) => {
  const [todosData, setTodosData] = useState([
    { id: 1, title: "This is title 1", description: "This is description 1" },
  ]);

  const delettodo = (id) => {
    setTodosData(todosData.filter((d) => d.id != id));
  };

  const [id, setId] = useState("");

  return (
    <>
      <div>
        <h1 className="capitalize  text-center text-[2rem] py-10 font-bold">
          React to do List <span className="uppercase">crud</span> App
        </h1>
        <Ttododata
          id={id}
          setId={setId}
          todos={todosData}
          setTodosData={setTodosData}
        />
        <Form setid={setId} todos={todosData} delettodo={delettodo} />
      </div>
    </>
  );
};

export default App;
