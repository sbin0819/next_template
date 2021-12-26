import { useState, useEffect } from 'react'
import axios from 'axios'

const api = 'https://jsonplaceholder.typicode.com/todos'
function Test() {
    const [todos, setTodos] = useState([])
    const [loading, setLoding] = useState(false)
    const [error, setError] = useState(false)

    const fetch = async () => {
        setLoding(true)
        try {
            const response = await axios.get(api)
            if (response.data.length > 0) {
                setTodos(response.data.slice(0, 20))
            }
        } catch (err) {
            setError(err)
        } finally {
            setLoding(false)
        }
    }
    useEffect(() => {
        fetch()
    }, [])

    if (loading || error) return <div>loading</div>

    return (
        <div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Test
