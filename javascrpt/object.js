const student = {

    name: "Husnain",
    age: 22,
    city: "Karachi",
    country: "Pakistan",
    hobbies: ["Coding", "Gaming", "Traveling"],
    isStudent: true,
    greet: function() {
        return "Hello, my name is " + this.name + " and I am from " + this.city + ".";
    }
};
console.log(student.greet());