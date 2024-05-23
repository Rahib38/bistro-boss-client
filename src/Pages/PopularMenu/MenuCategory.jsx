import { Link } from "react-router-dom";
import Cover from "../Shared/Cover";
import Menuitem from "../Shared/Menuitem";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div>
      {title && <Cover img={coverImg} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 mb-10 mt-10 p-8">
        {
          // eslint-disable-next-line react/prop-types
          items.map((item) => (
            <Menuitem key={item._id} item={item}></Menuitem>
          ))
        }
      </div>
        <Link to={`/order/${title}`}>
          <button className="btn btn-outline border-0 border-b-4">
            Order Now
          </button>
        </Link>
    </div>
  );
};

export default MenuCategory;
