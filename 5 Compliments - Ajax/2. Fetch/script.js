function fetchGet() {
    //fetch() returns a Promise.
    //This Promise returns the response object with information about the server's response.

    //Initializes a fetch request.
    //Mandatory parameter - A String that indicates the address from which we will make the request.
    //With only this, we will make a GET request.
    fetch("https://jsonplaceholder.typicode.com/posts/1").then(function(response) {
        console.log(response);    
        return response.json();
    }).then(function(responseObject) {
        console.log(responseObject)
    }).catch(function(error) {
        console.error('Error:', error);
    });
}
fetchGet();

function fetchPost() {
    var message = {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }
    //fetch() returns a Promise.
    //This Promise returns the response object with information about the server's response.
    
    //Initializes a fetch request.
    //Mandatory parameter - A String that indicates the address from which we will make the request.
    //Second parameter - Where we can pass a configuration object. 
    //This is where we indicate the request method, header, body, etc.
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(message)
    }).then(function(response) {
        console.log(response);
        return response.json();
    }).then(function(responseObject) {
        console.log(responseObject);
    }).catch(function(error) {
        console.error('Error:', error);
    });
}
fetchPost();