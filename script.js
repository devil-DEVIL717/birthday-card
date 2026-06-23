const secretCode = "HAPPY2026";

function checkCode(){

    const code =
        document.getElementById("codeInput").value;

    if(code === secretCode){

        document.getElementById("codeScreen")
            .classList.add("hidden");

        document.getElementById("birthdayScreen")
            .classList.remove("hidden");

        createBalloons();

    }else{

        alert("Wrong code!");

    }
}

let dragging = false;
let cutDone = false;

const knife = document.getElementById("knife");

document.addEventListener("mousedown",(e)=>{

    if(e.target.id==="knife"){
        dragging=true;
    }

});

document.addEventListener("mouseup",()=>{

    dragging=false;

});

document.addEventListener("mousemove",(e)=>{

    if(!dragging || cutDone) return;

    knife.style.left=e.pageX+"px";
    knife.style.top=e.pageY+"px";

    const cake =
        document.getElementById("cake");

    const cakeRect =
        cake.getBoundingClientRect();

    const knifeRect =
        knife.getBoundingClientRect();

    if(
        knifeRect.top >
        cakeRect.top + 20
    ){
        cutCake();
    }

});

function cutCake(){

    if(cutDone) return;

    cutDone=true;

    document.getElementById("cake")
        .innerHTML="🍰 🍰";

    confetti({
        particleCount:300,
        spread:180,
        origin:{y:0.6}
    });

    setTimeout(()=>{

        confetti({
            particleCount:200,
            spread:120
        });

    },500);

    document.getElementById("message")
        .classList.remove("hidden");

    typeMessage();

}

function typeMessage(){

    const text =
    "Wishing you an amazing birthday filled with happiness, laughter, success, unforgettable memories and lots of cake! ❤️🎂";

    let i=0;

    const target =
        document.getElementById("typedMessage");

    const interval =
    setInterval(()=>{

        target.innerHTML += text[i];

        i++;

        if(i>=text.length){

            clearInterval(interval);

        }

    },40);

}

function createBalloons(){

    for(let i=0;i<20;i++){

        const balloon =
            document.createElement("div");

        balloon.className="balloon";

        const emojis=[
            "🎈",
            "🎉",
            "✨",
            "🎊"
        ];

        balloon.innerHTML =
            emojis[
                Math.floor(
                    Math.random()*emojis.length
                )
            ];

        balloon.style.left =
            Math.random()*100 + "vw";

        balloon.style.animationDuration =
            5 + Math.random()*6 + "s";

        document.body.appendChild(balloon);

    }

}
