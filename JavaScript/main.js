import Sound from "./audios.js"
let sound = Sound()

const minutesDisplay = document.querySelector("#minutes")
const secondsDisplay = document.querySelector("#seconds")

const buttonPlay = document.querySelector("#play")
const buttonPause = document.querySelector("#pause")
const buttonStop = document.querySelector("#stop")
const buttonAdd_Minutes = document.querySelector("#plus5")
const buttonSubtract_Minutes = document.querySelector("#minus5")

const buttonFlorest = document.querySelector("#florest")
const buttonRain = document.querySelector("#rain")
const buttonCoffee_Shop = document.querySelector("#coffee_shop")
const buttonFireplace = document.querySelector("#fireplace")

let timerTimeout;
let minutes = Number(minutesDisplay.textContent)

function resetTimer(minutes, seconds){
  minutesDisplay.textContent = String(minutes).padStart("2", "0")
  secondsDisplay.textContent = String(seconds).padStart("2", "0") 
}

function countdown(){
  timerTimeout = setTimeout(function() {
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)

    if( seconds <= 0 ) {
      seconds = 60
      minutesDisplay.textContent = String(minutes - 1).padStart("2", "0")
    }

    secondsDisplay.textContent = String(seconds - 1).padStart("2", "0") 

    if (minutes <= 0){
      resetTimer(minutes, 0)
      return
    }

    countdown()
  }, 1000)
}

function resetControls(){
  buttonPlay.classList.remove("hide")
  buttonPause.classList.add("hide")
}

buttonPlay.addEventListener("click", () => {
  buttonPlay.classList.add("hide")
  buttonPause.classList.remove("hide")
  countdown()
})
buttonPause.addEventListener("click",() => {
  resetControls()
  clearTimeout(timerTimeout)
})

buttonStop.addEventListener("click",() => {
  resetControls()
  clearTimeout(timerTimeout)
  resetTimer(minutes, 0)
})

buttonSubtract_Minutes.addEventListener("click", () => {
  minutesDisplay.textContent = String(minutes - 5).padStart("2", "0")
  minutes = Number(minutesDisplay.textContent)
})

buttonAdd_Minutes.addEventListener("click", () => {
  minutesDisplay.textContent = minutes + 5
  minutes = Number(minutesDisplay.textContent)
})


function togglePlay(myAudio) {
  return myAudio.paused ? myAudio.play() : myAudio.pause()
}

buttonFlorest.addEventListener("click", () => {
  togglePlay(sound.florest)
  buttonFlorest.classList.toggle("themeButton_Pressed")
})

buttonRain.addEventListener("click", () => {
  togglePlay(sound.rain)
  buttonRain.classList.toggle("themeButton_Pressed")
})

buttonCoffee_Shop.addEventListener("click", () => {
  togglePlay(sound.coffee_shop)
  buttonCoffee_Shop.classList.toggle("themeButton_Pressed")
})

buttonFireplace.addEventListener("click", () => {
  togglePlay(sound.fireplace)
  buttonFireplace.classList.toggle("themeButton_Pressed")
})