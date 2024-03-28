const url = 'https://cat-fact.herokuapp.com/facts'


// using fetch with help of async await
const getdata = async () => {
    let response = await fetch(url);
    console.log('Data: ', response);

    let readData = await response.json();
    console.log(readData)
}


// using fetch with help of promise
function getda() {
    fetch(url)
        .then((res) => {
            console.log(res)
            return res.json()
        })
        .then((data) => {
            console.log("Promise", data)
        })
}



//  HTTP Verbs  - GET, POST, PUT, DELETE

/*
    GET
    The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.

    HEAD
    The HEAD method asks for a response identical to a GET request, but without the response body.

    POST
    The POST method submits an entity to the specified resource, often causing a change in state or side effects on the server.

    PUT
    The PUT method replaces all current representations of the target resource with the request payload.

    DELETE
    The DELETE method deletes the specified resource.

    CONNECT
    The CONNECT method establishes a tunnel to the server identified by the target resource.

    OPTIONS
    The OPTIONS method describes the communication options for the target resource.

    TRACE
    The TRACE method performs a message loop-back test along the path to the target resource.

    PATCH
    The PATCH method applies partial modifications to a resource.
*/



// Responce Status Code :-  


/*
    Informational responses (100 – 199)
    Successful responses (200 – 299)
    Redirection messages (300 – 399)
    Client error responses (400 – 499)
    Server error responses (500 – 599)
*/