import TodoInputes from "./TodoInputes";

// A function has been created here that can delete unimportant tasks.
function TodoLine({todos,onDelete,onChange}) {
    return (
        <div>
            {
                todos.map((todo) => {
                    return (
                        // here returns <Todoinputes /> where thanks to onChange and onDelete we can delete and remove completed tasks from the todo list
                        <TodoInputes 
                            key={todo.id} 
                            todo={todo}
                            onChange={onChange}
                            onDelete={onDelete}
                        />
                    )
                })
            }
        </div>
    )
};

export default TodoLine;
