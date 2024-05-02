// setInterval allows us to run a function repeatedly, starting after the interval of time, 
// then repeating continuously at that interval.

/*
    let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)

    Parameters:

    func|code
    Function or a string of code to execute. Usually, that’s a function. For historical reasons, 
    a string of code can be passed, but that’s not recommended.
    delay
    The delay before run, in milliseconds (1000 ms = 1 second), by default 0.
    arg1, arg2…
    Arguments for the function
*/


let timerId = setInterval(() => alert('tick'), 2000);

setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);