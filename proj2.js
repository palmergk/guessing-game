//webpage loader
let divBody = document.querySelector('.body')
let webLoaders = document.querySelector('.web-loaders')
let box1 = document.querySelector('.box1')
let box2 = document.querySelector('.box2')
let box3 = document.querySelector('.box3')
let wlt1 = document.querySelector('.wlt1')
let wlt2 = document.querySelector('.wlt2')
let wlt3 = document.querySelector('.wlt3')
let gameTitle = document.querySelector('.game-title')
let loading = false
function firstFunction() {
    let load = setInterval(() => {
        if(loading = true){
            box1.style.backgroundColor = 'rgb(243, 167, 26)'
            box1.style.border = 'none'
            wlt1.style.color = 'rgb(243, 167, 26)'
        }
    }, 700)
    let load2 = setInterval(() => {
        if(loading = true){
            box2.style.backgroundColor = 'rgb(116, 43, 116)'
            box2.style.border = 'none'
            wlt2.style.color = 'rgb(243, 167, 26)'
        }
    }, 2000)
    let load3 = setInterval(() => {
        if(loading = true){
            box3.style.backgroundColor = 'rgb(243, 167, 26)'
            box3.style.border = 'none'
            wlt3.style.color = 'rgb(243, 167, 26)'
        }
    }, 3300)
    let load4 = setInterval(() => {
        if(loading = true){
            webLoaders.style.display = 'none'
            divBody.style.display = 'block'
            gameTitle.style.display = 'none'
        }
    }, 4500)
}
window.addEventListener('load', firstFunction)


//game codes
let startCountButton = document.querySelector('.start-count-button')
let startButton = document.querySelector('.startbutton')
let restartButton = document.querySelector('.restartbutton')
let startAgain = document.querySelector('.startagain')
let moveButton = document.querySelector('.movebutton')
let startCountButtonTwo = document.querySelector('.start-count-button-two')
let startButtonTwo = document.querySelector('.startbutton-two')
let restartButtonTwo = document.querySelector('.restartbutton-two')
let backOneButton = document.querySelector('.back-button')
let moveButtonTwo = document.querySelector('.movebutton-two')
let inputText = document.querySelector('.game-input')
let error = document.querySelector('.error')
let gameText = document.querySelector('.game-number')
let resultText = document.querySelector('.result')
let trialText = document.querySelector('.trial')
let gameLevel = document.querySelector('.game-level')
let levelOneIcon = document.querySelector('.fa-universal-access')
let levelTwoIcon = document.querySelector('.fa-people-carry')
let gameText2 = document.querySelector('.game-number2')
let count = 0
let countLimit = 20
let outcome = ''
let trials = 10
let guessLimit = 10
let trialLimit = 0
let levelOnePass = 30
let levelTwoPass = 50
let guessSpeed = 30
trialText.innerHTML = `Points = ${trials}`
let container = document.querySelector('.container')

//level one
startCountButton.addEventListener('click', () => {

    if (trials === trialLimit) {
        resultText.innerHTML = `
            <h1 class='failed'>You're Out Of Points</h1>
            `
        startCountButton.style.display = 'none'
        startAgain.style.display = 'block'
        inputText.style.display = 'none'
        gameText.innerHTML = ''
        gameText2.innerHTML = ''
    } else {
        if (trials >= levelOnePass) {
            resultText.innerHTML = `
                <h1 class='pass'>Level One Passed!</h1>
                `
            startCountButton.style.display = 'none'
            moveButton.style.display = 'block'
            inputText.style.display = 'none'
            gameText.innerHTML = ''
            gameText2.innerHTML = ''
        } else {
            let startRandomCount = setInterval(GenerateRandom, guessSpeed)
            function GenerateRandom() {
                let randomNumbers = Math.floor(Math.random() * guessLimit)
                if (count === countLimit) {
                    clearInterval(startRandomCount)
                    startCountButton.style.display = 'none'
                    startButton.style.display = 'block'
                    inputText.style.display = 'block'
                    inputText.value = ''
                    gameText.style.display = 'none'
                    gameText2.style.display = 'block'
                    gameText2.innerHTML = '?'
    
                } else {
                    count += 1
                    gameText.innerHTML = randomNumbers
                    gameText.style.display = 'block'
                    gameText2.style.display = 'none'
                }
            } 
        }
    }
})

startButton.addEventListener('click', () => {
    if (!inputText.value) {
        inputText.style.border = '1px solid red'
        error.innerHTML = 'Enter a valid number'
        setTimeout(() => {
            inputText.style.border = '1px solid grey'
            error.innerHTML = ''
        }, 3000);
    } else {
        startButton.style.display = 'none'
        inputText.style.display = 'none'
        outcome = inputText.value === gameText.innerHTML ? true : false
        resultText.innerHTML = `
                        <div>You Guessed = ${inputText.value}</div>
                        <div>Outcome Is = ${gameText.innerHTML}</div>
                        <h1 class="${outcome === true ? 'pass' : 'failed'}">${outcome === true ? 'Correct' : 'Wrong'}</h1>
                        `
        restartButton.style.display = 'block'
        restartButton.style.marginTop = '-0.5rem'
        if (outcome === false) {
            trials -= 5
            trialText.innerHTML = `Points = ${trials}`
        } else {
            trials += 10
            trialText.innerHTML = `Points = ${trials}`
        }
    }
})

