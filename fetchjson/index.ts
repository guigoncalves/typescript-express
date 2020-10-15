import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo;

  logTodo(todo.id, todo.title, todo.completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The todo with id: ${id}
    Has the movie: ${title}
    Is it completed? ${completed}
  `);
};
