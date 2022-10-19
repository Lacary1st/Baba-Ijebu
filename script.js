var randomNums = [];
    for(let x =0; x < 6 ; x++) {
        randomNums[x] = Math.floor(Math.random()*100)
    }
        console.log(randomNums)

    let games = [];
    let inputGames =0
    let usersGames = [30, 2, 99]
        for (let value of usersGames){
            if(randomNums.includes(value)){
                games[inputGames] = value;
                inputGames++
            }if(games.length >= 3){
            // games.length = document.getElementById('result').innerHTML ("You Win")
                console.log('You Win')
            }
            else{
                // games.length = document.getElementById('result').innerHTML ("Owo Jona")
                console.log('Owo Jona')
            }
        }