
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
            html = `<div class="userId">
                        <p><b>User ID:</b> ${json.userId}</p>    
                    </div>
                     <div class="id">
                            <p><b>ID:</b> ${json.id}</p>    
                     </div>
                      <div class="title">
                            <p><b>Tittle:</b> ${json.title}</p>    
                     </div>
                     <div class="completed">
                            <p><b>Competed:</b> ${json.completed}</p>    
                     </div>
                        `
            fetchShow.innerHTML = html;
        })
}

// 2nd input

let fetchInput2 = document.getElementById('inputFetch2');
fetchInput2.addEventListener('keyup', function (e){
    e.preventDefault();
    console.log(e);

    if (e.keyCode == 13){
        fetchInput2.value = '';
    }

});

function write2(id2){
    let fetchShow2 = document.getElementById('fetchShow2');
    let html2 = '';

    fetch('https://jsonplaceholder.typicode.com/todos/'+id2)
        .then(response => response.json())
        .then(json => console.log(json))
}

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))