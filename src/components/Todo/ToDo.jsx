import { useEffect, useState } from "react";
import "./ToDo.scss";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, deleteTodos, getTodos } from "../redux/todo/todoActions";

const ToDo = () => {
  const { todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  const handleTodoAdd = () => {
    dispatch(addTodos(todo));
    setTodo("");
  };

  const handleTodoDelete = (id) => {
    dispatch(deleteTodos(id));
  };

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <input
                  type="text"
                  placeholder="add todo"
                  value={todo}
                  onChange={(e) => setTodo(e.target.value)}
                />
                <button className="addBtn" onClick={handleTodoAdd}>
                  Add Todo
                </button>

                <hr />

                <h2>My Todos</h2>

                <ul className="list-group todoList">
                  {todos.map((item, index) => {
                    return (
                      <li className="list-group-item" key={index}>
                        {item.name}
                        <button onClick={() => handleTodoDelete(item.id)}>
                          <i className="bx bxs-trash"></i>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
