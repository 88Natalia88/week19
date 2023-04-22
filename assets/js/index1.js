let headers = document.getElementById('headers');
document.addEventListener("DOMContentLoaded", function (e){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(posts => {
    //console.log(posts);
    posts.forEach(post => {
        let text = document.createElement('div');
        text.className = 'texts';
        text.innerHTML += `<h2>Заголовок: ${post.title}</h2>
        <p>Статья: ${post.body}</p>`;
        headers.append(text);
        //console.log(post)
    });
})
    .catch(error => document.getElementById("headers").innerText += error);
})