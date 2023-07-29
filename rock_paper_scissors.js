function getComputerChoice() {
    let plays = ['Rock', 'Paper', 'Scissors']
    
    const play_choose = Math.floor(Math.random() * plays.length);

    const play_choosed = plays[play_choose];

    return play_choosed
}

function playRound(playerSelection, computerSelection) {
    let play_computer = computerSelection.toLowerCase() 
    let play_player = playerSelection.toLowerCase() 

    if (play_computer == 'rock' && play_player == 'paper') {
        player_winners++
        return "You Win! Paper beats Rock"
    }else if (play_player == 'rock' && play_computer == 'paper') {
        computer_winners++
        return "You Lose! Paper beats Rock"        
    }else if (play_computer == 'rock' && play_player == 'scissors') {
        computer_winners++
        return "You Lose! Rock beats Scissors" 
    }else if (play_player == 'rock' && play_computer == 'scissors') {
        player_winners++
        return "You Win! Rock beats Scissors" 
    }else if (play_computer == 'paper' && play_player == 'scissors') {
        player_winners++
        return "You Win! Scissors beats Paper"
    }else if (play_player == 'paper' && play_computer == 'scissors') {
        computer_winners++
        return "You Lose! Scissors beats Paper"
    }else if(play_computer == play_player) {
        return "Game Draw! " + play_computer + " Equal " + play_player
    }

}

function game() {
    computer_winners = 0
    player_winners = 0

    for(i = 0; i < 5; i++) {
        let player_play = prompt('Choose Rock, Paper or Scissors?')
        let computer_play = getComputerChoice()

        console.log(playRound(player_play, computer_play))
    }

    if (computer_winners > player_winners) {
        console.log("You lose! the game!, " + "Computer = "+ computer_winners.toString()  + " Player = " + player_winners.toString())
    }else if(player_winners > computer_winners) {
        console.log("You Win! the game!, " + "Computer = "+ computer_winners.toString() + " Player = " + player_winners.toString())        
    }
}
   
game()
