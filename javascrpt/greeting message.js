function greet(){
    let name = document.getElementById("username").value;

    if(name == ""){
        message = "Please enter your name";
    } else {
        message = "Hello " + name + "!";
    }

    document.getElementById("msg").innerHTML = message;
}