import { useState } from "react";
import "./Form.css";

export default function Form({ onAddTag }) {
  const [tagInput, setTagInput] = useState("");
  const [formState, setFormState] = useState("valid");

  function handleTagChange(e) {
    setTagInput(e.target.value);
    setFormState("valid");
  }

  function handleInvalid() {
    setFormState("invalid");
  }

  function handleValid() {
    setFormState("valid");
  }

  function isInvalid() {
    return formState === "invalid";
  }

  function handleSubmit(event) {
    event.preventDefault();
    // const formData = new FormData(event.target);
    // const data = Object.fromEntries(formData);
    // const tag = data.tag;

    const isSuccess = onAddTag(tagInput);

    if (isSuccess) {
      handleValid();
      // event.target.reset();
      setTagInput("");
      event.target.elements.tag.focus();
    } else {
      handleInvalid();
    }
  }

  return (
    <form
      className={`form form--${isInvalid() ? "invalid" : "valid"}`}
      onSubmit={handleSubmit}
    >
      <h2>Add a new Tag</h2>
      <div className="form__fields">
        <div className="form__field">
          <label htmlFor="tag" className="form__label">
            Tag name
          </label>
          <input
            id="tag"
            type="text"
            name="tag"
            className="form__input"
            value={tagInput}
            onChange={handleTagChange}
            required
          />
        </div>
        <button type="submit" className="form__button">
          Add
        </button>
      </div>
    </form>
  );
}
