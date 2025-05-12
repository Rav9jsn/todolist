import React from "react";

const Form = ({ todos, delettodo, setid }) => {
  return (
    <div className="">
      {todos.map((d) => {
        return (
          <>
            <div
              className="my-10 pb-3  flex flex-col gap-1  sm:px-[5vw] pl-[5vw]  "
              key={d.id}
            >
              <div className="flex font-semibold border-b-[0.00010rem] uppercase gap-[15px] sm:gap-[133px]">
                {" "}
                <p className="underline inline text-[#7779de]"> Tilte:-</p>{" "}
                <p className="font-semibold capitalize">{d.title}</p>
              </div>
              <div className="flex border-b-[0.00010rem] gap-[10px] uppercase font-semibold sm:gap-[70px]">
                {" "}
                <p className="underline sm:block hidden font-semibold">
                  Description:-
                </p>
                <p className="underline sm:hidden font-semibold">Note:-</p>
                <p className=" capitalize">{d.description}</p>
              </div>
              <div className=" uppercase  mt-2 flex gap-[10px] sm:gap-[111px]">
                {" "}
                <p className=" underline font-semibold"> Action</p>{" "}
                <div className="flex gap-3 sm:mr-0 mr-3 h-[6vh]">
                  <button
                    onClick={() => setid(d.id)}
                    className="uppercase  px-[9px] hover:text-black text-white font-bold bg-yellow-600 rounded-md"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => delettodo(d.id)}
                    className="uppercase  px-[5px] hover:text-black text-white font-bold bg-red-600 rounded-md"
                  >
                    delete
                  </button>
                </div>
              </div>
              <hr />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Form;
