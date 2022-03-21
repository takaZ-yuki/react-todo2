export const ComplateTodos = (props) => {
  const { todos, onClickBacl } = props;
  return (
    <div className="complate-area">
      <p className="title">完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo.text} className="list-row">
              <span>{todo.text}</span>
              <span>{todo.timestamp}</span>
              <button onClick={() => onClickBacl(index)}>戻す</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
