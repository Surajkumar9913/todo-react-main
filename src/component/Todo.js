import './todo.css'
import { useState } from 'react'
function ToDo() {
    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState([])
    const [edit, setEdit] = useState()
    const [todoItem, setTodoItem] = useState()

    const show = () => {

        const tododata = {
            name: todo,
            id: todos.length + 1
        }
        setTodos((pre) => [...pre, tododata])

        setTodo('')
    }
    const remove = (item) => {
        const newtodos = todos.filter((value) => value.id !== item.id)

        setTodos(newtodos)

    }
    const todoData = (item) => {
        setTodoItem(item)

    }
    const saveEdit = () => {
        todos.find((todo) => {

            if (todo.id === todoItem.id) {
                todo.name = edit
            }

        });

        setTodoItem('')
        setEdit('')
    }
    return (
        <>
            < div className="App" >
                <div className="todo">
                    <div className='heading'>Add ToDo</div>
                    <input type='text' value={todo} placeholder='Add ToDo Here' onChange={(e) => setTodo(e.target.value)} />
                    <button onClick={show}>add</button>
                </div>

                <div className='heading'>ToDo List</div>
                {todos.map((item, index) => {

                    return <div key={index} className="todos">

                        <h1>{item.name}</h1>
                        <div className='btn'>

                            <button onClick={() => remove(item)}>Delete</button ><button onClick={() => todoData(item)}>Edit</button>
                        </div>

                    </div>
                })}

                {todoItem && <div className='edit-todo'>Edit<span> '{todoItem.name}' </span>to-<input onChange={(e) => setEdit(e.target.value)} /><button onClick={saveEdit}>Save</button></div>}
            </div >
            <footer className="footer">
                <div className="footer-content">
                    <p>Designed with <span className='heart'> &#9829; </span> by Suraj</p>

                </div>
            </footer>
        </>
    );
}

export default ToDo;
