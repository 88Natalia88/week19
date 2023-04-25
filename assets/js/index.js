const btn = document.getElementById('btn');

btn.onclick = function(){
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        body: JSON.stringify({
            title: document.getElementById('text-topic').value,
            body: document.getElementById('text').value
        }),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
    .then(response => response.json())
    .then(posts => {
        //console.log(posts);
        document.getElementById("topic").innerText += posts.title;
        document.getElementById("text-result").innerText += posts.body;
        cleanInput();
    })
    .catch(error => document.getElementById("text-result").innerText += error)
}

function cleanInput(){
    document.getElementById('text-topic').value = '';
    document.getElementById('text').value = '';
}