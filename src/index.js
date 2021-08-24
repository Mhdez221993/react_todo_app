import React from "react"
import ReactDOM from "react-dom"
import "./App.css"
// import TodoContainer from "./classBased/components/TodoContainer"
import TodoContainer from "./functionBased/components/TodoContainer"

ReactDOM.render(
<React.StrictMode>
  <TodoContainer />
</React.StrictMode>, document.getElementById("root"))