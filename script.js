let result = document.querySelector('.result')
let score = document.querySelector('.score')
let buttons = document.querySelectorAll('.button-select')
let winnerScores = [0,0]

//click event
for ( let i = 0 ; i < buttons.length ; i++){
  buttons[i].addEventListener('click', play);
}

function checkWinner(player, computer){
  if (player === computer)
    return 'Draw'
   else {
    if (player === 'Rock'){
      if(computer === 'Paper')
          return 'Computer'
       else 
          return 'Player'
    }
    if (player === 'Paper'){
      if (computer === 'Scissors'){
          return 'Computer'
      } else {
          return 'Player'
      }
    }
    if (player === 'Scissors'){
      if (computer === 'Rock')
        return 'Computer'
       else 
        return 'Player'
    }
   }
}

function emoji(selection) {
  if (selection === 'Rock')
    return '&#9994'
   else if (selection === 'Paper')
    return '&#9995'
   else 
    return '&#9996'
}

function play(e){
  let playerSelection = e.target.innerText
  let computerSelection = Math.random()

  if (computerSelection < 0.34)
    computerSelection = 'Rock'
   else if (computerSelection < 0.67)
    computerSelection = 'Paper'
   else
    computerSelection = 'Scissors'
  
  let winner = checkWinner(playerSelection, computerSelection)            
  
  if (winner === 'Player') {
    winner += ' wins!'
    winnerScores[0]++
  }
  if (winner === 'Computer'){
    winner += ' wins!'
    winnerScores[1]++
  }
  if (winner === 'Draw'){
    winner += '!'
  }

  //display to .result
  result.innerHTML = `<span style="font-size:40%">You:</span> <strong>${emoji(playerSelection)}</strong> <span style="font-size:40%">Computer:</span> <strong>${emoji(computerSelection)}</strong><br> <span style="font-size:40%"> ${winner}</span>`
  //display to .score
  score.innerHTML = `Player: [ ${winnerScores[0]} ] Computer: [ ${winnerScores[1]} ]`
}
