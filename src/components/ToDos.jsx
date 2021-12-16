import React from "react";
import { ReactComponent as Check } from "../icons/check-circle.svg";
import { ReactComponent as Delete } from "../icons/x-circle.svg";

const ToDos = ({ todoArr, toggleToDo, deleteToDo }) => {
  return (
    <div className="collection">
      {todoArr &&
        todoArr.map((todo) => (
          <div className="collection-item" key={todo.id}>
            <span
              style={{
                textDecoration: todo.isDone ? "line-through" : "none",
              }}
              className="item"
              onClick={() => toggleToDo(todo.id)}
            >
              {todo.content}
            </span>

            <div className="icon-item-container">
              <a href="#~">
                <Delete
                  onClick={() => deleteToDo(todo.id)}
                  className="todo-icons"
                />
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href="#~">
                <Check
                  onClick={() => toggleToDo(todo.id)}
                  className="todo-icons"
                >
                  <i
                    className={`material-icons ${
                      !todo.isDone
                        ? "blue-text text-lighten-4"
                        : "amber-text text-darken-2"
                    }`}
                  ></i>
                </Check>
              </a>
              &nbsp;&nbsp;&nbsp;
            </div>
          </div>
        ))}
    </div>
  );
};

export default ToDos;
