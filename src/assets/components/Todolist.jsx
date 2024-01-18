import { useState } from "react";

function Todolist() {

    const [todo, setTodo] = useState({description: '', date: ''});

    const [todos, setTodos] = useState([]);
    const inputChanged = (event) => {

        setTodo({...todo, [event.target.name]: event.target.value})

    } 

    const addTodo = () => {
        setTodos([...todos, todo]);
        setTodo({description: '', date: ''});
    }

    const deleteTodo = (row) => {
        setTodos(todos.filter((todo, index) => row != index))
    }


    return(
    <>
<input placeholder="Description" name="description" value={todo.description} onChange={inputChanged} />
<input placeholder="Date" name="date" value={todo.date} onChange={inputChanged} />
<input type="button" value="Add" onClick={addTodo} />
<table>
{todos.map((todo, index) => 

<tr key={index}>
    <td>{description}</td>
    <td>{date}</td>
    <input type="button" value="Delete" onClick= {() => deleteTodo(index)} />
</tr>)
}
</table>

    </>
    );
}

export default Todolist;