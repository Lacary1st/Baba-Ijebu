
function play(){
    input = document.getElementById('games');           
    let newNums = Array.from(input.value);
    usersGames = newNums;
    const randomNums = [];
    for(let x =0; x < 6 ; x++) {
        randomNums[x] = Math.floor(Math.random() * 100)
        document.getElementById('randomnums').innerHTML = randomNums
    }

    const myGame = [];
    let inputGames = 0
        for (let value of usersGames){
            let tonum = parseInt(value)
            if(randomNums.includes(tonum)){
                myGame[inputGames] = value;
                inputGames++
            }
            document.getElementById('games').innerHTML = myGame;
        }
            if(myGame.length >= 2){
                document.getElementById('result').innerHTML   ='Congratulations! You win'
            }
            else{
                document.getElementById('result').innerHTML  ='Try again next time'
            }
        }
