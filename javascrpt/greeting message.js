function greet(){
    let name = document.getElementById("username").value;

    if(name == ""){
        message = "Please enter your name";
    } else {
        message = "Hello! Good to meet you, " + name + "!";
    }

    document.getElementById("msg").innerHTML = message;
}