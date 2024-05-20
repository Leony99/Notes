function axiosGet() {
    //axios() returns a Promise.
    //This Promise returns the response object with information about the server's response.

    //Initializes an axios request with the request type.
    //Mandatory parameter - A String that indicates the address from which we will make the request.
    axios.get("https://jsonplaceholder.typicode.com/posts/1").then(function(response) {
        console.log(response);
        console.log(response.data);
    })
}
axiosGet();

function axiosPost() {
    var message = {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }
    //axios() returns a Promise.
    //This Promise returns the response object with information about the server's response.

    //Initializes an axios request with the request type.
    //Mandatory parameter - A String that indicates the address from which we will make the request.
    //Second parameter - Where we can pass the data to post.
    axios.post("https://jsonplaceholder.typicode.com/posts", message).then(function(response) {
        console.log(response);
        console.log(response.data);
    })
}
axiosPost();