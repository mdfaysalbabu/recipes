import React from "react";

const Extracard = () => {
  return (
    <div className="mt-5 mb-5">
      <div className="text-center ">
        <h2 className="fs-2 fw-bold">
          Have Question In Mind?
          <br />
          <span className="text-success">Let Us Help You</span>
        </h2>
      </div>
      <div>
        <div class="input-group mb-3 w-50 h-25 mx-auto">
          <input 
            type="text"
            class="form-control"
            placeholder="your@gmail.com"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          ></input>
          <button
            class="btn btn-danger"
            type="button"
            id="button-addon2"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Extracard;