restartButton.addEventListener('click', () => {
    restartButton.style.display = 'none'
    startCountButton.style.display = 'block'
    resultText.innerHTML = ''
    inputText.style.display = 'none'
    inputText.value = ''
    count = 0
    gameText.innerHTML = '?'
})

startAgain.addEventListener('click', () => {
    trials = 10
    trialText.innerHTML = `Points = ${trials}`
    startCountButton.style.display = 'block'
    startAgain.style.display = 'none'
    resultText.innerHTML = ''
    gameText.style.display = 'block'
    gameText2.style.display = 'none'
    gameText.innerHTML = '?'
})
moveButton.addEventListener('click', () => {
    startCountButtonTwo.style.display = 'block'
    moveButton.style.display = 'none'
    resultText.innerHTML = ''
    gameText.style.display = 'block'
    gameText.innerHTML = '?'
    gameText2.style.display = 'none'
    levelOneIcon.style.display = 'none'
    levelTwoIcon.style.display = 'block'
    gameLevel.innerHTML = 'level two'

})

//level Two
startCountButtonTwo.addEventListener('click', () => {

    if (trials === trialLimit) {
        resultText.innerHTML = `
            <h1 class='failed'>You Lose</h1>
            `
        startCountButtonTwo.style.display = 'none'
        backOneButton.style.display = 'block'
        inputText.style.display = 'none'
        gameText.innerHTML = ''
        gameText2.innerHTML = ''
    } else {
        if (trials >= levelTwoPass) {
            resultText.innerHTML = `
                <h1 class='pass'>Level Two Passed!</h1>
                `
            startCountButtonTwo.style.display = 'none'
            moveButtonTwo.style.display = 'block'
            inputText.style.display = 'none'
            gameText.innerHTML = ''
            gameText2.innerHTML = ''
        } else {
            let startRandomCount = setInterval(GenerateRandom, guessSpeed)
            function GenerateRandom() {
                let randomNumbers = Math.floor(Math.random() * guessLimit)
                if (count === countLimit) {
                    clearInterval(startRandomCount)
                    startCountButtonTwo.style.display = 'none'
                    startButtonTwo.style.display = 'block'
                    inputText.style.display = 'block'
                    inputText.value = ''
                    gameText.style.display = 'none'
                    gameText2.style.display = 'block'
                    gameText2.innerHTML = '?'
    
                } else {
                    count += 1
                    gameText.innerHTML = randomNumbers
                    gameText.style.display = 'block'
                    gameText2.style.display = 'none'
                }
            } 
        }
    }
})

startButtonTwo.addEventListener('click', () => {
    if (!inputText.value) {
        inputText.style.border = '1px solid red'
        error.innerHTML = 'Enter a valid number'
        setTimeout(() => {
            inputText.style.border = '1px solid grey'
            error.innerHTML = ''
        }, 3000);
    } else {
        startButtonTwo.style.display = 'none'
        inputText.style.display = 'none'
        outcome = inputText.value === gameText.innerHTML ? true : false
        resultText.innerHTML = `
                        <div>You Guessed = ${inputText.value}</div>
                        <div>Outcome Is = ${gameText.innerHTML}</div>
                        <h1 class="${outcome === true ? 'pass' : 'failed'}">${outcome === true ? 'Correct' : 'Wrong'}</h1>
                        `
        restartButtonTwo.style.display = 'block'
        restartButtonTwo.style.marginTop = '-0.5rem'
        if (outcome === false) {
            trials -= 5
            trialText.innerHTML = `Points = ${trials}`
        } else {
            trials += 10
            trialText.innerHTML = `Points = ${trials}`
        }
    }
})

restartButtonTwo.addEventListener('click', () => {
    restartButtonTwo.style.display = 'none'
    startCountButtonTwo.style.display = 'block'
    resultText.innerHTML = ''
    inputText.style.display = 'none'
    inputText.value = ''
    count = 0
    gameText.innerHTML = '?'
})

backOneButton.addEventListener('click', () => {
    trials = 10
    trialText.innerHTML = `Points = ${trials}`
    startCountButton.style.display = 'block'
    backOneButton.style.display = 'none'
    resultText.innerHTML = ''
    gameText.style.display = 'block'
    gameText2.style.display = 'none'
    gameText.innerHTML = '?'
    levelOneIcon.style.display = 'block'
    levelTwoIcon.style.display = 'none'
    gameLevel.innerHTML = 'level one'
})

//toggle on and off
let lightTheme = document.querySelector('.fa-toggle-off')
let darkTheme = document.querySelector('.fa-toggle-on')
let body = document.querySelector('body')
let gameTitleSub = document.querySelector('.game-title-sub')
let throughLine = document.querySelector('.through-line')

lightTheme.addEventListener('click', () => {
    lightTheme.style.display = 'none'
    darkTheme.style.display = 'block'
    darkTheme.style.color = 'white'
    body.style.backgroundColor = 'rgb(31, 28, 28)'
    gameTitleSub.style.color = 'white'
    throughLine.style.border = '1px solid rgb(219, 214, 214)'
    container.style.boxShadow = '-2px 3px 5px lightgrey'
})
darkTheme.addEventListener('click', () => {
    lightTheme.style.display = 'block'
    darkTheme.style.display = 'none'
    body.style.backgroundColor = 'whitesmoke'
    gameTitleSub.style.color = 'black'
    throughLine.style.border = '1px solid black'
    container.style.boxShadow = '-5px 8px 10px lightgrey'
})