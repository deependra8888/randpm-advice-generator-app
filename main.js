let ADVICE_API_URL = "https://api.adviceslip.com/advice"

let fetchQuotes = () => {
    fetch(ADVICE_API_URL, {cache : 'no-cache'}).then((res) => res.json()).then((data) => {
        let adviceID = data.slip.id;
        let randomQuotes = data.slip.advice
        console.log(randomQuotes);
        document.querySelector('.advice-tag').innerText = `Advice # ${adviceID}`
        document.querySelector('.advice-quote').innerText = randomQuotes
    })
}


document.querySelector('.btn').addEventListener('click', () => {
    fetchQuotes()
})


