const todoList=['make dinner','wash dishes'];
renderTodolist();

function renderTodolist(){

       

let todaylistHtml='';

    for(let i=0;i<todoList.length;i++){
            const todo  = todoList[i];
            const html =`<p>${todo}</P>`;
            todaylistHtml+=html;
    }

    document.querySelector(".js-to-list").innerHTML=todaylistHtml;}


    console.log(todaylistHtml);
        function addTodo(){
             const inputElement =document.querySelector(".js-name-input") ;
             const name = inputElement.value;
             todoList.push(name);
             
             console.log(todoList);

             inputElement.value='';


             renderTodolist();


        }
