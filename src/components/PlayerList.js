import Player from './Player';
import {preparePlayerData, addWinsToPlayers} from '../helpers/playerHelpers';

function PlayerList(props){

  const preparedPlayer = preparePlayerData(props.preparedPlayer)
  const parsedPlayerData = addWinsToPlayers(preparedPlayer, props.parsedPlayer)



    const parsedPlayer = parsedPlayerData.map(player => <Player key={player.gamerTag} {...player}/>)
    return(
        <section className="PlayerList">
        <h1>Current participating players</h1>
 
         {parsedPlayer}
      </section>
    )
}

export default PlayerList