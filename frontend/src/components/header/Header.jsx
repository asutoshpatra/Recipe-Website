import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">My website of</span>
        <span className="headerTitleLg">Recipes</span>
      </div>
      <img
        className="headerImg"
        src="https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2018/06/healthy-high-fat-foods.jpg?w=1155&h=1541"
        alt=""
      />
    </div>
  );
}
