function TodoItem({ data }) {
  console.log(data);
  return (
    <ul>
      {data.map((item) => (
        <li>{`${item.title}-${item.description}-${item.status}`}</li>
      ))}
    </ul>
  );
}
export default TodoItem;
