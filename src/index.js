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

document.body.addEventListener("mousemove", evt => {
    const { clientX, clientY } = evt
})

const destinations = document.querySelectorAll(".destination")
for (let destination of destinations) {
    destination.addEventListener("mouseenter", () => {
        destination.style.fontWeight = "bold"
    })
    destination.addEventListener("mouseleave", () => {
        setTimeout(() => {
            destination.style.fontWeight = "initial"
        }, 500)
        })
    }

}