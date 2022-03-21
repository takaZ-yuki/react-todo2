import "./styles.css";
import React, { useState } from "react";
import { InputTodo } from "./components/InputTodo";
import { IncomplateTodos } from "./components/IncomplateTodos";
import { ComplateTodos } from "./components/ComplateTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incomplateTodos, setIncomplateTodos] = useState([]);
  const [complateTodos, setComplateTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const timestamp = new Date();
    const year = timestamp.getFullYear();
    const month = timestamp.getMonth() + 1;
    const day = timestamp.getDate();
    const hour = timestamp.getHours();
    const minute = timestamp.getMinutes();
    const second = timestamp.getSeconds();

    const newTodos = [
      ...incomplateTodos,
      {
        text: todoText,
        timestamp: `${year}/${month}/${day} ${hour}:${minute}:${second}`
      }
    ];
    setIncomplateTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incomplateTodos];
    newTodos.splice(index, 1);
    setIncomplateTodos(newTodos);
  };

  const onClickComplate = (index) => {
    const newInComplateTodos = [...incomplateTodos];
    newInComplateTodos.splice(index, 1);

    const newComplateTodos = [...complateTodos, incomplateTodos[index]];
    setIncomplateTodos(newInComplateTodos);
    setComplateTodos(newComplateTodos);
  };

  const onClickBacl = (index) => {
    const newComplateTodos = [...complateTodos];
    newComplateTodos.splice(index, 1);

    const newInComplateTodos = [...incomplateTodos, complateTodos[index]];
    setComplateTodos(newComplateTodos);
    setIncomplateTodos(newInComplateTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incomplateTodos.length >= 5}
      />
      {incomplateTodos.length >= 5 && (
        <p style={{ color: "red" }}>
          登録できるtodoは5個までだよー。消化しろー。
        </p>
      )}
      <IncomplateTodos
        todos={incomplateTodos}
        onClickComplate={onClickComplate}
        onClickDelete={onClickDelete}
      />
      <ComplateTodos todos={complateTodos} onClickBacl={onClickBacl} />
    </>
  );
};
