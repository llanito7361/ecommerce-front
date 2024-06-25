import { Link } from "react-router-dom";
import "./Item.css";
//44.14
const Item = (props) => {


    // const idANumber = parseInt(props.id, 10);
    // console.log(typeof(idANumber),idANumber)

    // if(isNaN(idANumber)){
    //   console.error('invalid ID:',props.id)
    //   return null;
    // RESUMEN DEL BUG, colgue pasar la prop from the parent (<Product />)
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo(0,0)} src={props.image} alt="" />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">{props.new_price}</div>{" "}
        <div className="item-price-old">{props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
