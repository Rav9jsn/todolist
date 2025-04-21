import React from "react";

const Form = ({ todos, delettodo, setid }) => {
  return (
    <div className="">
      {todos.map((d) => {
        return (
          <>
            <div
              className="mt-16 border-b-[0.00010rem] flex mx-auto w-[80vw] mb-5 justify-evenly "
              key={d.id}
            >
              <p className="py-1">{d.title}</p>
              <p className="py-1">{d.description}</p>
              <div className="flex gap-3">
                <button
                  onClick={() => setid(d.id)}
                  className="uppercase mb-2 p-[9px] hover:text-black text-white font-bold bg-yellow-600 rounded-md"
                >
                  Edit
                </button>
                <button
                  onClick={() => delettodo(d.id)}
                  className="uppercase mb-2 p-[9px] hover:text-black text-white font-bold bg-red-600 rounded-md"
                >
                  delete
                </button>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Form;
