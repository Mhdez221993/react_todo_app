import React, { useState } from "react"
import { FaPlusCircle } from "react-icons/fa"

const InputTodo = (props) => {
  const [title, setTitle] = useState("")

  const onChange = e => {
    setTitle(e.target.value)
  };

  const handleSubmit = e => {
    e.preventDefault();
    if(title.trim()){
      props.addTodoItemProps(title)
      setTitle("")
    }else{
      alert('Please write a todo')
    }
  };

  return (
    <form onSubmit={ handleSubmit } className="form-container">
      <input
      type="text"
      className="input-text"
      placeholder="Add Todo..."
      value={ title }
      name="title"
      onChange={onChange}
      />
      <button className="input-submit">
        <FaPlusCircle style={{ color: "darkcyan", fontSize: "20px", marginTop: "2px" }}
        />
      </button>
    </form>
  )
}

export default InputTodo
