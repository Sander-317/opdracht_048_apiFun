console.log("script.js")
const trumpButton = document.getElementById("trump_button")
const clearTheDomButton = document.getElementById("clear_the_dom")
const getDadJokeAsImgbutton = document.getElementById("get_dad_joke_as_img")
const viewport = document.querySelector("#viewport")

trumpButton.addEventListener("click", ()=> getRandomTrumpQuote())
clearTheDomButton.addEventListener("click", ()=> clearTheDom())
getDadJokeAsImgbutton.addEventListener("click", () => getDadJokeAsImg())

async function getRandomTrumpQuote(){
    try {
        await fetch("https://api.tronalddump.io/random/quote")
            .then((response) => response.json())
            .then((data) => {
                getTrumpQuoteToDom(data)
            })
    }
    catch(err){
        console.log(err)
    }
}

function getTrumpQuoteToDom(object){
    const newLi = document.createElement("li")
    const dateAndTime  = object.appeared_at.split("T")
    const date = dateAndTime[0]
    const time = dateAndTime[1]
    newLi.innerHTML = `Posted on ${date} at ${time} <br>${object.value} <br> ${object._embedded.author[0].name}`
    viewport.appendChild(newLi)
}

function clearTheDom(){
    viewport.innerHTML = ""
}

async function getDadJokeAsImg(){
    try{
        await fetch("https://icanhazdadjoke.com/j/R7UfaahVfFd.png")
        .then((response) => response)
        .then((data) => {
            console.log(data)
            getDadJokeToDom(data)
        })

    }
    catch(err){
        console.log(err)
    }
}

function getDadJokeToDom(data){
    const newLi = document.createElement("li")
    newLi.innerHTML = `<img src=${data.url} />`
    viewport.appendChild(newLi)
}