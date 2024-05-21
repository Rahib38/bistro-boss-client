import SectionTitle from "../../Components/SectionTitle";
import Menuitem from "../Shared/Menuitem";
import useMenu from "../../hooks/UseHooks";


const PopularMenu = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item=>item.category === 'popular')

    return (
      <section className="mb-5">
        <SectionTitle
          heading={"From 11.00am to 10.00pm "}
          subHeading={"Order online"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item=><Menuitem key={item._id} item={item}></Menuitem>)
                }
            </div>
        </section>
        
    );
};

export default PopularMenu;