import { useState } from "react";

function TodoInput({ onTaskCreate }) {
  const [text, setText] = useState({
    title: "",
    description: ""
  });
  const handleChange = (e) =>
    setText({
      ...text,
      [e.target.name]: e.target.value
    });
  const handleAdd = () => onTaskCreate(text);
  return (
    <div>
      <div>
        <input
          onChange={handleChange}
          placeholder="title"
          type="text"
          name="title"
          value={text.title}
        />
      </div>
      <div>
        <input
          onChange={handleChange}
          type="text"
          placeholder="description"
          name="description"
          value={text.description}
        />
      </div>
      <input onClick={handleAdd} type="button" value="ADD" />
    </div>
  );
}
export default TodoInput;
