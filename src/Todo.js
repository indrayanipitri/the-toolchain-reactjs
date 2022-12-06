import {useState} from 'react';

function Todo() {
    const [activity, setActivity] = useState('');
    const [edit, setEdit] = useState({});
    const [message, setMessage] = useState('');
    const [todos, setTodos] = useState([]);

    function generateId() {
        return Date.now()
    }

    function saveTodoHandler(event) {
        event.preventDefault();

        if (!activity) {
            return setMessage('todo nya diisi dong')
        }

        setMessage('')

        if (edit.id) {
            const updatedTodo = {
                ...edit,
                activity
            }

            const editTodoIndex = todos.findIndex(function(todo) {
                return todo.id === edit.id;
            })

            const updatedTodos = [...todos]
            updatedTodos[editTodoIndex] = updatedTodo;

            setTodos(updatedTodos)

            return cancelEditHandler();
        }
        

        setTodos([...todos, {
            id: generateId(),
            activity: activity,
            done: false
        }]);
        setActivity('');
        
    }

    function removeTodoHandler(todoId){
        const filteredTodos = todos.filter(function(todo) {
            return todo.id !== todoId
        })
        
        setTodos(filteredTodos);

        if (edit.id) cancelEditHandler();
    }

    function editTodoHandler(todo) {
        setActivity(todo.activity)
        setEdit(todo)
    }

    function cancelEditHandler(todo) {
        setActivity('');
        setEdit({});
    }

    function doneTodoHandler(todo){
        const checkedTodo = {
            ...todo,
            done: todo.done ? false : true
        }
        const editTodoIndex = todos.findIndex(function(currentTodo) {
            return currentTodo.id === todo.id;
        })

        const updatedTodos = [...todos]
        updatedTodos[editTodoIndex] = checkedTodo;

        setTodos(updatedTodos)
    }

    return (
        <>
        <h1>Simple Todo List</h1>
        {message && <h3 style = {{ color: 'red' }}>{message}</h3> }
        
        <form onSubmit = {saveTodoHandler}>
            <input type="text" 
            placeholder="hari ini kamu ngapain?" 
            value={activity}
            onChange={function(event) {
                setActivity(event.target.value)
            }}/>
            <button type="submit">
                {edit.id ? "Simpan Perubahan" : "Tambah"}</button>
            {edit.id && <button onClick={cancelEditHandler}>Batal Edit</button>}
            
        </form>
        {todos.length > 0 ? <ul>
            {todos.map(function(todo) {
                return <li key={todo.id}>
                <h2>
                <input type="checkbox" 
                checked={todo.done}
                onChange={doneTodoHandler.bind(this, todo)}
                style={{ marginRight:15 }} />
                {todo.activity} 
                <span style= {{ color : 'yellow', marginLeft : 10}}>({todo.done ? "selesai" : "belum selesai"})</span>
                <button onClick={editTodoHandler.bind(this, todo)}>edit</button>
                <button onClick={removeTodoHandler.bind(this, todo.id)}>hapus</button>
                </h2>
                </li>
            })}
            
        </ul> :
        <h2> belum ada todo nih</h2>}
       
        </>
    )
}

export default Todo;