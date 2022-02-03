fetch("https://www.mercadobitcoin.net/api/BTC/ticker/").then((resposta)=> {
return resposta.json()

}).then(data => {
    
    document.getElementById('mocha').innerHTML = data.ticker.last
})

