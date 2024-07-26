$.ajax({
    //A String that indicates the address from which we will make the request.
    url: "https://jsonplaceholder.typicode.com/posts/1",
    //The request type.
    type: "GET",
    //The function to be called when the request is successful.
    success(data) {
        console.log(data);
    },
    //The function to be called when the request fails.
    error(data) {
        console.log(data);
    }
})

$.ajax({
    //A String that indicates the address from which we will make the request.
    url: "https://jsonplaceholder.typicode.com/posts",
    //The request type.
    type: "POST",
    //The data to be sent.
    data: {
        "userId": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    //The function to be called when the request is successful.
    success(data) {
        console.log(data);
    },
    //The function to be called when the request fails.
    //Data is the error object.
    error(data) {
        console.log(data);
    }
})