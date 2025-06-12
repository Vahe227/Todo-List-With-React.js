import { useState } from 'react'; // here we pull useState from the react file
import './App.css'; // Here, a css file has been created for all our files to make it more beautiful, but I should note that the css code is not mine, but I got it from artificial intelligence (from Gemini).
// here in these three imports we link to the rest of the files there I added the rest of the code logic
import TodoLine from './TodoLine'; 
import TodoDone from './TodoDone';
import TodoClear from './TodoClear';

// here we create an array which is stored in useState because we need to update our function every time where all the tasks of the todo list are stored

function App() {
  const [todos,setTodos] = useState([
    {
      id: Math.random(),
      text: "Learn JS",
      isCompleted: false
    },
    {
      id: Math.random(),
      text: "Learn CSS",
      isCompleted: false
    },
        {
      id: Math.random(),
      text: "Learn React",
      isCompleted: false
    }
  ]);

  //Here our function returns a todo list with its tasks, which are updated by useStatate every time a task is added.

  return (
    <div className="App">
      <TodoDone todoAdd = { (text) => {
        setTodos([
          ...todos,
          {
            id: Math.random(),
            text: text,
            isCompleted: false
          },
        ])
      }}/> 
      <TodoLine 
        todos={todos}
        onDelete={(todo) => {
          setTodos(todos.filter((t) => t.id !== todo.id))
        }}
        onChange={(newTodo) => {
          setTodos(todos.map((todo => {
            if(todo.id === newTodo.id){
              return newTodo;
            };
            return todo;
          })));
        }}
        />
      <TodoClear todos={todos} clearCompleted = {() => {
        setTodos(todos.filter((todo) => !todo.isCompleted));
      }} /> 
    </div>
  );
}

// Here we export the file so that we can use this file in other files.

export default App;
