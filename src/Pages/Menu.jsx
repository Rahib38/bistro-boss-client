import { Helmet } from "react-helmet-async";
import Cover from "./Shared/Cover";
import menuImg from './../assets/menu/banner3.jpg';
import dessertImg from './../assets/menu/dessert-bg.jpeg';
import pizzaImg from './../assets/menu/pizza-bg.jpg';
import soupImg from './../assets/menu/soup-bg.jpg';
import saladImg from './../assets/menu/salad-bg.jpg';
import SectionTitle from "../Components/SectionTitle";
import MenuCategory from "./PopularMenu/MenuCategory";
import useMenu from "../hooks/UseHooks";

const Menu = () => {
        const [menu] = useMenu();
        const dessert = menu.filter((item) => item.category === "dessert");
        const soup = menu.filter((item) => item.category === "soup");
        const salad = menu.filter((item) => item.category === "salad");
        const pizza = menu.filter((item) => item.category === "pizza");
        const offered = menu.filter((item) => item.category === "offered");
    return (
      <div>
        <Helmet>
          <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title='Our Menu'></Cover>
            <SectionTitle heading="Don't Miss" subHeading="Today's Offer"></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
        <MenuCategory items={dessert} title='dessert' coverImg={dessertImg}></MenuCategory>
            <MenuCategory items={pizza} title='pizza' coverImg={pizzaImg}></MenuCategory>
            <MenuCategory items={soup} title='soup' coverImg={soupImg}></MenuCategory>
            <MenuCategory items={salad} title='salad' coverImg={saladImg}></MenuCategory>

      </div>
    );
};

export default Menu;