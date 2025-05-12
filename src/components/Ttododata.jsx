import React, { useEffect } from "react";
import { useState } from "react";

const Ttododata = ({ setTodosData, todos, id, setId }) => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const onsubmitListner = (e) => {
    e.preventDefault();

    if (id) {
      updateById(id);
      setId("");
    } else {
      const obj = {
        id: parseInt(Math.random() * 100),
        title,
        description,
      };
      setTodosData([...todos, obj]);
    }

    setDescription("");
    setTitle("");
  };

  useEffect(() => {
    if (id) {
      const updateData = todos.filter((d) => d.id === id);
      setTitle(updateData[0].title);
      setDescription(updateData[0].description);
    }
  }, [id]);

  const updateById = (id) => {
    const obj = { title, description };
    setTodosData((prevdata) =>
      prevdata.map((todo) => (todo.id === id ? { ...todo, ...obj } : todo))
    );
  };

  return (
    <>
      <form
        onSubmit={onsubmitListner}
        className="flex lg:flex-row flex-col items-center gap-3 justify-center "
      >
        {" "}
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 h-[2rem] lg:w-[20vw] w-[19.5rem] lg:mr-4 focus:outline-none text-black my-auto"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="p-2 h-[2rem] lg:w-[20vw] w-[19.5rem] focus:outline-none text-black  my-auto "
        />
        {id && (
          <button className="uppercase animate-bounce duration-100 ` bg-yellow-400 p-2 w-[70px]  ml-2 rounded-md text-white font-[700] ">
            edit
          </button>
        )}
        {!id && (
          <button className="uppercase bg-yellow-400 p-2 w-[70px]  ml-2 rounded-md text-white font-[700] ">
            add
          </button>
        )}
      </form>
    </>
  );
};

export default Ttododata;
