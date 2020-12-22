import './App.css';
import PlayerList from './components/PlayerList';
import MatchList from './components/MatchList';
import matchData from './data/matchData';
import playerData from './data/playerData';
import {preparePlayerData, addWinsToPlayers} from './helpers/playerHelpers';


function App() {

  const preparedPlayer = preparePlayerData(playerData)
  const parsedPlayer = addWinsToPlayers(preparedPlayer, matchData)

  return (
    <div className="App">
      <h1>Tourney Matches <span>Where Coding and Tournaments found their Match!</span></h1>
      <PlayerList 
          preparedPlayer={playerData} parsedPlayer={matchData}
      />
       <MatchList 
      players={matchData[0].players} 
      winner={matchData[0].winner} 
      stockDifference={matchData[0].stockDifference}/>
    </div>
  );
}

export default App;
