export const IncomplateTodos = (props) => {
  const { todos, onClickComplate, onClickDelete } = props;
  return (
    <div className="incomplate-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo.text} className="list-row">
              <span>{todo.text}</span>
              <span>{todo.timestamp}</span>
              <button onClick={() => onClickComplate(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
