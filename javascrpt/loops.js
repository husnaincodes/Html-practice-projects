
for(let i =1; i<=5; i++){
    console.log("Iteration: " + i);
}

let fruits = ["Apple", "Banana", "Cherry"];
for(let j=0; j<fruits.length; j++){
    console.log(fruits[j]);
}

let person = {
    name: "Husnain",
    age: 25,
    city: "Lahore"
};

for(let key in person){
    console.log(key + ": " + person[key]);
}