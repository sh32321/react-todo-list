import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { newToDoAction } from "../redux/action";
import { ReactComponent as Send } from "../icons/send.svg";

const AddForm = () => {
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setContent(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(newToDoAction({ content }));
    setContent("");
  };

  return (
    <>
      <form onSubmit={submitHandler} className="form">
        <div className="form-container">
          <input
            placeholder="Need to do..."
            className="add-form-input"
            type="text"
            value={content}
            onChange={changeHandler}
          />
          <Send onClick={submitHandler} className="send-icon" />
        </div>
      </form>
    </>
  );
};

export default AddForm;
