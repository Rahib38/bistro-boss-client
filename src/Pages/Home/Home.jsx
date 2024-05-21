import PopularMenu from "../PopularMenu/PopularMenu";
import Banner from "./Banner";
import Category from "./Category";
import Featured from "./Featured";


const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
        </div>
    );
};

export default Home;