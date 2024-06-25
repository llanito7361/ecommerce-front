import "./RelatedProduct.css";
import related_data from "../assets/data";
import Item from "../Item/Item";

const RelatedProduct = () => {
  return (
    <div className="relatedproducts">
      <h1>Related Product</h1>
      <hr />
      <div className="relatedproducts-item">
        {related_data.map((item, i) => {
          return (
            <Item
              key={i}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
              id={item.id} 
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProduct;
