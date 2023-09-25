import { useState } from "react"
import Button from "./Button"

function TodoList({ todos }) {
    const [newTodo, setNewTodo] = useState("")
    const [list, setList] = useState(todos)

    const addTodo = () => {
        const completed = newTodoChecked
        if (newTodo.trim() !== "") {
            setList([...list, { task: newTodo, completed: newTodoChecked }])
            setNewTodo("")
            setNewTodoChecked(false)
        }
    }

    const changeTodo = (index) => {
        const newList = [...list]
        newList[index].completed = !newList[index].completed
        setList(newList)
    }

    const deleteTodo = (index) => {
        const newList = [...list]
        newList.splice(index, 1)
        setList(newList)
    }

    const [showCompleted, setShowCompleted] = useState(true)
    const changeCompleted = () => {
      const newChange = !showCompleted
      setShowCompleted(newChange)
    }

    const [newTodoChecked, setNewTodoChecked] = useState(false)
    const changeNewTodoChecked = () => {
        const newChange = !newTodoChecked
        setNewTodoChecked(newChange)
    }

    return (
        <>
            <h2>Liste de choses à faire:</h2>
            <ul>
                {list.map((e, index) => (
                    (!e.completed || showCompleted) ? (                
                    <li key={index}>
                        <input type="checkbox" checked={e.completed} onChange={() => changeTodo(index)} />
                        {e.task}
                        <Button label="Supprimer" onClick={() => deleteTodo(index)} />
                    </li>) 
                    : null
                )
                )}
            </ul>
            <p>
                <input type="text" size="80" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
                <input type="checkbox" checked={newTodoChecked} onChange={changeNewTodoChecked}/>
                <Button onClick={addTodo} label="Ajouter" />
            </p>
            <p>
    <input type="checkbox" checked={showCompleted} onChange={changeCompleted}/>
    Afficher les éléments cochés
    </p>
        </>
    )
}

export default TodoList