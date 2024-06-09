function loadTodos() {
    const todos = JSON.parse(localStorage.getItem('todos')) || {'todoList' : []}
    console.log(todos);
    return todos
}





function addTodoToLocalStorage(todoText) {
    const todos = loadTodos()
    todos.todoList.push(todoText)    
    localStorage.setItem("todos" , JSON.stringify(todos))
}
function appendTodoInHtml(todoText) {
    const todoList = document.getElementById('todoList')
    const todo = document.createElement('li')
    todo.textContent = todoText
    todoList.appendChild(todo)
}
document.addEventListener('DOMContentLoaded' , () => { 
    
    const todoList = document.getElementById('todoList')
todoInput =  document.getElementById("todoInput")
const submitbutton = document.getElementById('addTodo')

submitbutton.addEventListener('click' , (event)=>{
    const todoText = todoInput.value
    if (todoText == '') {
        alert(`PLEASE DON'T ADD EMPTY TODO ,  ADD SOME TODO  `)
    } else {
        addTodoToLocalStorage(todoText)
        appendTodoInHtml(todoText)
        todoInput.value = ''
    }
})




/*todoinput.addEventListener('input' , ()=>{
        console.log(`CHARACTER CHANGED`);})*/
        todoInput.addEventListener('change' , (event)=>{
            console.log(`INPUT CHANGED ${todoInput.value} `  ,  /** event.target     event.target.value*/ event );

            const todoText = event.target.value
            event.target.value = todoText.trim()
            console.log(event.target.value);
    })
   const todos = loadTodos()
   todos.todoList.forEach(todo=> {
const newTodoItem = document.createElement('li')
newTodoItem.textContent = todo
todoList.appendChild(newTodoItem)
   }
   )
    })
    