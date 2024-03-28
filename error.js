// Error handling, "try...catch"
/*
    try {

        // code...

    } catch (err) {

        // error handling

    }

    or

    try {
    // run this code
    } catch (err) {
    // if an error happened, then jump here
    // err is the error object
    } finally {
    // do in any case after try/catch
    }
*/

// try {
//     console.log('Start of try runs');
// } catch (err) {
//     console.log('Catch is ignored, because there are no errors');
// }


// try {
//     console.log('Start of try runs');
//     yyj;
// } catch (err) {
//     console.log('Catch is work', err);
// }


// “Throw” operator :-  The throw operator generates an error.

let json = '{ "age": 30 }';
try {
    let user = JSON.parse(json);
    if (!user.name) {
        throw new SyntaxError("Incomplete data: no name"); // (*)
    }
    console.log(user.name);
} catch (err) {
    console.log("JSON Error: " + err.message);
} finally {
    console.log("finally work")
}