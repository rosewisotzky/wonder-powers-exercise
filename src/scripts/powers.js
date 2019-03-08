console.log("good morning friend how does that coffee taste? like learning lots of stuff? wow amazing");



// Add the correct string as the first argument to addEventListener()
// Write a function named flightHandlerFunction that will remove the disabled class on the corresponding <section id="flight"> (section, not button) and replace it with a class of enabled.
// Have your developer tools open. When you click the button, the following element...
let newFlight = document.querySelector("#flight")
const flightHandlerFunction = (newClass) => {
    newFlight.classList.toggle(newClass)
}

document.querySelector("#activate-flight").addEventListener("click", function () {
    flightHandlerFunction("enabled")
})

