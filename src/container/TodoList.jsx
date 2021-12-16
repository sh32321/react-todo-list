import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ToDos from "../components/ToDos";
import AddForm from "../components/AddForm";
import FilterButton from "../components/FilterButton";
import { doneToDoAction, deleteToDoAction } from "../redux/action";

const TodoList = () => {
  const [filterValue, setFilterValue] = useState("ALL");

  const todoArr = useSelector((state) => state.toDoList);
  const dispatch = useDispatch();

  const toggleToDo = (id) => {
    dispatch(doneToDoAction(id));
  };

  const deleteToDo = (id) => {
    dispatch(deleteToDoAction(id));
  };

  const getVisibleToDos = (todoArr, filterValue) => {
    switch (filterValue) {
      case "ALL":
        return todoArr;
      case "ACTIVE":
        return todoArr.filter((todo) => !todo.isDone);
      case "COMPLETED":
        return todoArr.filter((todo) => todo.isDone);
      default:
        break;
    }
  };

  const visibleList = getVisibleToDos(todoArr, filterValue);

  return (
    <div>
      <h3 className="title">My To Do List</h3>
      <FilterButton setFilterValue={setFilterValue} />
      <ToDos
        todoArr={visibleList}
        toggleToDo={toggleToDo}
        deleteToDo={deleteToDo}
      />
      <AddForm />
    </div>
  );
};

export default TodoList;
