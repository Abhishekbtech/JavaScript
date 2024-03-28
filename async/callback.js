// Callback Hell

// Callback Hell : Nested callbacks stacked below one another forming a pyramid structure.
// (Pyramid of Doom)


function getdata(dataid, getNextdata) {
    setTimeout(() => {
        console.log("i am from  data id " + dataid);
        if (getNextdata) {
            getNextdata();
        }
    }, 2000)
}


getdata(1, () => {
    console.log("getting data2......")
    getdata(2, () => {
        console.log("getting data3......")
        getdata(3, () => {
            console.log("getting data4......")
            getdata(4)
        })
    })
})
