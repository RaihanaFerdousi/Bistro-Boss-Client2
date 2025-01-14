import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg, subTitle }) => {
  console.log(title)
  return (
    <section className="mb-12">
      {title && <Cover img={coverImg} title={title} subTitle={subTitle} />}
      <div className="grid md:grid-cols-2 gap-10 mt-10">
        {items.map((item) => (
          <MenuItem key={item.id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center mt-10">
      <Link to={`/orderFood/${title}`}>
          <button className="px-7 py-3 rounded-lg btn-outline border-0 border-b-4">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </Link>
      </div>
    </section>
  );
};

export default MenuCategory;