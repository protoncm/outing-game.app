import { Link } from "react-router-dom";
import { AiFillWindows } from "react-icons/ai";
import { GoBrowser } from "react-icons/go";
// styles
import "./listItem.css";

const ListItem = ({ item: i }) => {
  return (
    <div class='card'>
      <Link to={ i.url } class='card_header'>
        <img class='thumbnail' src={i.thumbnail} />
      </Link>
      <div class='card_body'>
        <Link to={i.url} class='title'>
          {i.title}
        </Link>
        <p class='description text-muted'>
          {i.description}...
        </p>
        <div class='card_footer'>
          <div>
            <span class='badge'>{i.genre}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;