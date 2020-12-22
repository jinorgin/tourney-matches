
export const preparePlayerData = function(playerData){
    return Object.values(playerData)
}

export const addWinsToPlayers = function(preparePlayer, matchData){
    return preparePlayer.map(player => {
        //Calculate the wins in the matchData
        const currWins = matchData.reduce((accumulator,match) =>{
            if(match.winner === player.gamerTag){ //if winner matches Tag, add the accumulator or return the current accumulator
               return accumulator += 1
            } else{
                return accumulator
            }
        }, 0)

        //insert the value currWins to the wins key
        player.wins = currWins;

        return player
    })
}