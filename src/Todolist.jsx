import { useState } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './App.css';

function App() {
  const [todo, setTodo] = useState({description: '', date: ''});
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const addTodo = () => {
    setTodos([...todos, todo]);
  }

  const deleteTodo = (row) => {
    setTodos(todos.filter((todo, index) => index !== row));
  }

  return (
    <>

  <AppBar position='static'>
    <Toolbar>
      <Typography variant='h6'>
        Todolist
      </Typography>
    </Toolbar>
  </AppBar>
      <Stack 
  direction="row" 
  spacing={2} 
  mt={2} 
  justifyContent="center"
  alignItems="center">

      <TextField variant="standard" label="Description" name="description" value={todo.description} onChange={inputChanged} />
      <TextField variant="standard" label="Date" name="date" value={todo.date} onChange={inputChanged}/>
      <Button variant='outlined' onClick={addTodo}>Add</Button> 

      </Stack>
      <table>
        <tbody>
       {
          todos.map((todo, index) => 
            <tr key={index}>
              <td>{todo.description}</td>
             <td>{todo.date}</td>
             <td><IconButton size="small" color="error" onClick={() => deleteTodo(index)}><DeleteIcon /></IconButton></td>
            </tr>)
        }
        </tbody>
      </table>
    </>
  );
}

export default App;
