
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


let sum = 0;
for(let k=1; k<=10; k++){
    sum += k;
}
console.log("Sum of numbers from 1 to 10: " + sum);