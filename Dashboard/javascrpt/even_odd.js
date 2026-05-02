function checkNumber(){
    let number = document.getElementById("num").value;

    if(number % 2 == 0){
        output = "Even Number";
    } else {
        output = "Odd Number";
    }

    document.getElementById("result").innerHTML = output;
}