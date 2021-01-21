/*class Book{
    constructor(title,author,price){
        this.title = title
        this.author = author
        this.price = price
    }
}*/


const title = document.getElementById('title')
const author = document.getElementById('author')
const price = document.getElementById('price')
const btn = document.getElementById('submit')
const todoId = document.getElementById('body-id')
let addDollarSign = '$'

document.addEventListener('DOMcontentLoaded', getLocalTodos)
btn.addEventListener('click', addBook)
todoId.addEventListener('click', delOption)



function addBook(e){
   
    e.preventDefault()
    
    if(title.value === '' || author.value === '' || price.value === ''){
        alert('Fill in the space')
    }else{

    //TODO DIV
    const todoDiv = document.getElementById('body-id');
    
    saveLocalTodos(`${title.value}, ${author.value}, ${addDollarSign}${price.value}`);

   //Create Table
    const todoItem = document.createElement('tr');
    todoItem.innerHTML = `
    <td>${title.value}</td>
    <td>${author.value}</td>
    <td>${addDollarSign}${price.value}</td>
    <td><a href="#" class="btn btn-danger btn-sm delete">x</a></td>`
    
    todoDiv.appendChild(todoItem);

    
    title.value = ''
    author.value = ''
    price.value = ''

    console.log(todoDiv)
   
}
    
   
}

function delOption(e){
    console.log('apple')
    const item = e.target
       if(item.classList.contains('delete')){
    const todo = item.parentElement.parentElement
        todo.remove()
       }
      
    }
    

  function saveLocalTodos(todo){
   let todos;
   if(localStorage.getItem("todos") === null){
       todos = [];
   }else{
       todos = JSON.parse(localStorage.getItem("todos"))
   }

   todos.push(todo)
   localStorage.setItem("todos", JSON.stringify(todos))
}


function getLocalTodos(){
    console.log('Hello')
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"))
    }
 
    todos.forEach(todo => {
        if(title.value === '' || author.value === '' || price.value === ''){
            alert('Fill in the space')
        }else{
    
        //TODO DIV
        const todoDiv = document.getElementById('body-id');
        
    
       //Create Table
        const todoItem = document.createElement('tr');
        todoItem.innerHTML = `
        <td>${todo}</td>
        <td>${todo}</td>
        <td>${todo}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">x</a></td>`
        
        todoDiv.appendChild(todoItem);
        }

    })
 }
 