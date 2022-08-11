import React, {useState} from "react";
import {useEffect} from "react";
import {useLocation, useNavigate, Link} from "react-router-dom";
import usePrompt from "../hooks/usePrompt";

const Detail = () => {
  let navigate = useNavigate();
  let {state} = useLocation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isConfirm, setIsConfirm] = useState(false);

  usePrompt("Leave this page will delete data, continue?", !isConfirm);

  const confirmPayment = () => {
    // code for processing
    // ...
    // ----
    setIsConfirm(true);
    setName("");
    setEmail("");
    // clear {state}
    state = {};
  };

  useEffect(() => {
    if (!!state) {
      setName(state.name);
      if (!!state.email) {
        setEmail(state.email);
      }
    } else {
      navigate("/form", {replace: true});
    }
  }, []);

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="card justify-center">
        {!isConfirm ? (
          <>
            <div>Detail</div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center">
                <div>Name</div>
                <span>{name}</span>
              </div>
              {!!email && (
                <div className="flex flex-row items-center">
                  <div>Email</div>
                  <span>{email}</span>
                </div>
              )}
              <div className="flex justify-center w-full">
                <button className="btn-primary" onClick={confirmPayment}>
                  Confirm
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div>Payment is Confirmed</div>
            <Link to="/" replace={true}>
              <button className="btn-primary">Back to Home</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Detail;
