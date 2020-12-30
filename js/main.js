
let fetchInput = document.getElementById('inputFetch');
fetchInput.addEventListener('keyup', function (e){
    e.preventDefault();

    console.log(e.keyCode)
    if (e.keyCode == 13){
        // fetchInput.value;
        write(fetchInput.value);
        fetchInput.value = '';



    }

});

function write(id){
    let fetchShow = document.getElementById('fetchShow');
    let html = '';



    fetch('https://jsonplaceholder.typicode.com/todos/'+id)
        .then(response => response.json())
        .then(json => {
            html = `
            <tr>
                <td>
                    <input type="text" value="${json.userId}">
                 </td>
                <td>
                    <input type="text" value="${json.id}">
                 </td>
                <td>
                    <input type="text" value="${json.title}">
                </td>
                <td>
                    <input type="text" value="${json.completed}">
                </td>
                <td>
                    <button class="btn btn-primary" type="button" id="saveData">Save</button>
                </td>
                <td>
                    <button salman="${json.id}" onclick="deleteBtn(this)" class="btn btn-danger deleteData" type="button" >Delete</button>
                </td>
            </tr> `

            fetchShow.innerHTML += html;
        })
}
const formInput = document.querySelector('formInput');

function deleteBtn(e){
    console.log(e.parentElement)
    const deleteData = e.getAttribute('salman');
    const url = 'https://jsonplaceholder.typicode.com/posts/'+deleteData;

    fetch(url,{
        method: "DELETE",
    }).then(response =>{
        console.log(response)
        e.parentElement.parentElement.remove();
    })


}

