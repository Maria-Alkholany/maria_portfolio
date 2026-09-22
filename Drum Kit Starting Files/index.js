
// Sounds from buttons

let numberOfDrums = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {

        let buttonInnerHtml = this.innerHTML;
        
        makeSound(buttonInnerHtml);
        buttonAhimation(buttonInnerHtml);
    })
};

// Sounds from keys

document.addEventListener("keypress", function (event) {

    makeSound(event.key);
    buttonAhimation(event.key);
})

function makeSound(event) {
    switch (event) {
        case "w":
            {
                let tom1 = new Audio("./sounds/tom-1.mp3");
                tom1.play();
                break;
            }


        case "a":
            {
                let tom2 = new Audio("./sounds/tom-2.mp3");
                tom2.play();
                break;
            }


        case "s":
            {
                let tom3 = new Audio("./sounds/tom-3.mp3");
                tom3.play();
                break;
            }


        case "d":
            {
                let tom4 = new Audio("./sounds/tom-4.mp3");
                tom4.play();
                break;
            }


        case "j":
            {
                let snare = new Audio("./sounds/snare.mp3");
                snare.play();
                break;
            }


        case "k":
            {
                let crash = new Audio("./sounds/crash.mp3");
                crash.play();
                break;
            }


        case "l":
            {
                let kick = new Audio("./sounds/kick-bass.mp3");
                kick.play();
                break;
            }
    }
}

function buttonAhimation(key) {

    let currentButton = document.querySelector("." + key);

    currentButton.classList.add("pressed");

    setTimeout(function () {
        currentButton.classList.remove("pressed");
    }, 100)
}
