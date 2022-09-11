
const Textbox = ({setTodos}) => {
  const [todoValue, setTodoValue] = useState('');

  const handleChange = (e) => {
    const currentValue = e.target.value;
    setTodoValue(currentValue);

  }

  const handleClick = () => {
    setTodos(todoValue);
  }

  return (
    <div>
      <h3>Add Todos</h3>
      <input type="text" value={todoValue} onChange={handleChange}/>
      <button onClick={() => handleClick()}>Add</button>
    </div>
  )
}

export default Textbox