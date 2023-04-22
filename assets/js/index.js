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
    .then(json => {
        //console.log(json.title);
        document.getElementById("topic").innerText += json.title;
        document.getElementById("text-result").innerText += json.body;
    })
    .catch(error => document.getElementById("text-result").innerText += error);
}