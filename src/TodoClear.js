// here we add a function that deletes completed tasks

function TodoClear({todos,clearCompleted}) {
    const size = todos.filter((todo) => todo.isCompleted).length; // Here, in size, there is a filter function that returns an array. This array contains all the tasks that have been completed.
    return (
        <div>
            <span>{size}/{todos.length} Completed</span>
            <button onClick={clearCompleted}>Clear Completed</button> 
        </div>
    )
};

export default TodoClear;
