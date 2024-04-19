// 2 type of NonPrimitive Data type

//1 object
const abhi = {
    name: "Abhishek",
    age: 23,
}

// get
console.log(abhi);
console.log(abhi.name);
console.log(abhi["age"]);

// edit or update
abhi.name = "Abhishek Chauhan";
console.log(abhi.name);


// delete
delete abhi.age;
console.log(abhi["age"]);



//2 Array
const cars = ['Audi', "Bmw"];

// get
console.log(cars);
console.log(cars[0]);

// edit or update
cars[0] = "kia";
console.log(cars);
console.log(cars[0]);

// delete or pop
cars.pop();
console.log(cars);

// to add value
cars.push("Toyota");
console.log(cars);