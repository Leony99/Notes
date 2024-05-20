function xhrGet() {
    //Initializes a new instance of the XMLHttpRequest
    var xhr = new XMLHttpRequest();

    //Configures the request
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
    //Send the request
    xhr.send();

    //Sets the expected response format to JSON
    xhr.responseType = "json";

    //Defines a function to be called when the state(readyState property) of the request changes.
    //xhr.readyState == 4, the request is completed.
    //xhr.status == 200, the HTTP status indicates that the request was successfull.
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr);
            console.log(xhr.response);
        }
    }
    //Defines a function to be called when the request is completed.
    //xhr.status == 200, the HTTP status indicates that the request was successfull.
    xhr.onload = function() {
        if(xhr.status == 200) {
            console.log(xhr);
            console.log(xhr.response);
        }
        else {
            console.log(xhr.status);
            console.log(xhr.statusText);
        }
    }
}
xhrGet();

function xhrPost() {
    //Initializes a new instance of the XMLHttpRequest
    var xhr = new XMLHttpRequest();

    //Configures the request
    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
    //Send the request
    var message = {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }
    xhr.send(message);

    //Defines a function to be called when the readyState property of the request changes.
    //xhr.readyState == 4, the request is completed.
    //xhr.status == 201, the HTTP status indicates that the request was successfull.
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 201) {
            console.log(xhr);
        }
    }
    //Defines a function to be called when the request is completed.
    //xhr.status == 201, the HTTP status indicates that the request was successfull.
    xhr.onload = function() {
        if(xhr.status == 201) {
            console.log(xhr);
        }
        else {
            console.log(xhr.status);
            console.log(xhr.statusText);
        }
    }
}
xhrPost();