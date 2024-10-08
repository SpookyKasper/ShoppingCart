import Article from "../Article/Article";
import "./Shop.css";

const articleIds = [1, 2, 3, 4, 10];

const Shop = ({ cart }) => {
  const articleList = articleIds.map((id) => <Article key={id} id={id} />);
  return (
    <>
      <h2>Shop</h2>
      <div className="article-list">{articleList}</div>
    </>
  );
};

export default Shop;
