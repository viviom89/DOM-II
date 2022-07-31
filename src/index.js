import './less/index.less'

// Your code goes here!
window.onload = function (evt) {
    console.log(`event ${evt.type} Start up!`)
    const heading = document.querySelector("h1")
    heading.textContent = "Fun Begins Here!!!"

window.addEventListener("copy", () => {
    navigator.clipboard.readText()
    .then(text => {
        heading.textContent += text
    })
})

document.body.addEventListener("click", evt => {
    evt.target.classList.toglle("mirror")
})

document.body.addEventListener("dblclick", evt => {
    evt.target.innerHTML = " "
})

window.addEventListener("keydown", evt => {
    if (evt.key == 6) {
        document.body.innerHTML = "<h1>HELLO!!!</h1>"
    }
})
}