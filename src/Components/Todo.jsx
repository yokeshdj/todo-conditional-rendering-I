import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
function Todo() {
  const [todo, setTodo] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);
  const handleTaskCreate = (props) => {
    const { title, description } = props;
    const payload = {
      title: title,
      description: description,
      status: todo.length % 2 ? true : false,
      id: todo.length + 1
    };
    setTodo([...todo, payload]);
    console.log(todo);
  };
  return (
    <>
      <TodoInput onTaskCreate={handleTaskCreate} />
      <TodoItem data={todo.filter((item) => item.status)} />
      {/* <TodoItem data={todo} /> */}
      {/* <button onClick={() => setShowCompleted(!showCompleted)}>
        Show Completed
      </button>
      {showCompleted && <TodoItem data={todo.filter((item) => !item.status)} />} */}
    </>
  );
}
export default Todo;
