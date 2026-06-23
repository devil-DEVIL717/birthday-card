const secretCode = "HAPPY2026";

function checkCode(){

    let userCode =
        document.getElementById("codeInput").value;

    if(userCode === secretCode){

        document.getElementById("codeScreen")
        .classList.add("hidden");

        document.getElementById("birthdayScreen")
        .classList.remove("hidden");

    }else{
        alert("Wrong code!");
    }
}

function cutCake(){

    let cake = document.getElementById("cake");

    cake.innerHTML = "🍰 🍰";

    cake.classList.add("cut");

    confetti({
        particleCount:250,
        spread:150,
        origin:{y:0.6}
    });

    document.getElementById("message")
    .classList.remove("hidden");
}
