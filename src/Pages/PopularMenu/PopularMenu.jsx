import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import Menuitem from "../Shared/Menuitem";


const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('PopularMenu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular')
                setMenu(popularItems)
        })
    },[])
    return (
      <section className="mb-5">
        <SectionTitle
          heading={"From 11.00am to 10.00pm "}
          subHeading={"Order online"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    menu.map(item=><Menuitem key={item._id} item={item}></Menuitem>)
                }
            </div>
        </section>
        
    );
};

export default PopularMenu;