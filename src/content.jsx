import React, { useState, useEffect } from "react";
import CardComponent from "./details";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { data } from "autoprefixer";

const Content = () => {
  const [change, setChange] = useState("k-malongo");
  const [search, setSearch] = useState("k-malongo");
  const [dataa, setDataa] = useState("");
  const [errors, setErrors] = useState("");

  const showErrorMessage = (err) => {
    toast.error(err, {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  useEffect(() => {
    fetch(`https://api.github.com/users/${search}`)
      .then((res) => res.json())
      .then((data) => {
        {
          if (!data.message) {
          console.log("hello")

            setDataa(data);
          }
          else {
          console.log(data.message)

            setErrors(data.message);
          }
        }
      });
  }, [search]);

  // console.log(dataa);
  function handleSubmit(e) {
    e.preventDefault();

    setSearch(change);
  }
  return (
    <div className="px-4 py-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
      <div className="max-w-xl mb-10 md:mx-auto lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-mono text-3xl font-bold text-gray-900  ">
          Devs connect
        </h2>
        {errors ===data.message ? (
          <ul style={{ color: "red" }}>
            {/* <li>{errors}</li> */}
            {showErrorMessage(errors)}
          </ul>
        ) : (
          ""
        )}
        <form className="mb-8" onSubmit={(e) => handleSubmit(e)}>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-7 h-7 text-black"
                fill=""
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              onChange={(e) => setChange(e.target.value.trim())}
              className="block w-full p-4 pl-10 text-xl text-sky-600 border border-gray-300 rounded-xl bg-white drop-shadow-lg"
              placeholder="Search for a dev..."
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-4 py-2 "
            >
              Search
            </button>
          </div>
        </form>
        <CardComponent data={dataa} />
      </div>
    </div>
  );
};
export default Content;
