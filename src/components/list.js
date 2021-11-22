// styles
import  "./list.css";
import ListItem from "./listItem";

const List = ({ items }) => {
    
  return (
    <div class='grid'>
      {items.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;