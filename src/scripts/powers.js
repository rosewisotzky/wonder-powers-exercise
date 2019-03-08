console.log("good morning friend how does that coffee taste? like learning lots of stuff? wow amazing");



// Add the correct string as the first argument to addEventListener()
// Write a function named flightHandlerFunction that will remove the disabled class on the corresponding <section id="flight"> (section, not button) and replace it with a class of enabled.
// Have your developer tools open. When you click the button, the following element...
let newFlight = document.querySelector("#flight")
let newMind = document.querySelector("#mindreading")
let xRay = document.querySelector("#xray")
let powerList = document.querySelectorAll("section")

const flightHandlerFunction = (newClass) => {
    newFlight.classList.toggle(newClass);
    newFlight.classList.toggle("disabled");

}
const mindReadHandlerFunction = (newClass) => {
    newMind.classList.toggle(newClass);
    newMind.classList.toggle("disabled");

}
const xRayHandlerFunction = (newClass) => {
    xRay.classList.toggle(newClass);
    xRay.classList.toggle("disabled");


}
document.querySelector("#activate-flight").addEventListener("click", function () {
    flightHandlerFunction("enabled")
})
document.querySelector("#activate-mindreading").addEventListener("click", function () {
    mindReadHandlerFunction("enabled")
})
document.querySelector("#activate-xray").addEventListener("click", function () {
    xRayHandlerFunction("enabled")
})

const activateAll = (newClass) => {
    for (let i = 0; i < powerList.length; i++) {
    powerList[i].classList.add(newClass);
    }
}
document.querySelector("#activate-all").addEventListener("click", function () {
    activateAll("enabled")
})

const deactivateAll = (newClass) => {
    for (let i = 0; i < powerList.length; i++) {
        powerList[i].classList.remove(newClass);
    }
}
document.querySelector("#deactivate-all").addEventListener("click", function (){
    deactivateAll("enabled")
})
// Enable All Powers
// Disable All Powers
// Write two more event handlers for activating and deactivating all powers when the corresponding buttons are clicked. You will need to use the document.querySelectorAll() method for these.

