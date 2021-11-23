// styles
import GameItem from "./gameItem";
import  "./list.css";

const GameList = ({ id, items }) => {
    console.log(id);
  return (
    <div class={(id == 2 ? "game_grid game2" : "game_grid")}>
      {items.map((item) => (
        <GameItem key={item.id} item={item}/>
      ))}
    </div>
  );
};

export default GameList;