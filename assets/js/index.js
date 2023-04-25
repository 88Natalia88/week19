const btn = document.getElementById('btn');
let postResult = document.querySelector('.post-result');

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
    .then(post => {
        //console.log(post);
            let postHtml = '';
            postHtml = `<p class="topic">${post.title}</p>
            <p class="text-result">${post.body}</p>`;
            postResult.innerHTML += postHtml;
            cleanInput();
    })
    .catch(error => postResult.textContent += error)
}

function cleanInput(){
    document.getElementById('text-topic').value = '';
    document.getElementById('text').value = '';
}