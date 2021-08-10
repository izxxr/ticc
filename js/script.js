function getAllTodo(){
    if(localStorage.getItem('todoJson') === null){
        let todoJson = [];
        localStorage.setItem('todoJson', JSON.stringify(todoJson));
        return [];
    }
    else{
        return JSON.parse(localStorage.getItem('todoJson'));
    }
}

function updateTable(){
    todoJson = getAllTodo()
    console.log(todoJson)

    todos = document.getElementById('todos')
    let str = ''
    todoJson.forEach((element, index) => {
        str += `
        <tr>
            <th scope="row">${index+1}</th>
            <th>${element[0]}</th>
            <th>${element[1]}</th>
            <th>
              <div>
                <button class="btn-success" onclick="removeFromList(${index})">Done!</button>
                <button class="btn-danger" onclick="removeFromList(${index})">Delete</button>
              </div>
            </th>
        </tr>
        `
    })
    todos.innerHTML = ''
    todos.innerHTML += str
    
}

function removeFromList(index){
    let todos = getAllTodo()
    todos.splice(index, 1)
    localStorage.setItem('todoJson', JSON.stringify(todos))
    updateTable()
}

function addToList(){
    let title = document.getElementById('todoTitle')
    let description = document.getElementById('todoDescription')

    if(!title.value){
        title.style.borderColor = "red"
        setTimeout(() => {
            title.style.borderColor = ""
        }, 5000)
        return
    }
    else if(!description.value){
        description.style.borderColor = "red"
        setTimeout(() => {
            description.style.borderColor = ""
        }, 5000)
        return
    }

    if(!getAllTodo()){
        let todoJson = [];
        localStorage.setItem('todoJson', JSON.stringify(todoJson));
    }

    let todoJson = getAllTodo()
    todoJson.push([title.value, description.value])
    localStorage.setItem('todoJson', JSON.stringify(todoJson))

    updateTable()

    
}

updateTable()