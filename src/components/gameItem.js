import ReactCardFlip from 'react-card-flip';
import { useState } from 'react';
// styles
import "./listItem.css";

const GameItem = ({ item: i }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const flipHandler = ((e) =>{
        setIsFlipped(!isFlipped);
    });

  return (
    <div class='card'>
        <ReactCardFlip isFlipped={isFlipped}>
            <img class='game_thumbnail' src={`https://drive.google.com/uc?id=${i.back_img_uid}`} onClick={(e) => flipHandler(e)}/>
            <img class='game_thumbnail' src={`https://drive.google.com/uc?id=${i.cover_img_uid}`} onClick={(e) => flipHandler(e)}/>
        </ReactCardFlip>
      { i.title && (
          <p class="game_title">{i.title}</p>
      )}
    </div>
  );
};

export default GameItem;