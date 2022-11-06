const fetchTodo = async (todoId) => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${todoId}`
    );
    const todo = await res.json();
    return todo;
};

export default async function Page(props) {
    const {
        params: { todoId },
    } = props;
    const todo = await fetchTodo(todoId);
    return (
        <div>
            <h1>
                #{todo.id}: {todo.title}
            </h1>
            <p>{todo.title}</p>
            <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
            <p>{todo.userId}</p>
        </div>
    );
}