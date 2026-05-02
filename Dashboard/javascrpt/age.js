     function checkAge(){

                let age = document.getElementById("age").value;

                if(age >= 18){
                    message = "You are eligible to vote.";
                }
                else{
                    message = "You are not eligible to vote.";
                }

                let stars = "";
                for(let i=0;i<age/5;i++){
                    stars += "*";
                }

                document.getElementById("result").innerHTML =
                message + "<br>Age Score: " + stars;

            }
            document.querySelector("button").addEventListener("mouseover",function(){
                this.style.backgroundColor="lightgreen";
            });