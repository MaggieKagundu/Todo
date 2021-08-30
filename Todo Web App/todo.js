var todoItems = []

//function to add item to todo list

//create todo object
function addTodo(text) {

var todo = {
    text,
    checked : false,
    id : Date.now ()

}
// push object into array
    todoItems.push(todo)
    //print out items in array
    console.log (todoItems)
    //display items on todo array
    displayTodo(todo)
}

addTodo ("I want to eat")

const form = document.querySelector('.js-form')
form.addEventListener("submit", event =>{
    // prevets refresh of page if user enters other item
    event.preventDefault()

    // to select value of the input user entered
    var input = document.querySelector('.js-todo-input')

    // to remove whitespace, and to not allow empty string
    var text = input.value.trim()
    // if text is not empty
    if (text !=='') {
        // adds item to array
        addTodo(text);
        // clears previous text 
        input.value = ''
        // allows user to enter next item
        input.focus()
    }


})

function displayTodo(todo) {
    //takes todo object and saves it in variable list
    var list = document.querySelector(".js-todo-list")
    var isChecked = todo.checked ? 'done' : ""
    // to create instance of element for specified tag and save in variable called node
    var node = document.createElement ("li")
    // set attribute of element, class todo-item
    node.setAttribute('class', ` todo-item${isChecked}`);
    

    //actual text to add to html tag
    node.innerHTML = `<input id="${todo.id}" type="checkbox"/>
    <label for="${todo.id}" class="tick js-tick"></label>
    <span>${todo.text}</span>`;
    
    //appends created element node to existing list element
     list.append(node)

    
}