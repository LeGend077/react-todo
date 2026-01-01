function Todo({ index, content, todos, setTodos }) {
  return (
    <div className="m-0.5 rounded p-2 bg-slate-200 flex w-full border-slate-400 border-1 border-solid justify-between">
      <div style={{ overflow: "hidden" }}> {content} </div>
      <div>
        {" "}
        <button
          className="hover:outline-1 hover:outline-slate-400 rounded hover:outline-solid px-1"
          onClick={() => {
            let newTodos = Array.from(todos);
            newTodos.splice(index, 1);
            setTodos([...newTodos]);
            localStorage.setItem("todos", JSON.stringify([...newTodos]));
          }}
        >
          ✔
        </button>
      </div>
    </div>
  );
}

export default Todo;
