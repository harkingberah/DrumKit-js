// let b1 = document.querySelectorAll("button")[0].addEventListener("click", handleClick)
// let b2 = document.querySelectorAll("button")[1].addEventListener("click", handleClick)
// function handleClick() {
//     alert("i got clicked");
// }

let all = document.querySelectorAll(".drum")

for (let i = 0; i < all.length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        // alert("i got clicked");
        // this.style.color = "white";
        let btnInnerHtml = this.innerHTML
        switch (btnInnerHtml) {
            case "w":
                let firstSound = new Audio("/sounds/tom-1.mp3")
                firstSound.play()
            case "a":
                let secondSound = new Audio("/sounds/tom-2.mp3")
                secondSound.play()
            case "s":
                let thirdSound = new Audio("/sounds/tom-3.mp3")
                thirdSound.play()
            case "d":
                let fourthSound = new Audio("/sounds/tom-4.mp3")
                fourthSound.play()
            case "j":
                let fifthSound = new Audio("/sounds/kick-bass.mp3")
                fifthSound.play()
            case "k":
                let sixthSound = new Audio("/sounds/crash.mp3")
                sixthSound.play()
            case "l":
                let seventhSound = new Audio("/sounds/snare.mp3")
                seventhSound.play()
            default:
                console.log(btnInnerHtml)

        }
    })
}


// var audio = new Audio("/sounds/tom-1.mp3")
// audio.play()