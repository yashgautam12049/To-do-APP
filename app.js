const addforms = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const template = function(todo){

    const html = 
    `<li class="list-group-item d-flex justify-content-between align-items-center">

    <span>${todo}</span>

    <i class="far fa-trash-alt delete"></i>

</li>   
    `
    list.innerHTML += html;
}

addforms.addEventListener('submit', function(e){

    e.preventDefault();
    const todo = addforms.add.value.trim();
if(todo.length){
    template(todo);
    addforms.reset();
}
   
});
list.addEventListener('click', function(e){
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();  
    }
});

const filter = function(term){
console.log(Array.from(list.children))
}

search.addEventListener('keyup',function(){
    const term = search.value.trim();
    filter(term);
})