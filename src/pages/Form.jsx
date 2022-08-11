import React from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Form = () => {
  let navigate = useNavigate();
  const [alertMessage, setAlertMessage] = useState("");
  const submitForm = (event) => {
    event.preventDefault();
    try {
      let form = new FormData(event.target);
      navigate("/form/detail", {state: Object.fromEntries(form)});
    } catch (err) {
      setAlertMessage("Failed save data!");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="card">
        {!!alertMessage && (
          <div className="p-3 bg-red-300 text-red-700 rounded-lg">
            {alertMessage}
          </div>
        )}
        <form onSubmit={submitForm}>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center">
              <div className="basis-1/3">
                <label htmlFor="name" className="w-full flex items-start">
                  Nama Lengkap
                </label>
              </div>
              <div className="basis-2/3">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full border-2 border-blue-300 text-blue-600 outline-none focus:ring-2 focus:ring-blue-800"
                  required
                />
              </div>
            </div>
            <div className="flex flex-row items-center">
              <div className="basis-1/3">
                <label htmlFor="email" className="w-full flex items-start">
                  Email
                </label>
              </div>
              <div className="basis-2/3">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full border-2 border-blue-300 text-blue-600 outline-none focus:ring-2 focus:ring-blue-800"
                />
              </div>
            </div>
            <div className="w-full flex justify-center">
              <button type="submit" className="btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
